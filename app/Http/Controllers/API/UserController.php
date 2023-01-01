<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        if (Auth::check()) {
            $response = [
                'success' => false,
                'message' => 'This email is already used!',
            ];
        } else {
            try {
                $user = new User();
                $user->nickname = $request->nickname;
                $user->email = $request->email;
                $user->firstname = $request->firstname;
                $user->surname = $request->surname;
                $user->password = Hash::make($request->password);
                $user->save();
                $success = true;
                $message = 'User created successfully';
                $credentials = [
                    'email' => $request->email,
                    'password' => $request->password,
                ];
                Auth::attempt($credentials);
            } catch (\Illuminate\Database\QueryException $ex) {
                $success = false;
                $message = $ex->getMessage();
            }

            $response = [
                'success' => $success,
                'message' => $message,
            ];
        }

        return response()->json($response);
    }

    public function login(Request $request)
    {
        if (Auth::check()) {
            $response = [
                'success' => false,
                'message' => 'Already logged!',
            ];
        } else {
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];

            if (Auth::attempt($credentials)) {
                $success = true;
                $message = 'User login successfully';
            } else {
                $success = false;
                $message = 'Incorrect email or password!';
            }

            // response
            $response = [
                'success' => $success,
                'message' => $message,
            ];
        }

        return response()->json($response);
    }

    public function logout()
    {
        try {
            Session::flush();
            $success = true;
            $message = 'Successfully logged out';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}
