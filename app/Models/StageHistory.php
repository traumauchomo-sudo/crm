<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StageHistory extends Model
{
    public $timestamps = false;

    protected $table = 'stage_history';

    protected $fillable = [
        'deal_id',
        'stage_id',
        'changed_by',
        'changed_at',
        'from_stage_id',
        'to_stage_id',
    ];

    protected $casts = [
        'changed_at' => 'datetime',
    ];

    public function deal(): BelongsTo
    {
        return $this->belongsTo(Deal::class);
    }

    public function stage(): BelongsTo
    {
        return $this->belongsTo(Stage::class);
    }
}
