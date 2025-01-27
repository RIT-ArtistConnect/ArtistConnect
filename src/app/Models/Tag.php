<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;

class Tag extends Model
{
    /**
     * Get the TagHistory(s) associated with this tag
     */
    protected function history(): BelongsToMany
    {
        return $this->belongsToMany(TagHistory::class);
    }

    /**
     * Get the most recent TagHistory for this tag.
     */
    protected function latestHistory(): HasOne
    {
        return $this->hasOne(TagHistory::class)->latestOfMany();
    }

    /**
     * Get the most recent label from the history table
     */
    public function label(): string
    {
        return $this->latestHistory->label;
    }

    /**
     * Get the most recent type from the history table.
     */
    public function type(): string
    {
        return $this->latestHistory->type;
    }

    /**
     * Get if the tag is active (Created, Updated, or Approved)
     */
    public function active(): bool
    {
        return in_array($this->latestHistory->action, ['Created', 'Updated', 'Approved']);
    }

    /**
     * Get most recent updated time
     */
    public function updated_at(): Carbon
    {
        return $this->latestHistory->updated_at;
    }
}
