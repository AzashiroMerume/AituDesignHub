<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Project extends Model
{
    /**
     * PROJECT ATTRIBUTES
     * $this->attributes['id'] - int - contains the project primary key (id)
     *  $this->attributes['owner_id'] - int - contains the referenced user id
     * $this->attributes['project_name'] - string - contains the project name
     * $this->attributes['project_description'] - string - contains the project description
     * $this->attributes['project_preview'] - string - contains the project preview image name
     * $this->attributes['created_at'] - timestamp - contains the project creation date
     * $this->attributes['updated_at'] - timestamp - contains the project update date
     */


}
