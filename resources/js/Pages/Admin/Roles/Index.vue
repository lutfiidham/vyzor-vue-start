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
                <h3 class="fw-semibold mb-1">{{ localPermissions.length }}</h3>
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

    <!-- Tabs for Roles and Permissions -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <ul class="nav nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
              <li class="nav-item m-1">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 'roles' }"
                  @click="activeTab = 'roles'"
                  href="javascript:void(0);"
                >
                  <i class="ri-shield-user-line me-1"></i>Roles
                </a>
              </li>
              <li class="nav-item m-1">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 'permissions' }"
                  @click="activeTab = 'permissions'"
                  href="javascript:void(0);"
                >
                  <i class="ri-key-line me-1"></i>Permissions
                </a>
              </li>
            </ul>
            <div>
              <button
                v-if="activeTab === 'roles'"
                class="btn btn-primary btn-wave"
                @click="openCreateModal"
              >
                <i class="ri-add-line me-1"></i>Create Role
              </button>
              <div v-else class="btn-group" role="group">
                <button class="btn btn-success btn-wave" @click="openCreatePermissionModal">
                  <i class="ri-add-line me-1"></i>Create Permission
                </button>
                <button class="btn btn-primary btn-wave" @click="openBulkCreateModal">
                  <i class="ri-flashlight-line me-1"></i>Quick Add CRUD
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <!-- Roles Tab Content -->
            <div v-show="activeTab === 'roles'" class="row g-4">
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
                              @click="confirmDeleteRole(role)"
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

            <!-- Permissions Tab Content -->
            <div v-show="activeTab === 'permissions'">
              <!-- Bulk Actions Bar -->
              <div v-if="selectedPermissions.length > 0" class="alert alert-info d-flex align-items-center justify-content-between mb-3">
                <div>
                  <i class="ri-checkbox-multiple-line me-2"></i>
                  <strong>{{ selectedPermissions.length }}</strong> permission(s) selected
                </div>
                <div>
                  <button class="btn btn-sm btn-danger" @click="confirmBulkDelete">
                    <i class="ri-delete-bin-line me-1"></i>Delete Selected
                  </button>
                  <button class="btn btn-sm btn-light ms-2" @click="clearSelection">
                    <i class="ri-close-line me-1"></i>Clear Selection
                  </button>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 40px">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          @change="toggleSelectAll"
                          :checked="isAllSelected"
                          :indeterminate="isSomeSelected"
                        />
                      </th>
                      <th scope="col">Permission Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Assigned to Roles</th>
                      <th scope="col" class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="permission in localPermissions" :key="permission.id">
                      <td>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          :value="permission.id"
                          v-model="selectedPermissions"
                        />
                      </td>
                      <td>
                        <span class="badge bg-light text-dark">
                          <i class="ri-key-line me-1"></i>{{ permission.name }}
                        </span>
                      </td>
                      <td>
                        <span class="badge bg-primary-transparent">
                          {{ getPermissionCategory(permission.name) }}
                        </span>
                      </td>
                      <td>
                        <span
                          v-for="role in getRolesWithPermission(permission.id)"
                          :key="role.id"
                          class="badge bg-info-transparent me-1"
                        >
                          {{ role.name }}
                        </span>
                        <span
                          v-if="getRolesWithPermission(permission.id).length === 0"
                          class="text-muted"
                        >
                          Not assigned
                        </span>
                      </td>
                      <td class="text-end">
                        <button
                          class="btn btn-sm btn-primary-light btn-icon"
                          @click="editPermission(permission)"
                          title="Edit"
                        >
                          <i class="ri-pencil-line"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger-light btn-icon ms-1"
                          @click="confirmDeletePermission(permission)"
                          title="Delete"
                        >
                          <i class="ri-delete-bin-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr v-if="localPermissions.length === 0">
                      <td colspan="5" class="text-center text-muted py-4">
                        No permissions found. Create your first permission!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Permissions by Group (Show only when Roles tab is active) -->
    <div class="row" v-show="activeTab === 'roles'">
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

    <!-- Permission Modal -->
    <div
      class="modal fade"
      id="permissionModal"
      tabindex="-1"
      aria-labelledby="permissionModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="permissionModalLabel">
              {{ editingPermission ? 'Edit Permission' : 'Create Permission' }}
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="savePermission">
              <div class="mb-3">
                <label for="permissionName" class="form-label">Permission Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="permissionName"
                  v-model="permissionForm.name"
                  placeholder="e.g., users.view"
                  required
                />
                <div class="form-text">
                  Use lowercase with dots (.) for separation. Format: <code>module.action</code
                  ><br />
                  Examples: <code>users.view</code>, <code>posts.create</code>,
                  <code>settings.edit</code>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success" @click="savePermission">
              <i class="ri-save-line me-1"></i>Save Permission
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Create Permission Modal -->
    <div
      class="modal fade"
      id="bulkPermissionModal"
      tabindex="-1"
      aria-labelledby="bulkPermissionModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="bulkPermissionModalLabel">
              <i class="ri-flashlight-line me-2"></i>Quick Add CRUD Permissions
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveBulkPermissions">
              <div class="mb-3">
                <label for="moduleName" class="form-label">Module Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="moduleName"
                  v-model="bulkForm.module"
                  placeholder="e.g., kategori, products, orders"
                  required
                />
                <div class="form-text">
                  Enter module name in lowercase. Examples: <code>kategori</code>, <code>products</code>, <code>customers</code>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Select Actions to Create</label>
                <div class="row">
                  <div class="col-6">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="action_view"
                        value="view"
                        v-model="bulkForm.actions"
                      />
                      <label class="form-check-label" for="action_view">
                        <i class="ri-eye-line me-1 text-primary"></i>
                        <strong>View</strong>
                        <small class="d-block text-muted">{{ bulkForm.module || 'module' }}.view</small>
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="action_create"
                        value="create"
                        v-model="bulkForm.actions"
                      />
                      <label class="form-check-label" for="action_create">
                        <i class="ri-add-line me-1 text-success"></i>
                        <strong>Create</strong>
                        <small class="d-block text-muted">{{ bulkForm.module || 'module' }}.create</small>
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="action_edit"
                        value="edit"
                        v-model="bulkForm.actions"
                      />
                      <label class="form-check-label" for="action_edit">
                        <i class="ri-pencil-line me-1 text-warning"></i>
                        <strong>Edit</strong>
                        <small class="d-block text-muted">{{ bulkForm.module || 'module' }}.edit</small>
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="action_delete"
                        value="delete"
                        v-model="bulkForm.actions"
                      />
                      <label class="form-check-label" for="action_delete">
                        <i class="ri-delete-bin-line me-1 text-danger"></i>
                        <strong>Delete</strong>
                        <small class="d-block text-muted">{{ bulkForm.module || 'module' }}.delete</small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="alert alert-info mb-0">
                <i class="ri-information-line me-1"></i>
                <strong>Preview:</strong> Will create 
                <span class="badge bg-primary">{{ bulkForm.actions.length }}</span>
                permission(s) for module "<strong>{{ bulkForm.module || '...' }}</strong>"
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="saveBulkPermissions">
              <i class="ri-flashlight-line me-1"></i>Create Permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { Head, router, usePage } from '@inertiajs/vue3'
