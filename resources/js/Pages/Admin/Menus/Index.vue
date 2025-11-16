<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import { useToast } from '@/composables/useToast'
import { useConfirm } from '@/composables/useConfirm'
import Sortable from 'sortablejs'
import ToggleSwitch from '../../../../UI/toggleSwitch.vue'

const props = defineProps({
  menuList: Array, // Menu data for table
  roles: Array,
  parentMenus: Array,
  showDemoMenu: Boolean, // Demo menu setting dari settings
})

const toast = useToast()
const { confirmDelete } = useConfirm()

const menuModal = ref(null)
const editingMenu = ref(null)
const viewingMenu = ref(null)

const form = ref({
  title: '',
  parent_id: null,
  icon: '',
  path: '',
  type: 'link',
  badge_text: '',
  badge_color: '',
  order: 0,
  is_active: true,
  target: '_self',
  description: '',
  role_ids: [],
})

// Computed
const stats = computed(() => ({
  total: props.menuList.length,
  active: props.menuList.filter((m) => m.is_active).length,
  inactive: props.menuList.filter((m) => m.is_active === false).length,
  withChildren: props.menuList.filter((m) => m.children && m.children.length > 0).length,
}))

const availableParentMenus = computed(() => {
  if (!editingMenu.value) {
    return props.parentMenus
  }
  return props.parentMenus.filter((p) => p.id !== editingMenu.value.id)
})

// Methods
const getTypeBadge = (type) => {
  const badges = {
    menutitle: 'bg-info-transparent',
    link: 'bg-primary-transparent',
    sub: 'bg-warning-transparent',
  }
  return badges[type] || 'bg-secondary-transparent'
}

// Toggle demo menu visibility
const toggleDemoMenu = (value) => {
  router.post(
    '/admin/menus/toggle-demo-menu',
    {
      show_demo_menu: value,
    },
    {
      preserveScroll: true,
      onSuccess: () => {
        toast.success(`Demo menu ${value ? 'enabled' : 'disabled'} successfully!`)
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update demo menu setting'
        toast.error(errorMessage)
      },
    }
  )
}

const openCreateModal = () => {
  editingMenu.value = null
  viewingMenu.value = null
  form.value = {
    title: '',
    parent_id: null,
    icon: '',
    path: '',
    type: 'link',
    badge_text: '',
    badge_color: '',
    order: 0,
    is_active: true,
    target: '_self',
    description: '',
    role_ids: [],
  }
  if (menuModal.value) {
    menuModal.value.show()
  }
}

const viewMenu = (menu) => {
  viewingMenu.value = menu
  editingMenu.value = null
  form.value = {
    title: menu.title,
    parent_id: menu.parent_id,
    icon: menu.icon,
    path: menu.path,
    type: menu.type,
    badge_text: menu.badge_text,
    badge_color: menu.badge_color,
    order: menu.order,
    is_active: menu.is_active,
    target: menu.target,
    description: menu.description,
    role_ids: menu.roles?.map((r) => r.id) || [],
  }

  if (menuModal.value) {
    menuModal.value.show()
  }
}

const editMenu = (menu) => {
  editingMenu.value = menu
  viewingMenu.value = null

  // Ensure parent_id is correct type (number or null)
  const parentId = menu.parent_id ? parseInt(menu.parent_id) : null

  // Ensure role_ids are numbers
  const roleIds = menu.roles?.map((r) => parseInt(r.id)) || []

  form.value = {
    title: menu.title || '',
    parent_id: parentId,
    icon: menu.icon || '',
    path: menu.path || '',
    type: menu.type || 'link',
    badge_text: menu.badge_text || '',
    badge_color: menu.badge_color || '',
    order: menu.order || 0,
    is_active: menu.is_active !== undefined ? menu.is_active : true,
    target: menu.target || '_self',
    description: menu.description || '',
    role_ids: roleIds,
  }

  if (menuModal.value) {
    menuModal.value.show()
  }
}

