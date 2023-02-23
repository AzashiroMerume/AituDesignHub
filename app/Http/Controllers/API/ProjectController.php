<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectContent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function getAllProjects()
    {
        $projects = Project::all();

        if ($projects->isEmpty()) {
            return response()->json([]);
        }

        return response()->json($projects);
    }

    public function getAllMyProjects()
    {
        $user_id = Auth::user()->_id;
        $myProjects = Project::where('owner_id', $user_id)->get();
        return response()->json($myProjects);
    }

    public function getProjectById($id)
    {
        $project = Project::with('content')->find($id);


        if (!$project) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found',
            ]);
        }

        return response()->json($project);
    }

    public function createProject(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'preview' => 'required|file|mimes:jpeg,png,jpg,gif,svg',
            'images' => 'required|array',
            'images.*' => 'required|file|mimes:jpeg,png,jpg,gif,svg'
        ]);

        try {
            $generated_new_name = $validatedData['preview']->hashName();
            $path = $validatedData['preview']->storeAs('previews', $generated_new_name, 'public');

            $project = Project::create([
                'owner_id' => Auth::user()->_id,
                'name' => $validatedData['name'],
                'description' => $validatedData['description'],
                'preview_url' => url('/storage/' . $path),
                'preview_name' => $path,
            ]);

            foreach ($validatedData['images'] as $image) {
                $generated_new_name = $image->hashName();
                $imagePath = $image->storeAs('content_images', $generated_new_name, 'public');
                $project_content = ProjectContent::create([
                    'project_id' => $project->id,
                    'image_name' => $imagePath,
                    'image_path' => url('/storage/' . $imagePath),
                ]);
            }

            $response = [
                'success' => true,
                'message' => 'Project created successfully',
            ];

            return response()->json($response);
        } catch (\Exception $e) {
            $response = [
                'success' => false,
                'message' => 'An error occurred while creating the project',
            ];

            return response()->json($response);
        }
    }


    public function editProject(Request $request)
    {
        $attr = $request->validate([
            'project_id' => 'required|string',
            'owner_id' => 'required|string',
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:1000',
            'preview' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $project = Project::find($attr['project_id']);
        if (!$project) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found',
            ]);
        }

        if ($project->owner_id != Auth::user()->_id) {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to edit this project',
            ]);
        }

        $previewUrl = $project->preview_url;
        $previewName = $project->preview_name;

        if ($request->hasFile('preview')) {
            $old_preview = $previewName;
            Storage::disk('public')->delete($old_preview);
            $generatedNewName = $request->preview->hashName();
            $path = $request->preview->storeAs('previews', $generatedNewName, 'public');
            $previewUrl = url('/storage/' . $path);
            $previewName = $path;
        }

        $project->name = isset($attr['name']) ? $attr['name'] : $project->name;
        $project->description = isset($attr['description']) ? $attr['description'] : $project->description;
        $project->preview_url = $previewUrl;
        $project->preview_name = $previewName;
        $project->save();

        $success = true;
        $message = 'Project updated successfully';

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    public function deleteProject(Request $request)
    {
        $id = $request->id;
        $project = Project::with('content')->find($id);

        if ($project->owner_id != Auth::user()->_id) {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to edit this project',
            ]);
        }


        Storage::disk('public')->delete($project->preview_name);
        foreach ($project->content as $projectContent) {
            Storage::disk('public')->delete($projectContent->image_name);
            $projectContent->delete();
        }
        Project::destroy($id);
        $success = true;
        $message = 'Project deleted successfully';

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}
