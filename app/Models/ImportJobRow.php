<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ImportJobRow extends Model
{
    protected $fillable = ['import_job_id', 'row_number', 'errors', 'row_data'];

    protected $casts = [
        'errors' => AsArrayObject::class,
        'row_data' => AsArrayObject::class,
    ];

    public function job(): BelongsTo
    {
        return $this->belongsTo(ImportJob::class, 'import_job_id');
    }
}
