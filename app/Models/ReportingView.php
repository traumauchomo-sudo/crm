<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ReportingView extends Model
{
    protected $fillable = ['name', 'owner_id', 'filters_json', 'visibility_scope'];

    protected $casts = [
        'filters_json' => AsArrayObject::class,
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
