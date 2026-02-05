<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\AttachmentController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CustomFieldController;
use App\Http\Controllers\Api\DealController;
use App\Http\Controllers\Api\PipelineController;
use App\Http\Controllers\Api\ReportingViewController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('contacts', [ContactController::class, 'index']);
Route::post('contacts', [ContactController::class, 'store']);
Route::put('contacts/{contact}', [ContactController::class, 'update']);
Route::get('contacts/{contact}/merge-preview', [ContactController::class, 'mergePreview']);
Route::post('contacts/{contact}/merge', [ContactController::class, 'merge']);
Route::post('contacts/import', [ContactController::class, 'import']);
Route::get('contacts/export', [ContactController::class, 'export']);

Route::get('pipelines', [PipelineController::class, 'index']);
Route::get('deals', [DealController::class, 'index']);
Route::post('deals/{deal}/stage', [DealController::class, 'updateStage']);

Route::post('activities', [ActivityController::class, 'store']);

Route::get('tasks', [TaskController::class, 'index']);
Route::post('tasks', [TaskController::class, 'store']);
Route::patch('tasks/{task}/complete', [TaskController::class, 'complete']);

Route::get('custom-fields', [CustomFieldController::class, 'index']);
Route::post('custom-fields', [CustomFieldController::class, 'store']);

Route::get('reporting-views', [ReportingViewController::class, 'index']);
Route::post('reporting-views', [ReportingViewController::class, 'store']);

Route::get('attachments/{attachment}/download', [AttachmentController::class, 'download']);
