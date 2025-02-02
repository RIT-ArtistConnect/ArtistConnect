<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TagController extends Controller
{
    public function index(Request $request): Response|RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            return Inertia::render('Admin/Tags', ['tags' => Tag::all()]);
        }
        return redirect()->intended('/');
    }

    public function history(Request $request, Tag $tag): Response|RedirectResponse
    {
        $request_user = $request->user();
        if ($request_user->is_admin) {
            return Inertia::render('Admin/TagHistory', ['history' => $tag->history()->get()]);
        }
        return redirect()->intended('/');
    }
}
