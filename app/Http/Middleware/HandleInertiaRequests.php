<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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
            'menus' => $request->user()
                ? $this->getUserMenus($request->user())
                : [],
        ];
    }

    /**
     * Get menus for user based on their roles
     */
    protected function getUserMenus($user): array
    {
        // Get cache key based on user's role IDs
        $roleIds = $user->roles->pluck('id')->sort()->implode('_');
        $cacheKey = "user_menus_{$roleIds}";

        return Cache::remember($cacheKey, 3600, function () use ($user) {
            // Get user's role IDs
            $userRoleIds = $user->roles->pluck('id');

            // Get menus accessible to user's roles
            $menus = \App\Models\Menu::whereHas('roles', function ($query) use ($userRoleIds) {
                    $query->whereIn('roles.id', $userRoleIds);
                })
                ->active()
                ->root()
                ->with(['children' => function ($query) use ($userRoleIds) {
                    $query->active()
                          ->whereHas('roles', function ($query) use ($userRoleIds) {
                              $query->whereIn('roles.id', $userRoleIds);
                          })
                          ->with(['children' => function ($query) use ($userRoleIds) {
                              $query->active()
                                    ->whereHas('roles', function ($query) use ($userRoleIds) {
                                        $query->whereIn('roles.id', $userRoleIds);
                                    });
                          }]);
                }])
                ->ordered()
                ->get();

            // Transform to frontend format
            return $menus->map(function ($menu) {
                return $menu->toArrayForFrontend();
            })->toArray();
        });
    }
}
