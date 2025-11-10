<template>
  <Head title="Roles & Permissions" />
  <div>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Roles & Permissions</h1>
        <p class="mb-0 text-muted">Manage user roles and their permissions</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Roles</li>
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
                <p class="mb-1 text-muted">Total Roles</p>
                <h3 class="fw-semibold mb-1">{{ roles.length }}</h3>
                <span class="badge bg-primary-transparent">
                  <i class="ri-shield-user-line me-1"></i>Active
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-primary-transparent">
                  <i class="ri-shield-user-line fs-4"></i>
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
                <p class="mb-1 text-muted">Total Permissions</p>
                <h3 class="fw-semibold mb-1">{{ allPermissions.length }}</h3>
                <span class="badge bg-success-transparent">
                  <i class="ri-key-line me-1"></i>Available
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-success-transparent">
                  <i class="ri-key-line fs-4"></i>
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
                <p class="mb-1 text-muted">Assigned Users</p>
                <h3 class="fw-semibold mb-1">{{ stats.totalUsers || 0 }}</h3>
                <span class="badge bg-info-transparent">
                  <i class="ri-user-line me-1"></i>With Roles
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-info-transparent">
                  <i class="ri-user-settings-line fs-4"></i>
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
                <p class="mb-1 text-muted">Permission Groups</p>
                <h3 class="fw-semibold mb-1">{{ permissionGroups.length }}</h3>
                <span class="badge bg-warning-transparent">
                  <i class="ri-folders-line me-1"></i>Categories
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-warning-transparent">
                  <i class="ri-folders-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roles List -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">Roles List</div>
            <div>
              <button class="btn btn-primary btn-wave" @click="openCreateModal">
                <i class="ri-add-line me-1"></i>Create Role
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div
                class="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                v-for="role in roles"
                :key="role.id"
              >
                <div class="card custom-card border shadow-sm">
                  <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <span
                          :class="`avatar avatar-lg avatar-rounded ${getRoleBadgeClass(role.name)}`"
                        >
                          <i class="ri-shield-user-line fs-4"></i>
                        </span>
                      </div>
                      <div class="dropdown">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-icon btn-sm btn-light"
                          data-bs-toggle="dropdown"
                        >
                          <i class="ri-more-2-fill"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              @click="viewRole(role)"
                            >
                              <i class="ri-eye-line me-2"></i>View Details
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              @click="editRole(role)"
                            >
                              <i class="ri-pencil-line me-2"></i>Edit
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              class="dropdown-item text-danger"
                              href="javascript:void(0);"
                              @click="confirmDelete(role)"
                            >
                              <i class="ri-delete-bin-line me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h6 class="fw-semibold mb-1">{{ role.name }}</h6>
                    <p class="text-muted fs-12 mb-3">{{ role.description || 'No description' }}</p>

                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <span class="text-muted fs-12">Permissions:</span>
                        <span class="fw-semibold ms-1">{{ role.permissions?.length || 0 }}</span>
                      </div>
                      <div>
                        <span class="text-muted fs-12">Users:</span>
                        <span class="fw-semibold ms-1">{{ role.users_count || 0 }}</span>
                      </div>
                    </div>

                    <div class="d-flex gap-2">
                      <button
                        class="btn btn-sm btn-primary-light flex-fill"
                        @click="viewRole(role)"
                      >
                        <i class="ri-eye-line me-1"></i>View
                      </button>
                      <button
                        class="btn btn-sm btn-success-light flex-fill"
                        @click="editRole(role)"
                      >
                        <i class="ri-pencil-line me-1"></i>Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Permissions by Group -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">All Permissions by Category</div>
          </div>
          <div class="card-body">
            <div
              class="accordion accordion-customicon1 accordion-primary"
              id="permissionsAccordion"
            >
              <div class="accordion-item" v-for="(group, index) in permissionGroups" :key="index">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: index !== 0 }"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                  >
                    <i class="ri-key-line me-2"></i>
                    {{ group.name }}
                    <span class="badge bg-primary-transparent ms-2">{{
                      group.permissions.length
                    }}</span>
                  </button>
                </h2>
                <div
                  :id="`collapse${index}`"
                  class="accordion-collapse collapse"
                  :class="{ show: index === 0 }"
                  data-bs-parent="#permissionsAccordion"
                >
                  <div class="accordion-body">
                    <div class="row g-2">
                      <div
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                        v-for="permission in group.permissions"
                        :key="permission.id"
                      >
                        <div class="p-2 border rounded d-flex align-items-center">
                          <i class="ri-checkbox-circle-line text-success me-2"></i>
                          <span class="fs-12">{{ permission.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div class="modal fade" id="roleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              {{
                viewingRole ? 'View Role Details' : editingRole ? 'Edit Role' : 'Create New Role'
              }}
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveRole">
              <div class="row">
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Role Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    placeholder="e.g., Manager, Editor, Viewer"
                    :disabled="viewingRole"
                    required
                  />
                </div>
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    v-model="form.description"
                    rows="2"
                    placeholder="Brief description of this role..."
                    :disabled="viewingRole"
                  ></textarea>
                </div>
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Permissions {{ viewingRole ? '' : '*' }}</label>

                  <!-- View Mode: Only show role's permissions -->
                  <div
                    v-if="viewingRole"
                    class="border rounded p-3"
                    style="max-height: 300px; overflow-y: auto"
                  >
                    <div v-if="viewRolePermissionGroups.length > 0">
                      <div
                        v-for="(group, index) in viewRolePermissionGroups"
                        :key="index"
                        class="mb-3"
                      >
                        <div class="fw-semibold mb-2 text-primary">
                          <i class="ri-key-line me-1"></i>{{ group.name }}
                        </div>
                        <div class="ms-4">
                          <div
                            v-for="permission in group.permissions"
                            :key="permission.id"
                            class="mb-2 d-flex align-items-center"
                          >
                            <i class="ri-checkbox-circle-fill text-success me-2"></i>
                            <span class="fs-13">{{ permission.name }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-muted text-center py-3">
                      <i class="ri-information-line me-1"></i>No permissions assigned to this role
                    </div>
                  </div>

                  <!-- Edit/Create Mode: Show all permissions with checkboxes -->
                  <div
                    v-else
                    class="border rounded p-3"
                    style="max-height: 300px; overflow-y: auto"
                  >
                    <div v-for="(group, index) in permissionGroups" :key="index" class="mb-3">
                      <div class="d-flex align-items-center mb-2">
                        <input
                          type="checkbox"
                          class="form-check-input me-2"
                          :id="`group-${index}`"
                          @change="toggleGroup(group)"
                          :checked="isGroupSelected(group)"
                        />
                        <label class="form-check-label fw-semibold" :for="`group-${index}`">
                          {{ group.name }}
                        </label>
                      </div>
                      <div class="ms-4">
                        <div
                          v-for="permission in group.permissions"
                          :key="permission.id"
                          class="form-check mb-1"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            :id="`perm-${permission.id}`"
                            :value="permission.id"
                            v-model="form.permissions"
                          />
                          <label class="form-check-label fs-13" :for="`perm-${permission.id}`">
                            {{ permission.name }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              {{ viewingRole ? 'Close' : 'Cancel' }}
            </button>
            <button v-if="!viewingRole" type="button" class="btn btn-primary" @click="saveRole">
              <i class="ri-save-line me-1"></i>Save Role
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import * as bootstrap from 'bootstrap'

const { proxy } = getCurrentInstance()
const theme = localStorage.getItem('vyzorcolortheme') || 'light'

// Props with default data
const props = defineProps({
  roles: {
    type: Array,
    default: () => [
      {
        id: 1,
        name: 'admin',
        description: 'Administrator with full access',
        permissions: [],
        users_count: 1,
      },
      {
        id: 2,
        name: 'manager',
        description: 'Manager with limited admin access',
        permissions: [],
        users_count: 2,
      },
      {
        id: 3,
        name: 'user',
        description: 'Regular user with basic access',
        permissions: [],
        users_count: 5,
      },
    ],
  },
  allPermissions: {
    type: Array,
    default: () => [],
  },
  stats: {
    type: Object,
    default: () => ({
      totalUsers: 8,
    }),
  },
})

// State
const editingRole = ref(null)
const viewingRole = ref(null)
const form = ref({
  name: '',
  description: '',
  permissions: [],
})
const roleModal = ref(null)

// Computed
const permissionGroups = computed(() => {
  const groups = {}

  props.allPermissions.forEach((permission) => {
    const groupName = permission.name.split('.')[0]
    if (!groups[groupName]) {
      groups[groupName] = {
        name: groupName.charAt(0).toUpperCase() + groupName.slice(1),
        permissions: [],
      }
    }
    groups[groupName].permissions.push(permission)
  })

  return Object.values(groups)
})

const viewRolePermissionGroups = computed(() => {
  if (!viewingRole.value) return []

  const groups = {}
  const rolePermissionIds = form.value.permissions

  props.allPermissions.forEach((permission) => {
    if (rolePermissionIds.includes(permission.id)) {
      const groupName = permission.name.split('.')[0]
      if (!groups[groupName]) {
        groups[groupName] = {
          name: groupName.charAt(0).toUpperCase() + groupName.slice(1),
          permissions: [],
        }
      }
      groups[groupName].permissions.push(permission)
    }
  })

  return Object.values(groups)
})

// Methods
const getRoleBadgeClass = (roleName) => {
  const classes = {
    admin: 'bg-primary-transparent',
    manager: 'bg-success-transparent',
    user: 'bg-info-transparent',
  }
  return classes[roleName] || 'bg-secondary-transparent'
}

const openCreateModal = () => {
  editingRole.value = null
  viewingRole.value = null
  form.value = {
    name: '',
    description: '',
    permissions: [],
  }
  if (roleModal.value) {
    roleModal.value.show()
  }
}

const viewRole = (role) => {
  viewingRole.value = role
  editingRole.value = null
  form.value = {
    name: role.name,
    description: role.description || '',
    permissions: role.permissions?.map((p) => p.id) || [],
  }

  if (roleModal.value) {
    roleModal.value.show()
  }
}

const editRole = (role) => {
  editingRole.value = role
  viewingRole.value = null
  form.value = {
    name: role.name,
    description: role.description || '',
    permissions: role.permissions?.map((p) => p.id) || [],
  }

  if (roleModal.value) {
    roleModal.value.show()
  }
}

const confirmDelete = (role) => {
  if (confirm(`Are you sure you want to delete the role "${role.name}"?`)) {
    router.delete(`/admin/roles/${role.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        proxy.$toast.success('Role deleted successfully!', {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to delete role. Role may have assigned users.'
        proxy.$toast.error(errorMessage, {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      }
    })
  }
}

const saveRole = () => {
  if (!form.value.name) {
    proxy.$toast.error('Please enter role name', {
      theme: theme,
      icon: true,
      hideProgressBar: false,
      autoClose: 3000,
      position: 'top-right',
    })
    return
  }

  if (editingRole.value) {
    router.put(`/admin/roles/${editingRole.value.id}`, form.value, {
      preserveScroll: true,
      onSuccess: () => {
        proxy.$toast.success('Role updated successfully!', {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
        if (roleModal.value) {
          roleModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update role'
        proxy.$toast.error(errorMessage, {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      }
    })
  } else {
    router.post('/admin/roles', form.value, {
      preserveScroll: true,
      onSuccess: () => {
        proxy.$toast.success('Role created successfully!', {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
        if (roleModal.value) {
          roleModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to create role'
        proxy.$toast.error(errorMessage, {
          theme: theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      }
    })
  }
}

const toggleGroup = (group) => {
  const groupPermissionIds = group.permissions.map((p) => p.id)
  const allSelected = groupPermissionIds.every((id) => form.value.permissions.includes(id))

  if (allSelected) {
    form.value.permissions = form.value.permissions.filter((id) => !groupPermissionIds.includes(id))
  } else {
    form.value.permissions = [...new Set([...form.value.permissions, ...groupPermissionIds])]
  }
}

const isGroupSelected = (group) => {
  const groupPermissionIds = group.permissions.map((p) => p.id)
  return groupPermissionIds.every((id) => form.value.permissions.includes(id))
}

onMounted(() => {
  const modalElement = document.getElementById('roleModal')
  if (modalElement) {
    roleModal.value = new bootstrap.Modal(modalElement)
  }
})
</script>

<style scoped>
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s ease;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary-color);
}
</style>
