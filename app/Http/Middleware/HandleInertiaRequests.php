<?php

namespace App\Http\Middleware;

use App\Settings\GeneralSettings;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'settings' => [
                'app_name' => app(GeneralSettings::class)->app_name,
                'app_description' => app(GeneralSettings::class)->app_description,
                'timezone' => app(GeneralSettings::class)->timezone,
                'date_format' => app(GeneralSettings::class)->date_format,
            ],
            // Menu is now shared by ShareMenuData middleware
            // No need to load it here to avoid duplicate cache queries
        ];
    }
}
