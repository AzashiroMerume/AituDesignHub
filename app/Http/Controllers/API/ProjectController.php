<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function getAllProjects()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function getAllMyProjects()
    {
        $myProjects = Project::where('id', Auth::user()->_id);
        return response()->json($myProjects);
    }

    public function createProject(Request $request)
    {
        if (Auth::check()) {
            $attr = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:1000',
                'preview_img' => 'string|max:255',
            ]);

            $project = Project::create([
                'name' => $attr['name'],
                'description' => $attr['description'],
                'preview_img' => $attr['preview_img'],
            ]);

            $success = true;
            $message = 'Project created successfully';
        } else {
            $success = false;
            $message = 'You are not logged yet';
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    public function deleteProject(Request $request)
    {
        $id = $request->id;
        if (Auth::check()) {
            Project::destroy($id);
            $success = true;
            $message = 'Project created successfully';
        } else {
            $success = false;
            $message = 'Log in first';
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}