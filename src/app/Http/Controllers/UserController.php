<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response|RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            return Inertia::render('Admin/Users', ['users' => User::all()]);
        }
        return redirect()->intended('/');
    }

    /**
     * Set a user's admin status
     */
    public function setAdmin(Request $request, User $user): RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $user->is_admin = boolval($request->query('admin'));
            $user->save();
            return redirect()->intended(route('admin.users'));
        }
        return redirect()->intended('/');
    }

    /**
     * Set a user's banned status
     */
    public function setBanned(Request $request, User $user): RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $user->is_banned = boolval($request->query('banned'));
            $user->save();
            return redirect()->intended(route('admin.users'));
        }
        return redirect()->intended('/');
    }
}
