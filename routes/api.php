<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/projects', [ProjectController::class, 'getAllProjects']);
Route::get('/projects/{id}', [ProjectController::class, 'getProjectById']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/myprojects', [ProjectController::class, 'getAllMyProjects']);
    Route::post('/create', [ProjectController::class, 'createProject']);
    Route::post('/edit', [ProjectController::class, 'editProject']);
    Route::post('/delete', [ProjectController::class, 'deleteProject']);
    Route::post('/logout', [UserController::class, 'logout']);
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
