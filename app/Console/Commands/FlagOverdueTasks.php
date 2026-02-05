<?php

namespace App\Console\Commands;

use App\Models\Task;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class FlagOverdueTasks extends Command
{
    protected $signature = 'tasks:flag-overdue';
    protected $description = 'Flag overdue tasks for SLA alerting.';

    public function handle(): int
    {
        $now = Carbon::now();

        $count = Task::query()
            ->where('status', '!=', 'completed')
            ->whereNotNull('due_at')
            ->where('due_at', '<', $now)
            ->update(['is_overdue' => true]);

        $this->info("Flagged {$count} overdue tasks.");

        return self::SUCCESS;
    }
}
