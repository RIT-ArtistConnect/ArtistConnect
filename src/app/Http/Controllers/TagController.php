<?php
//Verified User: Request Tag
// Admin: Create Tag
namespace App\Http\Controllers;

use App\Enums\TagAction;
use App\Models\Tag;
use App\Models\TagHistory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Enums\TagType;
use Illuminate\Validation\Rule;

use function PHPUnit\Framework\isNull;

class TagController extends Controller
{
    public function request(Request $request): Response|RedirectResponse{ 

        //Allows a verified user to request the tag.
        //So this probably accepts the tag request from the UserTagRequestForm...??

        $validated = $request->validate([
            'label' => 'required|string|max:255|',
            'type'=> [Rule::enum(TagType::class)], //Accesses TagType's enum
        ]);

        //Store request in Tag History
        $tag = Tag::create(); //Initialize tag first
        $tag->history()->create([
            'label' => $validated['label'],
            'type' => $validated['type'],
            'action' => TagAction::REQUESTED, //Accesses TagAction's enum, REQUESTED
            'user_id' => $request->user()->id,
            'action_note' => 'User requested this tag',
        ]);

        return redirect()->back()->with('success','Tag request submitted successfully.');
    }

    public function create(Request $request): Response|RedirectResponse
    //Allows an admin to create a tag from scratch
    {//Only accessible by admins

            $validated = $request->validate([
                'label' => 'required|string|max:255|',
                'type'=>[Rule::enum(TagType::class)],
            ]);

            $tag = Tag::create();

            //Log creation in TagHistory
            $tag->history()->create([
                'label' =>$validated['label'],
                'type'=>$validated['type'],
                'action'=>TagAction::CREATED,
                'user_id'=>$request->user()->id,
                'action_note'=>'Admin created this tag',
            ]);

            return redirect()->back()->with('success', 'Tag created successfully.');
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

    public function approve(Request $request, Tag $tag): Response|RedirectResponse
    {
        $params = $request->validate([
            'note' => 'string|nullable',
            'returnRoute' => 'string',
        ]);
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $latestHistory = $tag->latest_history;
            if ($latestHistory->action != TagAction::REQUESTED->value) {
                return redirect()->intended(route($params['returnRoute']))->withErrors(['deny' => 'Cannot approve a '.$latestHistory->action.' tag']);
            }
            $history = new TagHistory;
            $history->label = $latestHistory->label;
            $history->type = $latestHistory->type;
            $history->action = TagAction::APPROVED;
            $history->action_note = isNull($params['note']) ? '' : $params['note'];
            $history->tag_id = $tag->id;
            $history->actor_id = $request_user->id;
            $history->save();
            return redirect()->intended(route($params['returnRoute']));
        }
        return redirect()->intended('/');
    }

    public function deny(Request $request, Tag $tag): Response|RedirectResponse
    {
        $params = $request->validate([
            'note' => 'string|nullable',
            'returnRoute' => 'string',
        ]);
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $latestHistory = $tag->latest_history;
            if ($latestHistory->action != TagAction::REQUESTED->value) {
                return redirect()->intended(route($params['returnRoute']))->withErrors(['deny' => 'Cannot deny a '.$latestHistory->action.' tag']);
            }
            $history = new TagHistory;
            $history->label = $latestHistory->label;
            $history->type = $latestHistory->type;
            $history->action = TagAction::DENIED;
            $history->action_note = isNull($params['note']) ? '' : $params['note'];
            $history->tag_id = $tag->id;
            $history->actor_id = $request_user->id;
            $history->save();
            return redirect()->intended(route($params['returnRoute']));
        }
        return redirect()->intended('/');
    }

    public function retire(Request $request, Tag $tag): Response|RedirectResponse
    {
        $params = $request->validate([
            'note' => 'string|nullable',
            'returnRoute' => 'string',
        ]);
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $latestHistory = $tag->latest_history;
            if (!$tag->active) {
                return redirect()->intended(route($params['returnRoute']))->withErrors(['deny' => 'Cannot deny a '.$latestHistory->action.' tag']);
            }
            $history = new TagHistory;
            $history->label = $latestHistory->label;
            $history->type = $latestHistory->type;
            $history->action = TagAction::RETIRED;
            $history->action_note = isNull($params['note']) ? '' : $params['note'];
            $history->tag_id = $tag->id;
            $history->actor_id = $request_user->id;
            $history->save();
            return redirect()->intended(route($params['returnRoute']));
        }
        return redirect()->intended('/');
    }

    public function update(Request $request, Tag $tag): Response|RedirectResponse
    {
        $params = $request->validate([
            'note' => 'string|nullable',
            'returnRoute' => 'string',
        ]);
        $request_user = $request->user();
        if ($request_user->is_admin) {
            $latestHistory = $tag->latest_history;
            $history = new TagHistory;
            $history->label = $latestHistory->label;
            $history->type = $latestHistory->type;
            $history->action = TagAction::UPDATED;
            $history->action_note = isNull($params['note']) ? '' : $params['note'];
            $history->tag_id = $tag->id;
            $history->actor_id = $request_user->id;
            $history->save();
            return redirect()->intended(route($params['returnRoute']));
        }
        return redirect()->intended('/');
    }
}
