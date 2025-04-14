<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TagHistory extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tag_history';

    protected function tag(): HasOne
    {
        return $this->hasOne(Tag::class, 'id', 'tag_id');
    }

    /**
     * Get the last user to act on the tag.
     */
    public function actor(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // protected $fillable = [
    //     'label'
    // ];

    protected $with = ['actor'];
}
