<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage/Homepage');
    
})->name('homepage');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users');
    Route::post('/admin/users/{user}/admin', [UserController::class, 'setAdmin'])->name('admin.users.setAdmin');
    Route::post('/admin/users/{user}/banned', [UserController::class, 'setBanned'])->name('admin.users.setBanned');
    Route::post('/admin/users/{user}/verifyEmail', [UserController::class, 'manuallyVerify'])->name('admin.users.manuallyVerify');
});

Route::get('/devtesting', function(){
    return Inertia::render('DevTesting');
}
)->name('devtesting');

require __DIR__.'/auth.php';
