<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contact_id')->nullable()->constrained('contacts')->cascadeOnDelete();
            $table->foreignId('deal_id')->nullable()->constrained('deals')->cascadeOnDelete();
            $table->string('type');
            $table->string('outcome')->nullable();
            $table->string('sentiment')->nullable();
            $table->unsignedInteger('duration_minutes')->nullable();
            $table->text('summary')->nullable();
            $table->timestamp('occurred_at')->nullable();
            $table->string('email_message_id')->nullable();
            $table->string('thread_id')->nullable();
            $table->timestamps();

            $table->index(['contact_id', 'occurred_at']);
            $table->index(['deal_id', 'occurred_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
