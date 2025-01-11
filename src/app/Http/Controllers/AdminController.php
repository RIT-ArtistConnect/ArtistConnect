<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(Request $request): Response|RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            return Inertia::render('Admin/AdminHome', ['userCount' => User::all()->count()]);
        }
        return redirect()->intended('/');
    }
}
