<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class AttachmentController extends Controller
{
    public function download(Attachment $attachment, Request $request): Response
    {
        $userId = optional($request->user())->id;
        if ($attachment->is_private && $attachment->owner_id !== $userId) {
            return response(['message' => 'Unauthorized.'], 403);
        }

        if (!Storage::exists($attachment->file_path)) {
            return response(['message' => 'File not found.'], 404);
        }

        return response()->download(Storage::path($attachment->file_path), $attachment->file_name);
    }
}
