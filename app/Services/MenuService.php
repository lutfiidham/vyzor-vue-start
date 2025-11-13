<?php

namespace App\Services;

use App\Models\Menu;
use Illuminate\Support\Facades\Cache;

class MenuService
{
    /**
     * Get menus for specific roles
     */
    public function getMenusByRoles(array $roleIds): array
    {
        sort($roleIds);
        $cacheKey = "user_menus_" . implode('_', $roleIds);
        
        return Cache::remember($cacheKey, 3600, function () use ($roleIds, $cacheKey) {
            $this->storeCacheKey($cacheKey);
            return $this->buildMenuTree($roleIds);
        });
    }

    /**
     * Get menus for current authenticated user
     */
    public function getUserMenu(): array
    {
        $user = auth()->user();
        
        if (!$user) {
            return [];
        }

        $roleIds = $user->roles->pluck('id')->toArray();
        
        if (empty($roleIds)) {
            return [];
        }

        return $this->getMenusByRoles($roleIds);
    }

    /**
     * Build menu tree hierarchy for given roles
     */
    protected function buildMenuTree(array $roleIds): array
    {
        $menus = Menu::whereHas('roles', function ($query) use ($roleIds) {
                $query->whereIn('roles.id', $roleIds);
            })
            ->active()
            ->root()
            ->with(['children' => function ($query) use ($roleIds) {
                $query->active()
                      ->whereHas('roles', function ($query) use ($roleIds) {
                          $query->whereIn('roles.id', $roleIds);
                      })
                      ->with(['children' => function ($query) use ($roleIds) {
                          $query->active()
                                ->whereHas('roles', function ($query) use ($roleIds) {
                                    $query->whereIn('roles.id', $roleIds);
                                });
                      }]);
            }])
            ->ordered()
            ->get();

        return $menus->map(fn($menu) => $menu->toArrayForFrontend())->toArray();
    }

    /**
     * Toggle menu active status
     */
    public function toggleMenuStatus(Menu $menu): Menu
    {
        $menu->update(['is_active' => !$menu->is_active]);
        \Artisan::call('cache:clear');
        
        return $menu;
    }
    
    /**
     * Store cache key for later clearing
     */
    protected function storeCacheKey(string $key): void
    {
        $keys = Cache::get('menu_cache_keys', []);
        $keys[] = $key;
        Cache::put('menu_cache_keys', array_unique($keys), 86400); // 24 hours
    }
}
