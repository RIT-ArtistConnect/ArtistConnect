<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TagHistory extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tag_history';

    /**
     * Get the last user to act on the tag.
     */
    protected function actor(): HasOne
    {
        return $this->hasOne(User::class);
    }

    /**
     * Get the action_note for this TagHistory
     */
    public function action_note(): string
    {
        return $this->action_note;
    }
}
