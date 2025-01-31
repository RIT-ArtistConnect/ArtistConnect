<?php
//Verified User: Request Tag
// Admin: Create Tag
namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TagController extends Controller
{
    public function request(): Response|RedirectResponse{
        //Allows a verified user to request the tag.
        //So this probably accepts the tag request from the UserTagRequestForm...??
    }

    public function create(Request $request, Tag $tag): Response|RedirectResponse //Unsure what this R|RR does
    //Allows an admin to create a tag from scratch
    {//Only accessible by admins
        $request_user = $request->user(); //determines user's status
        if ($request_user->is_admin) { //checks if request_user is an admin
            //Create the tag. What are aspects of a tag?
            //Type. Name.
            
        }
    }

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