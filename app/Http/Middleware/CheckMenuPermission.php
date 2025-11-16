<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckMenuPermission
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Allow access if user has Super Admin or Admin role (bypass permission check)
        if (auth()->user() && auth()->user()->hasAnyRole(['Super Admin', 'Admin'])) {
            return $next($request);
        }
        
        // Check if user has any menu permission
        if (auth()->user() && !auth()->user()->hasAnyPermission([
            'menus.view',
            'menus.create', 
            'menus.edit',
            'menus.delete'
        ])) {
            abort(403, 'Unauthorized access to Menu Management');
        }

        return $next($request);
    }
}
