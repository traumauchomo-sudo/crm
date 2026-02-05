<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'organization_id',
        'owner_id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'status',
        'merged_from_ids',
    ];

    protected $casts = [
        'merged_from_ids' => AsArrayObject::class,
    ];

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'contact_tags')->withTimestamps();
    }

    public function customFieldValues(): HasMany
    {
        return $this->hasMany(CustomFieldValue::class, 'entity_id')
            ->whereHas('customField', fn ($query) => $query->where('entity_type', 'contact'));
    }

    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }

    public function owners(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'contact_owners', 'contact_id', 'owner_id')
            ->withPivot('role')
            ->withTimestamps();
    }
}
