<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pipeline;
use Illuminate\Http\Response;

class PipelineController extends Controller
{
    public function index(): Response
    {
        $pipelines = Pipeline::query()->with('stages')->get();

        return response(['data' => $pipelines]);
    }
}
