<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class.'|regex:/(.*)rit\.edu$/i',
                'password' => 'required|string|confirmed|min:8',
            ],
            [
                'password.confirmed' => 'Password confirmation does not match.',
                'password.min' => 'Password must be at least 8 characters long.',
            ]
        );

        $validator->after(function ($validator) use ($request) {
            $password = (string) $request->input('password', '');

            if ($password === '') {
                return;
            }

            if (! preg_match('/[a-z]/', $password)) {
                $validator->errors()->add('password', 'Password must contain at least one lowercase letter.');
            }

            if (! preg_match('/[A-Z]/', $password)) {
                $validator->errors()->add('password', 'Password must contain at least one uppercase letter.');
            }

            if (! preg_match('/\d/', $password)) {
                $validator->errors()->add('password', 'Password must contain at least one number.');
            }
        });

        $validator->validate();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('homepage', absolute: false));
    }
}
