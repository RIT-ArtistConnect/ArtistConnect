<?php

namespace App\Models;

use App\Enums\TagAction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tag extends Model
{
    /**
     * Get the TagHistory(s) associated with this tag
     */
    public function history(): HasMany
    {
        return $this->hasMany(TagHistory::class);
    }

    /**
     * Get the most recent TagHistory for this tag.
     */
    public function latestHistory(): TagHistory
    {
        return $this->history()->latest()->first();
    }

    /**
     * Get the most recent label from the history table
     */
    public function getLabelAttribute(): string
    {
        return $this->latestHistory()->label;
    }

    /**
     * Get the most recent type from the history table.
     */
    public function getTypeAttribute(): string
    {
        return $this->latestHistory()->type;
    }

    /**
     * Get if the tag is active (Created, Updated, or Approved)
     */
    public function getActiveAttribute(): bool
    {
        return in_array($this->latestHistory()->action, [TagAction::CREATED->value, TagAction::UPDATED->value, TagAction::APPROVED->value]);
    }

    /**
     * Get most recent updated time
     */
    public function getUpdatedAtAttribute()
    {
        return $this->latestHistory()->updated_at;
    }

    /**
     * Get most recent history as an attribute
     */
    public function getLatestHistoryAttribute(): TagHistory
    {
        return $this->latestHistory();
    }

    protected $appends = ['label', 'type', 'active', 'updated_at', 'latest_history'];
}
