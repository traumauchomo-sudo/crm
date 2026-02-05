<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ReportingView extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'owner_id',
        'filters_json',
        'visibility_scope',
    ];

    protected $casts = [
        'filters_json' => 'array',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
