<?php






namespace App\Providers;
use Illuminate\Support\Facades\Schema;//Added

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191); //ADDED
        Vite::prefetch(concurrency: 3);
    }
}
