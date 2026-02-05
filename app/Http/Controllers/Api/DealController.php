<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\Stage;
use App\Models\StageHistory;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

class DealController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Deal::query()->with(['stage', 'organization', 'owner']);

        if ($stageId = $request->integer('stage_id')) {
            $query->where('stage_id', $stageId);
        }

        return response(['data' => $query->get()]);
    }

    public function updateStage(Request $request, Deal $deal): Response
    {
        $validated = $request->validate([
            'stage_id' => ['required', 'integer', 'exists:stages,id'],
            'amount' => ['nullable', 'numeric'],
            'expected_close_at' => ['nullable', 'date'],
            'probability' => ['nullable', 'integer', 'min:0', 'max:100'],
            'win_reason' => ['nullable', 'string', 'max:255'],
            'loss_reason' => ['nullable', 'string', 'max:255'],
        ]);

        $newStage = Stage::query()->findOrFail($validated['stage_id']);
        $requiredFields = $newStage->required_fields?->toArray() ?? [];

        foreach ($requiredFields as $field) {
            if (empty($validated[$field])) {
                return response([
                    'message' => 'Required field missing.',
                    'field' => $field,
                ], 422);
            }
        }

        if (strtolower($newStage->name) === 'won' && empty($validated['win_reason'])) {
            return response(['message' => 'Win reason is required.'], 422);
        }

        if (strtolower($newStage->name) === 'lost' && empty($validated['loss_reason'])) {
            return response(['message' => 'Loss reason is required.'], 422);
        }

        $previousStageId = $deal->stage_id;

        $deal->update([
            'stage_id' => $newStage->id,
            'amount' => $validated['amount'] ?? $deal->amount,
            'expected_close_at' => $validated['expected_close_at'] ?? $deal->expected_close_at,
            'probability' => $validated['probability'] ?? $deal->probability,
            'win_reason' => $validated['win_reason'] ?? $deal->win_reason,
            'loss_reason' => $validated['loss_reason'] ?? $deal->loss_reason,
        ]);

        StageHistory::create([
            'deal_id' => $deal->id,
            'stage_id' => $newStage->id,
            'changed_by' => optional($request->user())->id,
            'changed_at' => Carbon::now(),
            'from_stage_id' => $previousStageId,
            'to_stage_id' => $newStage->id,
        ]);

        if (strtolower($newStage->name) === 'proposal') {
            Task::create([
                'title' => 'Create proposal for ' . $deal->title,
                'description' => 'Auto-created from pipeline automation.',
                'due_at' => Carbon::now()->addDays(2),
                'assignee_id' => $deal->owner_id,
                'related_type' => Deal::class,
                'related_id' => $deal->id,
            ]);
        }

        return response(['data' => $deal->refresh()->load('stage')]);
    }
}
