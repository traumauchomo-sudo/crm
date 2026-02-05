<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ActivityController extends Controller
{
    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'contact_id' => ['nullable', 'integer', 'exists:contacts,id'],
            'deal_id' => ['nullable', 'integer', 'exists:deals,id'],
            'type' => ['required', 'string', 'max:255'],
            'outcome' => ['nullable', 'string', 'max:255'],
            'duration_minutes' => ['nullable', 'integer'],
            'sentiment' => ['nullable', 'string', 'max:255'],
            'summary' => ['nullable', 'string'],
            'occurred_at' => ['nullable', 'date'],
            'email_message_id' => ['nullable', 'string', 'max:255'],
            'thread_id' => ['nullable', 'string', 'max:255'],
            'attachment' => ['nullable', 'file'],
        ]);

        $activity = Activity::create($validated);

        if ($request->file('attachment')) {
            $file = $request->file('attachment');
            $path = $file->store('attachments');

            Attachment::create([
                'owner_id' => optional($request->user())->id,
                'file_name' => $file->getClientOriginalName(),
                'file_path' => $path,
                'content_type' => $file->getClientMimeType(),
                'size_bytes' => $file->getSize(),
                'attachable_id' => $activity->id,
                'attachable_type' => Activity::class,
                'is_private' => false,
            ]);
        }

        return response(['data' => $activity->load('attachments')], 201);
    }
}
