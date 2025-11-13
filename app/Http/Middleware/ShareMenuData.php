<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\MenuService;
use Inertia\Inertia;

class ShareMenuData
{
    protected $menuService;

    public function __construct(MenuService $menuService)
    {
        $this->menuService = $menuService;
    }

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        // Share menu data with all Inertia views
        Inertia::share([
            'menus' => fn () => $this->menuService->getUserMenu(),
        ]);

        return $next($request);
    }
}
