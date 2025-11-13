<?php

namespace App\Policies;

use App\Models\Menu;
use App\Models\User;

class MenuPolicy
{
    /**
     * Determine if user can view any menus
     */
    public function viewAny(User $user): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }

    /**
     * Determine if user can view the menu
     */
    public function view(User $user, Menu $menu): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }

    /**
     * Determine if user can create menus
     */
    public function create(User $user): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }

    /**
     * Determine if user can update the menu
     */
    public function update(User $user, Menu $menu): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }

    /**
     * Determine if user can delete the menu
     */
    public function delete(User $user, Menu $menu): bool
    {
        return $user->hasRole(['admin', 'super-admin']) && !$menu->hasChildren();
    }

    /**
     * Determine if user can reorder menus
     */
    public function reorder(User $user): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }

    /**
     * Determine if user can toggle menu status
     */
    public function toggle(User $user, Menu $menu): bool
    {
        return $user->hasRole(['admin', 'super-admin']);
    }
}
