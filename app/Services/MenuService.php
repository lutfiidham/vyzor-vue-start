<?php

namespace App\Services;

use App\Models\Menu;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

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
     * Create new menu with role assignment
     */
    public function createMenu(array $data): Menu
    {
        DB::beginTransaction();
        
        try {
            $roleIds = $data['role_ids'];
            unset($data['role_ids']);
            
            $menu = Menu::create($data);
            $menu->roles()->attach($roleIds);
            
            $this->clearMenuCache();
            
            DB::commit();
            
            return $menu;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Update menu with role assignment
     */
    public function updateMenu(Menu $menu, array $data): Menu
    {
        DB::beginTransaction();
        
        try {
            $roleIds = $data['role_ids'];
            unset($data['role_ids']);
            
            $menu->update($data);
            $menu->roles()->sync($roleIds);
            
            $this->clearMenuCache();
            
            DB::commit();
            
            return $menu;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Delete menu
     */
    public function deleteMenu(Menu $menu): bool
    {
        DB::beginTransaction();
        
        try {
            if ($menu->hasChildren()) {
                throw new \Exception("Cannot delete menu. It has child menus.");
            }
            
            $menu->roles()->detach();
            $menu->delete();
            
            $this->clearMenuCache();
            
            DB::commit();
            
            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Reorder menus
     */
    public function reorderMenus(array $menus): void
    {
        DB::beginTransaction();
        
        try {
            foreach ($menus as $menuData) {
                Menu::where('id', $menuData['id'])
                    ->update([
                        'order' => $menuData['order'],
                        'parent_id' => $menuData['parent_id'] ?? null,
                    ]);
            }
            
            $this->clearMenuCache();
            
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Toggle menu active status
     */
    public function toggleMenuStatus(Menu $menu): Menu
    {
        $menu->update(['is_active' => !$menu->is_active]);
        $this->clearMenuCache();
        
        return $menu;
    }

    /**
     * Clear all menu cache
     */
    public function clearMenuCache(): void
    {
        // Method 1: Clear tracked cache keys
        $cacheKeys = Cache::get('menu_cache_keys', []);
        foreach ($cacheKeys as $key) {
            Cache::forget($key);
        }
        Cache::forget('menu_cache_keys');
        
        // Method 2: Clear with Laravel prefix (for database driver)
        $prefix = config('cache.prefix', 'laravel_cache');
        
        // Force clear all possible menu cache patterns (up to 10 roles)
        for ($i = 1; $i <= 10; $i++) {
            Cache::forget("user_menus_{$i}");
            for ($j = $i + 1; $j <= 10; $j++) {
                Cache::forget("user_menus_{$i}_{$j}");
            }
        }
        
        // Method 3: For database driver, clear from table directly
        if (config('cache.default') === 'database') {
            try {
                // Delete all cache entries with 'user_menus' in key
                DB::table(config('cache.stores.database.table', 'cache'))
                    ->where('key', 'like', $prefix . '%user_menus%')
                    ->delete();
            } catch (\Exception $e) {
                \Log::warning('Could not clear cache from database: ' . $e->getMessage());
            }
        }
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

    /**
     * Get menu statistics
     */
    public function getStatistics(): array
    {
        return [
            'total' => Menu::count(),
            'active' => Menu::active()->count(),
            'inactive' => Menu::where('is_active', false)->count(),
            'root' => Menu::root()->count(),
            'with_children' => Menu::has('children')->count(),
        ];
    }
}
