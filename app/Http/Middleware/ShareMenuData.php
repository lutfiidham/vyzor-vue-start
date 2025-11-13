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
        // Load menu ONCE and cache in request
        if (!$request->attributes->has('user_menus')) {
            $menus = $this->menuService->getUserMenu();
            $request->attributes->set('user_menus', $menus);
        }

        // Share menu data with all Inertia views (eager, not lazy)
        Inertia::share('menus', $request->attributes->get('user_menus'));

        return $next($request);
    }
}
