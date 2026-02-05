<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stage extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sort_order',
        'pipeline_id',
        'required_fields',
    ];

    protected $casts = [
        'required_fields' => 'array',
    ];

    public function deals(): HasMany
    {
        return $this->hasMany(Deal::class);
    }
}
