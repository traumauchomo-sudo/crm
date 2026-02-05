<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

class TaskController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Task::query();

        if ($assigneeId = $request->integer('assignee_id')) {
            $query->where('assignee_id', $assigneeId);
        }

        if ($filter = $request->string('due')->toString()) {
            $now = Carbon::now();
            if ($filter === 'today') {
                $query->whereDate('due_at', $now->toDateString());
            } elseif ($filter === 'overdue') {
                $query->where('due_at', '<', $now)->where('status', '!=', 'completed');
            } elseif ($filter === 'upcoming') {
                $query->where('due_at', '>=', $now->addDay());
            }
        }

        return response(['data' => $query->orderBy('due_at')->get()]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'due_at' => ['nullable', 'date'],
            'reminder_at' => ['nullable', 'date'],
            'assignee_id' => ['nullable', 'integer', 'exists:users,id'],
            'related_type' => ['nullable', 'string'],
            'related_id' => ['nullable', 'integer'],
        ]);

        $task = Task::create($validated);

        return response(['data' => $task], 201);
    }

    public function complete(Task $task): Response
    {
        $task->update([
            'status' => 'completed',
            'completed_at' => Carbon::now(),
        ]);

        return response(['data' => $task]);
    }
}
