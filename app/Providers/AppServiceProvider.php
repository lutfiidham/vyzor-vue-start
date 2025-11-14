<?php

namespace App\Providers;

use App\Helpers\DateTimeHelper;
use App\Settings\GeneralSettings;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Date;
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
        try {
            $timezone = app(GeneralSettings::class)->timezone;
            config(['app.timezone' => $timezone]);
            date_default_timezone_set($timezone);
        } catch (\Exception $e) {
            // Fallback to default timezone if settings not available yet
        }

        // Register Blade directives for date formatting
        Blade::directive('datetime', function ($expression) {
            return "<?php echo \App\Helpers\DateTimeHelper::formatDateTime($expression); ?>";
        });

        Blade::directive('date', function ($expression) {
            return "<?php echo \App\Helpers\DateTimeHelper::formatDate($expression); ?>";
        });

        Blade::directive('diffHumans', function ($expression) {
            return "<?php echo \App\Helpers\DateTimeHelper::diffForHumans($expression); ?>";
        });
    }
}
