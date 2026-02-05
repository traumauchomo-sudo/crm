<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->nullable()->constrained('organizations');
            $table->foreignId('owner_id')->nullable()->constrained('users');
            $table->foreignId('stage_id')->nullable()->constrained('stages');
            $table->string('title');
            $table->decimal('amount', 12, 2)->nullable();
            $table->unsignedInteger('probability')->default(0);
            $table->date('expected_close_at')->nullable();
            $table->string('win_reason')->nullable();
            $table->string('loss_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index('stage_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('deals');
    }
};
