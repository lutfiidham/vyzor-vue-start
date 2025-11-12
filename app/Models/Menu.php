<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Menu extends Model
{
    protected $fillable = [
        'parent_id',
        'title',
        'icon',
        'path',
        'type',
        'badge_text',
        'badge_color',
        'order',
        'is_active',
        'target',
        'description',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Parent menu relationship
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    /**
     * Children menu relationship
     */
    public function children(): HasMany
    {
        return $this->hasMany(Menu::class, 'parent_id')
            ->orderBy('order');
    }

    /**
     * All children (recursive)
     */
    public function childrenRecursive(): HasMany
    {
        return $this->children()->with('childrenRecursive');
    }

    /**
     * Roles that can access this menu
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(\Spatie\Permission\Models\Role::class, 'menu_role');
    }

    /**
     * Scope to get only active menus
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to get root menus (no parent)
     */
    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    /**
     * Scope to get menus ordered by order field
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }

    /**
     * Check if menu has children
     */
    public function hasChildren(): bool
    {
        return $this->children()->exists();
    }

    /**
     * Get menu icon with proper HTML class
     */
    public function getIconHtml(): string
    {
        if (!$this->icon) {
            return '';
        }

        // If icon contains SVG, return as is
        if (str_contains($this->icon, '<svg')) {
            return $this->icon;
        }

        // If icon contains class attribute, wrap in span
        if (str_contains($this->icon, 'class=')) {
            return "<span class=\"side-menu__icon\">{$this->icon}</span>";
        }

        // Default: treat as icon class
        return "<span class=\"side-menu__icon\">{$this->icon}</span>";
    }

    /**
     * Get badge HTML if exists
     */
    public function getBadgeHtml(): string
    {
        if (!$this->badge_text) {
            return '';
        }

        $color = $this->badge_color ?: 'primary';
        return "<span class=\"badge bg-{$color}-transparent ms-2\">{$this->badge_text}</span>";
    }

    /**
     * Transform menu to array format compatible with frontend
     */
    public function toArrayForFrontend(): array
    {
        $array = [
            'id' => $this->id,
            'title' => $this->title,
            'icon' => $this->getIconHtml(),
            'type' => $this->type,
            'active' => false,
            'selected' => false,
            'dirchange' => false,
        ];

        if ($this->type === 'menutitle') {
            $array['menutitle'] = $this->title;
        }

        if ($this->path) {
            $array['path'] = $this->path;
        }

        if ($this->target) {
            $array['target'] = $this->target;
        }

        if ($this->badge_text) {
            $array['badgetxt'] = $this->getBadgeHtml();
        }

        if ($this->children->isNotEmpty()) {
            $array['children'] = $this->children
                ->map(fn($child) => $child->toArrayForFrontend())
                ->toArray();
        }

        return $array;
    }

    /**
     * Get all roles IDs that can access this menu
     */
    public function getRoleIds(): array
    {
        return $this->roles()->pluck('id')->toArray();
    }
}