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
                'message' => 'You are already logged! Pls log out first',
            ];
        } else {
            $attr = $request->validate([
                'nickname' => 'required|string|max:13',
                'email' => 'required|string|email|unique:users',
                'firstname' => 'string|max:255',
                'surname' => 'string|max:255',
                'password' => 'required|string|min:6'
            ]);

            $email = User::where('email', $request->email)->first();

            if (!$email) {
                $user = User::create([
                    'nickname' => $attr['nickname'],
                    'email' => $attr['email'],
                    'firstname' => $attr['firstname'],
                    'surname' => $attr['surname'],
                    'password' => bcrypt($attr['password']),
                ]);

                $success = true;
                $message = 'User created successfully';

                $credentials = [
                    'email' => $request->email,
                    'password' => $request->password,
                ];
                Auth::attempt($credentials);
            } else {
                $success = false;
                $message = 'This email already used! Try to login instead';
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
                'message' => 'Already logged! Try to log out first',
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
        if (Auth::check()) {
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
        } else {
            $response = [
                'success' => false,
                'message' => 'Have not logged yet!',
            ];
        }

        return response()->json($response);
    }
}
