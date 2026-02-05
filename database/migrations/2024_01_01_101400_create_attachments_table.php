<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner_id')->nullable()->constrained('users');
            $table->string('file_name');
            $table->string('file_path');
            $table->string('content_type')->nullable();
            $table->unsignedBigInteger('size_bytes')->nullable();
            $table->unsignedBigInteger('attachable_id');
            $table->string('attachable_type');
            $table->boolean('is_private')->default(false);
            $table->timestamps();

            $table->index(['attachable_type', 'attachable_id']);
            $table->index('owner_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