import * as bootstrap from 'bootstrap'
import { useToast } from '@/composables/useToast'
import { useConfirm } from '@/composables/useConfirm'

const toast = useToast()
const { confirmDelete } = useConfirm()
const page = usePage()

// Props with default data
const props = defineProps({
  roles: {
    type: Array,
    default: () => [
      {
        id: 1,
        name: 'Super Admin',
        description: 'Super Administrator with full system access',
        permissions: [],
        users_count: 1,
      },
      {
        id: 2,
        name: 'Admin',
        description: 'Administrator with full access',
        permissions: [],
        users_count: 1,
      },
      {
        id: 3,
        name: 'Manager',
        description: 'Manager with limited admin access',
        permissions: [],
        users_count: 2,
      },
      {
        id: 4,
        name: 'User',
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
const activeTab = ref('roles')
const selectedPermissions = ref([])
const editingRole = ref(null)
const viewingRole = ref(null)
const editingPermission = ref(null)
const localPermissions = ref([...props.allPermissions])
const form = ref({
  name: '',
  description: '',
  permissions: [],
})
const permissionForm = ref({
  name: '',
})
const bulkForm = ref({
  module: '',
  actions: ['view', 'create', 'edit', 'delete'], // Default: select all
})
const roleModal = ref(null)
const permissionModal = ref(null)
const bulkPermissionModal = ref(null)

// Computed
const isAllSelected = computed(() => {
  return localPermissions.value.length > 0 && selectedPermissions.value.length === localPermissions.value.length
})

const isSomeSelected = computed(() => {
  return selectedPermissions.value.length > 0 && selectedPermissions.value.length < localPermissions.value.length
})

const permissionGroups = computed(() => {
  const groups = {}

  localPermissions.value.forEach((permission) => {
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

const confirmDeleteRole = async (role) => {
  const confirmed = await confirmDelete(role.name)

  if (confirmed) {
    router.delete(`/admin/roles/${role.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Role deleted successfully!')
      },
      onError: (errors) => {
        const errorMessage =
          Object.values(errors)[0] || 'Failed to delete role. Role may have assigned users.'
        toast.error(errorMessage)
      },
    })
  }
}

const saveRole = () => {
  if (!form.value.name) {
    toast.error('Please enter role name')
    return
  }

  if (editingRole.value) {
    router.put(`/admin/roles/${editingRole.value.id}`, form.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Role updated successfully!')
        if (roleModal.value) {
          roleModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update role'
        toast.error(errorMessage)
      },
    })
  } else {
    router.post('/admin/roles', form.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Role created successfully!')
        if (roleModal.value) {
          roleModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to create role'
        toast.error(errorMessage)
      },
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

// Permission methods
const getPermissionCategory = (permissionName) => {
  const parts = permissionName.split('.')
  return parts[0] || 'general'
}

const getRolesWithPermission = (permissionId) => {
  return props.roles.filter((role) => role.permissions.some((p) => p.id === permissionId))
}

const openCreatePermissionModal = () => {
  editingPermission.value = null
  permissionForm.value = {
    name: '',
  }
  if (permissionModal.value) {
    permissionModal.value.show()
  }
}

const editPermission = (permission) => {
  editingPermission.value = permission
  permissionForm.value = {
    name: permission.name,
  }
  if (permissionModal.value) {
    permissionModal.value.show()
  }
}

const savePermission = () => {
  if (!permissionForm.value.name) {
    toast.error('Please enter permission name')
    return
  }

  // Validate format
  const regex = /^[a-z0-9\-_.]+$/
  if (!regex.test(permissionForm.value.name)) {
    toast.error(
      'Permission name must be lowercase and can only contain letters, numbers, dots, dashes and underscores'
    )
    return
  }

  if (editingPermission.value) {
    router.put(`/admin/permissions/${editingPermission.value.id}`, permissionForm.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Permission updated successfully!')
        if (permissionModal.value) {
          permissionModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update permission'
        toast.error(errorMessage)
      },
    })
  } else {
    router.post('/admin/permissions', permissionForm.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Permission created successfully!')
        if (permissionModal.value) {
          permissionModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to create permission'
        toast.error(errorMessage)
      },
    })
  }
}

const confirmDeletePermission = async (permission) => {
  const rolesCount = getRolesWithPermission(permission.id).length
  const message =
    rolesCount > 0
      ? `This permission is assigned to ${rolesCount} role(s). Are you sure you want to delete "${permission.name}"?`
      : `Are you sure you want to delete permission "${permission.name}"?`

  const confirmed = await confirmDelete(message)

  if (confirmed) {
    router.delete(`/admin/permissions/${permission.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Permission deleted successfully!')
      },
      onError: (errors) => {
        const errorMessage =
          Object.values(errors)[0] || 'Failed to delete permission. It may be assigned to roles.'
        toast.error(errorMessage)
      },
    })
  }
}

// Bulk create permissions
const openBulkCreateModal = () => {
  bulkForm.value = {
    module: '',
    actions: ['view', 'create', 'edit', 'delete'],
  }
  if (bulkPermissionModal.value) {
    bulkPermissionModal.value.show()
  }
}

const saveBulkPermissions = () => {
  if (!bulkForm.value.module) {
    toast.error('Please enter module name')
    return
  }

  if (bulkForm.value.actions.length === 0) {
    toast.error('Please select at least one action')
    return
  }

  // Validate module format
  const regex = /^[a-z0-9\-_]+$/
  if (!regex.test(bulkForm.value.module)) {
    toast.error('Module name must be lowercase and can only contain letters, numbers, dashes and underscores')
    return
  }

  router.post('/admin/permissions/bulk', bulkForm.value, {
    preserveScroll: true,
    onSuccess: () => {
      toast.success('CRUD permissions created successfully!')
      if (bulkPermissionModal.value) {
        bulkPermissionModal.value.hide()
      }
    },
    onError: (errors) => {
      const errorMessage = Object.values(errors)[0] || 'Failed to create permissions'
      toast.error(errorMessage)
    }
  })
}

// Bulk selection methods
const toggleSelectAll = () => {
  if (isAllSelected.value) {
    selectedPermissions.value = []
  } else {
    selectedPermissions.value = localPermissions.value.map(p => p.id)
  }
}

const clearSelection = () => {
  selectedPermissions.value = []
}

const confirmBulkDelete = async () => {
  const count = selectedPermissions.value.length
  
  // Check which permissions are assigned to roles
  const assignedPermissions = selectedPermissions.value.filter(permId => {
    const permission = localPermissions.value.find(p => p.id === permId)
    return permission && getRolesWithPermission(permId).length > 0
  })
  
  let message = `Are you sure you want to delete ${count} permission(s)?`
  
  if (assignedPermissions.length > 0) {
    if (assignedPermissions.length === count) {
      // All selected are assigned
      toast.error('All selected permissions are assigned to roles and cannot be deleted.')
      return
    } else {
      // Some are assigned
      message = `Warning: ${assignedPermissions.length} of ${count} selected permission(s) are assigned to roles and will be skipped.\n\nOnly ${count - assignedPermissions.length} permission(s) will be deleted. Continue?`
    }
  }
  
  const confirmed = await confirmDelete(message)
  
  if (confirmed) {
    router.post('/admin/permissions/bulk-delete', {
      permission_ids: selectedPermissions.value
    }, {
      preserveScroll: true,
      onSuccess: (response) => {
        selectedPermissions.value = []
        
        // Check for error message first
        const errorMessage = response.props.flash?.error
        if (errorMessage) {
          toast.error(errorMessage)
          return
        }
        
        // Use success message from server
        const successMessage = response.props.flash?.success
        if (successMessage) {
          toast.success(successMessage)
        } else {
          toast.success('Bulk delete operation completed')
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to delete permissions'
        toast.error(errorMessage)
      }
    })
  }
}

onMounted(() => {
  const modalElement = document.getElementById('roleModal')
  if (modalElement) {
    roleModal.value = new bootstrap.Modal(modalElement)
  }

  const permModalElement = document.getElementById('permissionModal')
  if (permModalElement) {
    permissionModal.value = new bootstrap.Modal(permModalElement)
  }

  const bulkModalElement = document.getElementById('bulkPermissionModal')
  if (bulkModalElement) {
    bulkPermissionModal.value = new bootstrap.Modal(bulkModalElement)
  }
})

// Watch for changes in allPermissions prop and sync to localPermissions
watch(() => props.allPermissions, (newPermissions) => {
  localPermissions.value = [...newPermissions]
}, { deep: true })
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
