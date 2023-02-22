<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\User;

class Project extends Model
{
    /**
     * PROJECT ATTRIBUTES
     * $this->attributes['id'] - int - contains the project primary key (id)
     *  $this->attributes['owner_id'] - int - contains the referenced user id
     * $this->attributes['name'] - string - contains the project name
     * $this->attributes['description'] - string - contains the project description
     * $this->attributes['preview'] - string - contains the project preview image name
     * $this->attributes['created_at'] - timestamp - contains the project creation date
     * $this->attributes['updated_at'] - timestamp - contains the project update date
     */
    protected $fillable = [
        'owner_id',
        'name',
        'description',
        'preview',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
