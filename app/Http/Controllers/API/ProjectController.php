<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function getAllProjects()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function getAllMyProjects()
    {
        $user_id = Auth::user()->_id;
        $myProjects = Project::where('owner_id', $user_id)->get();
        return response()->json($myProjects);
    }

    public function createProject(Request $request)
    {
        if (Auth::check()) {
            $attr = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:1000',
                'preview' => 'required|file|mimes:jpeg,png,jpg,gif,svg',
            ]);

            //create proper handling 422 errors in vue store
            $generated_new_name = $request->preview->hashName();
            $path = $request->preview->storeAs('previews', $generated_new_name, 'public');
            $project = Project::create([
                'owner_id' => Auth::user()->_id,
                'name' => $attr['name'],
                'description' => $attr['description'],
                'preview_url' => url('/storage/' . $path),
                'preview_name' => $path,
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
            $file_path = Project::find($id)->preview_name;
            Storage::disk('public')->delete($file_path);
            Project::destroy($id);
            $success = $file_path;
            $message = 'Project deleted successfully';
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
