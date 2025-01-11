<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class CheckBanned extends Middleware
{
    public function handle($request, \Closure $next)
    {
        if (Auth::check() && Auth::user()->is_banned) {
            Auth::logout();

            return redirect('/login')->withErrors([
                'email' => __('Your account has been banned'),
            ]);
        }

        return $next($request);
    }
}
