<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->nullable()->constrained('organizations');
            $table->foreignId('owner_id')->nullable()->constrained('users');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('status')->default('active');
            $table->foreignId('merged_from_id')->nullable()->constrained('contacts');
            $table->timestamp('merged_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['status', 'owner_id']);
            $table->index(['organization_id', 'owner_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
