<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CustomField;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomFieldController extends Controller
{
    public function index(Request $request): Response
    {
        $query = CustomField::query();

        if ($entityType = $request->string('entity_type')->toString()) {
            $query->where('entity_type', $entityType);
        }

        return response(['data' => $query->get()]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'entity_type' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'field_type' => ['required', 'string', 'max:255'],
            'required' => ['boolean'],
        ]);

        $field = CustomField::create($validated);

        return response(['data' => $field], 201);
    }
}
