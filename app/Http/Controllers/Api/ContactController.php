<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\CustomFieldValue;
use App\Models\ImportJob;
use App\Models\ImportJobRow;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ContactController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Contact::query()->with(['organization', 'owner', 'tags']);

        if ($search = $request->string('search')->toString()) {
            $query->where(function ($builder) use ($search) {
                $builder->where('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if ($status = $request->string('status')->toString()) {
            $query->where('status', $status);
        }

        if ($ownerId = $request->integer('owner_id')) {
            $query->where('owner_id', $ownerId);
        }

        if ($tag = $request->string('tag')->toString()) {
            $query->whereHas('tags', fn ($builder) => $builder->where('name', $tag));
        }

        $sort = $request->string('sort')->toString();
        $direction = $request->string('direction')->toString() ?: 'asc';
        if (in_array($sort, ['first_name', 'last_name', 'email', 'status'], true)) {
            $query->orderBy($sort, $direction);
        }

        $contacts = $query->paginate(20);

        $statusCounts = Contact::query()
            ->select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->pluck('count', 'status');

        return response([
            'data' => $contacts,
            'status_counts' => $statusCounts,
        ]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'organization_id' => ['nullable', 'integer', 'exists:organizations,id'],
            'owner_id' => ['nullable', 'integer', 'exists:users,id'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', 'string', 'max:255'],
            'tags' => ['array'],
            'tags.*' => ['string'],
            'custom_fields' => ['array'],
        ]);

        $duplicate = Contact::query()->where('email', $validated['email'])->first();
        if ($duplicate) {
            return response([
                'message' => 'Duplicate contact detected.',
                'duplicate' => $duplicate,
            ], 409);
        }

        $contact = Contact::create(Arr::except($validated, ['tags', 'custom_fields']));

        if (!empty($validated['tags'])) {
            $tagIds = collect($validated['tags'])->map(function (string $tagName) {
                return Tag::firstOrCreate(['name' => $tagName])->id;
            });
            $contact->tags()->sync($tagIds->all());
        }

        $customFields = $validated['custom_fields'] ?? [];
        foreach ($customFields as $fieldId => $value) {
            CustomFieldValue::updateOrCreate([
                'custom_field_id' => $fieldId,
                'entity_id' => $contact->id,
            ], $this->formatCustomFieldValue($value));
        }

        return response(['data' => $contact->load(['tags'])], 201);
    }

    public function update(Request $request, Contact $contact): Response
    {
        $validated = $request->validate([
            'organization_id' => ['nullable', 'integer', 'exists:organizations,id'],
            'owner_id' => ['nullable', 'integer', 'exists:users,id'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('contacts', 'email')->ignore($contact->id)],
            'phone' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', 'string', 'max:255'],
            'tags' => ['array'],
            'tags.*' => ['string'],
            'custom_fields' => ['array'],
        ]);

        $contact->update(Arr::except($validated, ['tags', 'custom_fields']));

        if (array_key_exists('tags', $validated)) {
            $tagIds = collect($validated['tags'])->map(function (string $tagName) {
                return Tag::firstOrCreate(['name' => $tagName])->id;
            });
            $contact->tags()->sync($tagIds->all());
        }

        $customFields = $validated['custom_fields'] ?? [];
        foreach ($customFields as $fieldId => $value) {
            CustomFieldValue::updateOrCreate([
                'custom_field_id' => $fieldId,
                'entity_id' => $contact->id,
            ], $this->formatCustomFieldValue($value));
        }

        return response(['data' => $contact->load(['tags'])]);
    }

    public function mergePreview(Contact $contact, Request $request): Response
    {
        $duplicateId = $request->integer('duplicate_id');
        $duplicate = Contact::query()->findOrFail($duplicateId);

        return response([
            'primary' => $contact,
            'duplicate' => $duplicate,
            'fields' => [
                'first_name' => $contact->first_name ?: $duplicate->first_name,
                'last_name' => $contact->last_name ?: $duplicate->last_name,
                'email' => $contact->email,
                'phone' => $contact->phone ?: $duplicate->phone,
                'status' => $contact->status ?: $duplicate->status,
            ],
        ]);
    }

    public function merge(Contact $contact, Request $request): Response
    {
        $validated = $request->validate([
            'duplicate_id' => ['required', 'integer', 'exists:contacts,id'],
            'selections' => ['array'],
        ]);

        $duplicate = Contact::query()->findOrFail($validated['duplicate_id']);

        $selections = $validated['selections'] ?? [];
        foreach (['first_name', 'last_name', 'phone', 'status'] as $field) {
            if (isset($selections[$field])) {
                $contact->{$field} = $selections[$field] === 'duplicate'
                    ? $duplicate->{$field}
                    : $contact->{$field};
            }
        }

        $contact->merged_from_ids = array_values(array_unique(array_merge(
            (array) $contact->merged_from_ids,
            [$duplicate->id]
        )));
        $contact->save();

        $duplicate->delete();

        return response(['data' => $contact->refresh()]);
    }

    public function export(): StreamedResponse
    {
        $filename = 'contacts-export-' . Carbon::now()->format('Ymd-His') . '.csv';
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ];

        return response()->stream(function () {
            $handle = fopen('php://output', 'wb');
            fputcsv($handle, ['first_name', 'last_name', 'email', 'phone', 'status']);
            Contact::query()->chunk(200, function ($contacts) use ($handle) {
                foreach ($contacts as $contact) {
                    fputcsv($handle, [
                        $contact->first_name,
                        $contact->last_name,
                        $contact->email,
                        $contact->phone,
                        $contact->status,
                    ]);
                }
            });
            fclose($handle);
        }, 200, $headers);
    }

    public function import(Request $request): Response
    {
        $validated = $request->validate([
            'file' => ['required', 'file'],
        ]);

        $file = $validated['file'];
        $path = $file->store('imports');

        $job = ImportJob::create([
            'type' => 'contacts',
            'status' => 'processing',
            'original_filename' => $file->getClientOriginalName(),
            'created_by' => optional($request->user())->id,
        ]);

        $handle = fopen(Storage::path($path), 'rb');
        $rowNumber = 0;
        $header = null;
        $processed = 0;
        $errors = 0;

        while (($row = fgetcsv($handle)) !== false) {
            $rowNumber++;
            if ($rowNumber === 1) {
                $header = $row;
                continue;
            }

            $data = array_combine($header, $row);
            $rowErrors = [];

            if (empty($data['email'])) {
                $rowErrors[] = 'Email is required.';
            }

            if (!empty($data['email']) && Contact::where('email', $data['email'])->exists()) {
                $rowErrors[] = 'Duplicate email found.';
            }

            if ($rowErrors) {
                ImportJobRow::create([
                    'import_job_id' => $job->id,
                    'row_number' => $rowNumber,
                    'errors' => $rowErrors,
                    'row_data' => $data,
                ]);
                $errors++;
                continue;
            }

            Contact::create([
                'first_name' => $data['first_name'] ?? 'Unknown',
                'last_name' => $data['last_name'] ?? null,
                'email' => $data['email'],
                'phone' => $data['phone'] ?? null,
                'status' => $data['status'] ?? 'active',
            ]);
            $processed++;
        }

        fclose($handle);

        $job->update([
            'status' => 'completed',
            'total_rows' => max($rowNumber - 1, 0),
            'processed_rows' => $processed,
            'error_count' => $errors,
        ]);

        return response(['data' => $job->fresh('rows')]);
    }

    private function formatCustomFieldValue(mixed $value): array
    {
        if (is_numeric($value)) {
            return ['value_number' => $value, 'value_text' => null, 'value_date' => null];
        }

        if (is_string($value) && strtotime($value)) {
            return ['value_date' => $value, 'value_text' => null, 'value_number' => null];
        }

        return ['value_text' => $value, 'value_number' => null, 'value_date' => null];
    }
}
