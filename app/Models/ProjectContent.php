<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\Project;

class ProjectContent extends Model
{
    protected $fillable = [
        'project_id',
        'image_path',
        'image_name'
    ];


    public function project()
    {
        return $this->belongsTo(Project::class);
    }


}
