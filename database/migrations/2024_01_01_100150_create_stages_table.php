<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('stages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedInteger('sort_order')->default(0);
            $table->unsignedBigInteger('pipeline_id')->nullable();
            $table->json('required_fields')->nullable();
            $table->timestamps();

            $table->index(['pipeline_id', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stages');
    }
};
