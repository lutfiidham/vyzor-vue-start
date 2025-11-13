<?php

namespace Tests\Feature;

use App\Models\Menu;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class MenuManagementTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;
    protected $adminRole;

    protected function setUp(): void
    {
        parent::setUp();

        $this->adminRole = Role::create(['name' => 'admin']);
        $this->admin = User::factory()->create();
        $this->admin->assignRole($this->adminRole);
    }

    /** @test */
    public function admin_can_view_menus_index()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.menus.index'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Admin/Menus/Index'));
    }

    /** @test */
    public function admin_can_view_create_menu_form()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.menus.create'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Admin/Menus/Create'));
    }

    /** @test */
    public function admin_can_create_menu()
    {
        $data = [
            'title' => 'Test Menu',
            'type' => 'link',
            'path' => '/test',
            'icon' => '<svg></svg>',
            'order' => 1,
            'is_active' => true,
            'role_ids' => [$this->adminRole->id],
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.menus.store'), $data);

        $response->assertRedirect(route('admin.menus.index'));
        $this->assertDatabaseHas('menus', [
            'title' => 'Test Menu',
            'path' => '/test',
        ]);
    }

    /** @test */
    public function menu_requires_at_least_one_role()
    {
        $data = [
            'title' => 'Test Menu',
            'type' => 'link',
            'path' => '/test',
            'role_ids' => [],
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.menus.store'), $data);

        $response->assertSessionHasErrors('role_ids');
    }

    /** @test */
    public function admin_can_update_menu()
    {
        $menu = Menu::create([
            'title' => 'Original Title',
            'type' => 'link',
            'path' => '/original',
            'order' => 1,
        ]);
        $menu->roles()->attach($this->adminRole->id);

        $updateData = [
            'title' => 'Updated Title',
            'type' => 'link',
            'path' => '/updated',
            'order' => 2,
            'is_active' => true,
            'role_ids' => [$this->adminRole->id],
        ];

        $response = $this->actingAs($this->admin)
            ->put(route('admin.menus.update', $menu), $updateData);

        $response->assertRedirect(route('admin.menus.index'));
        $this->assertDatabaseHas('menus', [
            'id' => $menu->id,
            'title' => 'Updated Title',
            'path' => '/updated',
        ]);
    }

    /** @test */
    public function admin_can_delete_menu_without_children()
    {
        $menu = Menu::create([
            'title' => 'Test Menu',
            'type' => 'link',
            'path' => '/test',
            'order' => 1,
        ]);

        $response = $this->actingAs($this->admin)
            ->delete(route('admin.menus.destroy', $menu));

        $response->assertRedirect(route('admin.menus.index'));
        $this->assertDatabaseMissing('menus', ['id' => $menu->id]);
    }

    /** @test */
    public function cannot_delete_menu_with_children()
    {
        $parent = Menu::create([
            'title' => 'Parent Menu',
            'type' => 'sub',
            'order' => 1,
        ]);

        $child = Menu::create([
            'title' => 'Child Menu',
            'type' => 'link',
            'path' => '/child',
            'parent_id' => $parent->id,
            'order' => 1,
        ]);

        $response = $this->actingAs($this->admin)
            ->delete(route('admin.menus.destroy', $parent));

        $this->assertDatabaseHas('menus', ['id' => $parent->id]);
    }

    /** @test */
    public function admin_can_toggle_menu_status()
    {
        $menu = Menu::create([
            'title' => 'Test Menu',
            'type' => 'link',
            'path' => '/test',
            'is_active' => true,
            'order' => 1,
        ]);

        $response = $this->actingAs($this->admin)
            ->post(route('admin.menus.toggle', $menu));

        $response->assertRedirect();
        $this->assertDatabaseHas('menus', [
            'id' => $menu->id,
            'is_active' => false,
        ]);
    }

    /** @test */
    public function menus_are_filtered_by_user_roles()
    {
        $userRole = Role::create(['name' => 'user']);
        $user = User::factory()->create();
        $user->assignRole($userRole);

        $adminMenu = Menu::create([
            'title' => 'Admin Menu',
            'type' => 'link',
            'path' => '/admin',
            'is_active' => true,
            'order' => 1,
        ]);
        $adminMenu->roles()->attach($this->adminRole->id);

        $userMenu = Menu::create([
            'title' => 'User Menu',
            'type' => 'link',
            'path' => '/user',
            'is_active' => true,
            'order' => 2,
        ]);
        $userMenu->roles()->attach($userRole->id);

        $response = $this->actingAs($user)->get('/dashboard');

        $response->assertInertia(fn ($page) => 
            $page->has('menus')
                ->where('menus.0.title', 'User Menu')
        );
    }
}
