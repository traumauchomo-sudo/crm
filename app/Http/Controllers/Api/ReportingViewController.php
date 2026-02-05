<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ReportingView;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReportingViewController extends Controller
{
    public function index(): Response
    {
        return response(['data' => ReportingView::query()->get()]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'filters_json' => ['required', 'array'],
            'visibility_scope' => ['nullable', 'string', 'max:255'],
        ]);

        $view = ReportingView::create([
            'name' => $validated['name'],
            'filters_json' => $validated['filters_json'],
            'visibility_scope' => $validated['visibility_scope'] ?? 'private',
            'owner_id' => optional($request->user())->id,
        ]);

        return response(['data' => $view], 201);
    }
}
