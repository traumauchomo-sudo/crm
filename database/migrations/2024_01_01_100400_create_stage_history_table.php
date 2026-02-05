<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('stage_history', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deal_id')->constrained('deals')->cascadeOnDelete();
            $table->foreignId('stage_id')->nullable()->constrained('stages');
            $table->foreignId('changed_by')->nullable()->constrained('users');
            $table->foreignId('from_stage_id')->nullable()->constrained('stages');
            $table->foreignId('to_stage_id')->nullable()->constrained('stages');
            $table->timestamp('changed_at');
            $table->timestamps();

            $table->index(['deal_id', 'changed_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stage_history');
    }
};
