<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tag extends Model
{
    /**
     * Get the TagHistory associated with this tag
     */
    protected function history(): BelongsTo
    {
        return $this->belongsTo(TagHistory::class);
    }

    /**
     * Get the user who created the tag.
     */
    protected function actor(): HasOneThrough
    {
        return $this->hasOneThrough(User::class, TagHistory::class);
    }

    /**
     * Get the most recent name (label) from the history table
     */
    public function name(): string
    {
        return $this->history->label;
    }

    /**
     * Get the most recent type from the history table.
     */
    public function type(): string
    {
        return $this->history->type;
    }

    /**
     * Get if the tag is active (Created, Updated, or Approved)
     */
    public function active(): bool
    {
        return in_array($this->history->action, ['Created', 'Updated', 'Approved']);
    }

    /**
     * Get most recent action_note
     */
    public function action_note(): string
    {
        return $this->history->action_note;
    }

    /**
     * Get most recent updated time
     */
    public function updated_at(): DateTime
    {
        return $this->history->updated_at;
    }
}