const confirmDeleteMenu = async (menu) => {
  if (menu.children_count > 0) {
    toast.error(`Cannot delete menu. It has ${menu.children_count} child menus.`)
    return
  }

  const confirmed = await confirmDelete(menu.title)

  if (confirmed) {
    router.delete(`/admin/menus/${menu.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Menu deleted successfully!')
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to delete menu'
        toast.error(errorMessage)
      },
    })
  }
}

const clearCache = () => {
  router.post(
    '/admin/menus/clear-cache',
    {},
    {
      preserveScroll: false,
      onSuccess: () => {
        toast.success('Menu cache cleared! Reloading...')
        // Force full reload to clear all caches
        setTimeout(() => {
          router.reload({ only: [] }) // Force full page reload
        }, 500)
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to clear cache'
        toast.error(errorMessage)
      },
    }
  )
}

const toggleStatus = (menu) => {
  router.post(
    `/admin/menus/${menu.id}/toggle`,
    {},
    {
      preserveScroll: true,
      onSuccess: () => {
        toast.success(`Menu ${menu.is_active ? 'deactivated' : 'activated'} successfully!`)
      },
      onError: (errors) => {
        toast.error('Failed to update menu status')
      },
    }
  )
}

const saveMenu = () => {
  if (!form.value.title) {
    toast.error('Please enter menu title')
    return
  }

  if (!form.value.role_ids || form.value.role_ids.length === 0) {
    toast.error('Please select at least one role')
    return
  }

  if (editingMenu.value) {
    router.put(`/admin/menus/${editingMenu.value.id}`, form.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Menu updated successfully!')
        if (menuModal.value) {
          menuModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update menu'
        toast.error(errorMessage)
      },
    })
  } else {
    router.post('/admin/menus', form.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Menu created successfully!')
        if (menuModal.value) {
          menuModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to create menu'
        toast.error(errorMessage)
      },
    })
  }
}

// Initialize Sortable for drag and drop
let menuSortable = null

const initializeSortable = () => {
  nextTick(() => {
    const menuTable = document.querySelector('table tbody')

    if (menuTable && menuSortable) {
      menuSortable.destroy()
    }

    if (menuTable) {
      menuSortable = Sortable.create(menuTable, {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        handle: '.drag-handle',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        onEnd: (evt) => {
          handleMenuReorder(evt)
        },
      })
    }

    // Initialize nested sortables for child menus
    document.querySelectorAll('.child-menu-group').forEach((childGroup) => {
      if (childGroup.sortableInstance) {
        childGroup.sortableInstance.destroy()
      }

      childGroup.sortableInstance = Sortable.create(childGroup, {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        handle: '.drag-handle',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        onEnd: (evt) => {
          handleMenuReorder(evt)
        },
      })
    })
  })
}

// Handle menu reorder
const handleMenuReorder = (evt) => {
  const menuId = evt.item.dataset.menuId
  const newParentId = evt.item.dataset.parentId
  const newIndex = evt.newIndex
  const oldIndex = evt.oldIndex

  // Get all menu items in the new order
  const menuItems = []
  const allRows = evt.to.querySelectorAll('tr')

  allRows.forEach((row, index) => {
    const id = row.dataset.menuId
    const parentId = row.dataset.parentId

    if (id && id !== menuId) {
      menuItems.push({
        id: parseInt(id),
        order: index,
        parent_id: parentId ? parseInt(parentId) : null,
      })
    }
  })

  // Add the moved menu item
  menuItems.splice(newIndex, 0, {
    id: parseInt(menuId),
    order: newIndex,
    parent_id: newParentId ? parseInt(newParentId) : null,
  })

  // Renumber all items
  menuItems.forEach((item, index) => {
    item.order = index
  })

  // Send update to server
  router.post(
    '/admin/menus/reorder',
    {
      menus: menuItems,
    },
    {
      preserveScroll: true,
      onSuccess: (page) => {
        // Success message will be handled by the flash message from backend
        toast.success('Menu order updated successfully!')
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to reorder menu'
        toast.error(errorMessage)
        // Reload to restore original order
        router.reload({ only: ['menuList'] })
      },
    }
  )
}

onMounted(() => {
  const modalElement = document.getElementById('menuModal')
  if (modalElement) {
    menuModal.value = new bootstrap.Modal(modalElement)

    // Clear state when modal is hidden
    modalElement.addEventListener('hidden.bs.modal', () => {
      editingMenu.value = null
      viewingMenu.value = null
    })
  }

  // Initialize sortable after DOM is ready
  initializeSortable()
})

// Watch for menuList changes and reinitialize sortable
watch(
  () => props.menuList,
  () => {
    nextTick(() => {
      initializeSortable()
    })
  },
  { deep: true }
)
</script>

<template>
  <Head title="Menu Management" />
  <div>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Menu Management</h1>
        <p class="mb-0 text-muted">Manage application menus and navigation</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Menus</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="row">
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Total Menus</p>
                <h3 class="fw-semibold mb-1">{{ stats.total }}</h3>
                <span class="badge bg-primary-transparent">
                  <i class="ri-menu-line me-1"></i>Items
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-primary-transparent">
                  <i class="ri-menu-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Active Menus</p>
                <h3 class="fw-semibold mb-1">{{ stats.active }}</h3>
                <span class="badge bg-success-transparent">
                  <i class="ri-checkbox-circle-line me-1"></i>Enabled
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-success-transparent">
                  <i class="ri-checkbox-circle-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Inactive Menus</p>
                <h3 class="fw-semibold mb-1">{{ stats.inactive }}</h3>
                <span class="badge bg-secondary-transparent">
                  <i class="ri-close-circle-line me-1"></i>Disabled
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-secondary-transparent">
                  <i class="ri-close-circle-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">With Children</p>
                <h3 class="fw-semibold mb-1">{{ stats.withChildren }}</h3>
                <span class="badge bg-info-transparent">
                  <i class="ri-node-tree me-1"></i>Parents
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-info-transparent">
                  <i class="ri-node-tree fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menus List -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">Menus List</div>
            <div class="d-flex align-items-center gap-3">
              <!-- Demo Menu Toggle -->
              <div class="d-flex align-items-center">
                <ToggleSwitch
                  customClass="toggle-warning"
                  mainClass="d-flex align-items-center gap-2"
                  :isOn="showDemoMenu"
                  title="md"
                  @toggle="toggleDemoMenu($event)"
                />
                <span class="text-muted ms-2 fw-medium">Show Demo Menu</span>
              </div>

              <!-- Divider -->
              <div class="border-start" style="height: 24px; width: 1px;"></div>

              <!-- Action Buttons -->
              <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sm btn-secondary btn-wave" @click="clearCache">
                  <i class="ri-refresh-line me-1"></i>Clear Cache
                </button>
                <button class="btn btn-sm btn-primary btn-wave" @click="openCreateModal">
                  <i class="ri-add-line me-1"></i>Create Menu
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap table-hover">
                <thead>
                  <tr>
                    <th style="width: 40px"></th>
                    <th>Order</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Path</th>
                    <th>Status</th>
                    <th>Roles</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="menu in menuList" :key="menu.id">
                    <tr :data-menu-id="menu.id" :data-parent-id="menu.parent_id" class="menu-item">
                      <td>
                        <div class="drag-handle cursor-move text-center">
                          <i class="ri-drag-move-2-line text-muted"></i>
                        </div>
                      </td>
                      <td>{{ menu.order }}</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span v-if="menu.icon" v-html="menu.icon" class="me-2"></span>
                          <span class="fw-semibold">{{ menu.title }}</span>
                        </div>
                      </td>
                      <td>
                        <span :class="`badge ${getTypeBadge(menu.type)}`">
                          {{ menu.type }}
                        </span>
                      </td>
                      <td>
                        <code>{{ menu.path || '-' }}</code>
                      </td>
                      <td>
                        <span :class="`badge ${menu.is_active ? 'bg-success' : 'bg-secondary'}`">
                          {{ menu.is_active ? 'Active' : 'Inactive' }}
                        </span>
                      </td>
                      <td>
                        <span
                          v-for="role in menu.roles"
                          :key="role.id"
                          class="badge bg-primary-transparent me-1"
                        >
                          {{ role.name }}
                        </span>
                      </td>
                      <td>
                        <div class="btn-group" role="group">
                          <button
                            @click="viewMenu(menu)"
                            class="btn btn-sm btn-info-light"
                            title="View"
                          >
                            <i class="ri-eye-line"></i>
                          </button>
                          <button
                            @click="editMenu(menu)"
                            class="btn btn-sm btn-primary-light"
                            title="Edit"
                          >
                            <i class="ri-edit-line"></i>
                          </button>
                          <button
                            @click="toggleStatus(menu)"
                            class="btn btn-sm btn-warning-light"
                            :title="menu.is_active ? 'Deactivate' : 'Activate'"
                          >
                            <i :class="menu.is_active ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                          </button>
                          <button
                            @click="confirmDeleteMenu(menu)"
                            class="btn btn-sm btn-danger-light"
                            :disabled="menu.children_count > 0"
                            title="Delete"
                          >
                            <i class="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <!-- Child Menus -->
                    <template v-if="menu.children && menu.children.length > 0">
                      <tr
                        v-for="child in menu.children"
                        :key="child.id"
                        class="table-active"
                        :data-menu-id="child.id"
                        :data-parent-id="child.parent_id"
                      >
                        <td>
                          <div class="drag-handle cursor-move text-center">
                            <i class="ri-drag-move-2-line text-muted"></i>
                          </div>
                        </td>
                        <td>
                          <span class="ms-4">└─ {{ child.order }}</span>
                        </td>
                        <td>
                          <div class="d-flex align-items-center ms-4">
                            <span v-if="child.icon" v-html="child.icon" class="me-2"></span>
                            <span>{{ child.title }}</span>
                          </div>
                        </td>
                        <td>
                          <span :class="`badge ${getTypeBadge(child.type)}`">
                            {{ child.type }}
                          </span>
                        </td>
                        <td>
                          <code>{{ child.path || '-' }}</code>
                        </td>
                        <td>
                          <span :class="`badge ${child.is_active ? 'bg-success' : 'bg-secondary'}`">
                            {{ child.is_active ? 'Active' : 'Inactive' }}
                          </span>
                        </td>
                        <td>
                          <span
                            v-for="role in child.roles"
                            :key="role.id"
                            class="badge bg-primary-transparent me-1"
                          >
                            {{ role.name }}
                          </span>
                        </td>
                        <td>
                          <div class="btn-group" role="group">
                            <button @click="viewMenu(child)" class="btn btn-sm btn-info-light">
                              <i class="ri-eye-line"></i>
                            </button>
                            <button @click="editMenu(child)" class="btn btn-sm btn-primary-light">
                              <i class="ri-edit-line"></i>
                            </button>
                            <button
                              @click="toggleStatus(child)"
                              class="btn btn-sm btn-warning-light"
                            >
                              <i :class="child.is_active ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                            </button>
                            <button
                              @click="confirmDeleteMenu(child)"
                              class="btn btn-sm btn-danger-light"
                            >
                              <i class="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </template>
                </tbody>
              </table>

              <div v-if="menuList.length === 0" class="text-center py-5">
                <i class="ri-menu-line fs-1 text-muted"></i>
                <p class="text-muted mt-3">No menus found</p>
                <button class="btn btn-primary btn-sm" @click="openCreateModal">
                  <i class="ri-add-line me-1"></i>Create First Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Modal -->
    <div
      class="modal fade"
      id="menuModal"
      tabindex="-1"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="menuModalLabel">
              {{ viewingMenu ? 'View Menu' : editingMenu ? 'Edit Menu' : 'Create Menu' }}
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveMenu">
              <div class="row g-3">
                <!-- Title -->
                <div class="col-md-6">
                  <label class="form-label">Title <span class="text-danger">*</span></label>
                  <input
                    v-model="form.title"
                    type="text"
                    class="form-control"
                    :disabled="viewingMenu"
                    required
                  />
                </div>

                <!-- Type -->
                <div class="col-md-6">
                  <label class="form-label">Type <span class="text-danger">*</span></label>
                  <select v-model="form.type" class="form-select" :disabled="viewingMenu" required>
                    <option value="menutitle">Menu Title</option>
                    <option value="link">Link</option>
                    <option value="sub">Sub Menu</option>
                  </select>
                </div>

                <!-- Parent Menu -->
                <div class="col-md-6">
                  <label class="form-label">Parent Menu</label>
                  <select v-model="form.parent_id" class="form-select" :disabled="viewingMenu">
                    <option :value="null">None (Root Menu)</option>
                    <option
                      v-for="parent in availableParentMenus"
                      :key="parent.id"
                      :value="parent.id"
                    >
                      {{ parent.title }}
                    </option>
                  </select>
                </div>

                <!-- Path -->
                <div class="col-md-6">
                  <label class="form-label">Path/URL</label>
                  <input
                    v-model="form.path"
                    type="text"
                    class="form-control"
                    :disabled="viewingMenu"
                    placeholder="/admin/example"
                  />
                </div>

                <!-- Icon -->
                <div class="col-md-12">
                  <label class="form-label">Icon (SVG or Class)</label>
                  <textarea
                    v-model="form.icon"
                    class="form-control"
                    :disabled="viewingMenu"
                    rows="2"
                  ></textarea>
                </div>

                <!-- Order & Target -->
                <div class="col-md-4">
                  <label class="form-label">Order</label>
                  <input
                    v-model.number="form.order"
                    type="number"
                    class="form-control"
                    :disabled="viewingMenu"
                    min="0"
                  />
                </div>

                <div class="col-md-4">
                  <label class="form-label">Target</label>
                  <select v-model="form.target" class="form-select" :disabled="viewingMenu">
                    <option value="_self">Same Tab</option>
                    <option value="_blank">New Tab</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label class="form-label">Status</label>
                  <div class="form-check form-switch mt-2">
                    <input
                      v-model="form.is_active"
                      type="checkbox"
                      class="form-check-input"
                      :disabled="viewingMenu"
                      id="is_active"
                    />
                    <label class="form-check-label" for="is_active">
                      {{ form.is_active ? 'Active' : 'Inactive' }}
                    </label>
                  </div>
                </div>

                <!-- Badge -->
                <div class="col-md-6">
                  <label class="form-label">Badge Text</label>
                  <input
                    v-model="form.badge_text"
                    type="text"
                    class="form-control"
                    :disabled="viewingMenu"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Badge Color</label>
                  <select v-model="form.badge_color" class="form-select" :disabled="viewingMenu">
                    <option value="">Select color</option>
                    <option value="primary">Primary</option>
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                  </select>
                </div>

                <!-- Roles -->
                <div class="col-md-12">
                  <label class="form-label">Roles <span class="text-danger">*</span></label>
                  <div class="row">
                    <div v-for="role in roles" :key="role.id" class="col-md-4">
                      <div class="form-check">
                        <input
                          v-model="form.role_ids"
                          :value="role.id"
                          type="checkbox"
                          class="form-check-input"
                          :disabled="viewingMenu"
                          :id="`role_${role.id}`"
                        />
                        <label class="form-check-label" :for="`role_${role.id}`">
                          {{ role.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <div class="col-md-12">
                  <label class="form-label">Description</label>
                  <textarea
                    v-model="form.description"
                    class="form-control"
                    :disabled="viewingMenu"
                    rows="2"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              {{ viewingMenu ? 'Close' : 'Cancel' }}
            </button>
            <button v-if="!viewingMenu" type="button" class="btn btn-primary" @click="saveMenu">
              {{ editingMenu ? 'Update Menu' : 'Create Menu' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drag-handle {
  cursor: move;
  transition: all 0.2s ease;
}

.drag-handle:hover {
  color: var(--bs-primary) !important;
  transform: scale(1.1);
}

.sortable-ghost {
  opacity: 0.4;
  background: #f0f9ff;
}

.sortable-chosen {
  background: #e0f2fe;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sortable-drag {
  opacity: 0.8;
  transform: rotate(2deg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.menu-item {
  transition: all 0.2s ease;
}

.menu-item.sortable-ghost td {
  border-top: 2px solid var(--bs-primary);
  border-bottom: 2px solid var(--bs-primary);
}

.cursor-move {
  cursor: move !important;
}
</style>
