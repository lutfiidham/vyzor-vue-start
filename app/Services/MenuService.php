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
        $cacheKey = "user_menus_" . implode('_', sort($roleIds));
        
        return Cache::remember($cacheKey, 3600, function () use ($roleIds) {
            return $this->buildMenuTree($roleIds);
        });
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
        Cache::flush(); // Or use specific pattern if needed
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
