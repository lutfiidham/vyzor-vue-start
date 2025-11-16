<script setup>
import { Head, router } from '@inertiajs/vue3'
import * as bootstrap from 'bootstrap'
import { computed, onMounted, ref, watch } from 'vue'
import { useConfirm } from '@/composables/useConfirm'
import { useToast } from '@/composables/useToast'

// Props with default data
const props = defineProps({
  users: {
    type: Object,
    default: () => ({
      data: [
        { id: 1, name: 'Super Admin', email: 'superadmin@vyzor.test', role: 'Super Admin', is_active: true, last_login_at: '2025-11-09T08:00:00Z', locked_until: null },
        { id: 2, name: 'Admin User', email: 'admin@vyzor.test', role: 'Admin', is_active: true, last_login_at: '2025-11-09T08:00:00Z', locked_until: null },
        { id: 3, name: 'Manager User', email: 'manager@vyzor.test', role: 'Manager', is_active: true, last_login_at: '2025-11-09T07:30:00Z', locked_until: null },
        { id: 4, name: 'Regular User', email: 'user@vyzor.test', role: 'User', is_active: true, last_login_at: '2025-11-08T15:20:00Z', locked_until: null },
      ],
      total: 3,
      from: 1,
      to: 3,
      current_page: 1,
      last_page: 1,
      prev_page_url: null,
      next_page_url: null,
    }),
  },
  stats: {
    type: Object,
    default: () => ({
      active: 3,
      inactive: 0,
    }),
  },
})
const toast = useToast()
const { confirmDelete: confirmDeleteDialog } = useConfirm()

// State
const selected = ref([])
const selectAll = ref(false)
const filters = ref({
  search: '',
  role: '',
  status: '',
})
const userModal = ref(null)
const editingUser = ref(null)
const viewingUser = ref(null)
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: 'user',
  is_active: true,
})

// Computed
const pages = computed(() => {
  const total = props.users.last_page
  const current = props.users.current_page
  const pages = []

  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

// Methods
function debouncedSearch() {
  // Debounced search - implement with lodash if needed
  applyFilters()
}

function applyFilters() {
  router.get('/admin/users', filters.value, {
    preserveState: true,
    preserveScroll: true,
  })
}

function resetFilters() {
  filters.value = {
    search: '',
    role: '',
    status: '',
  }
  applyFilters()
}

function changePage(page) {
  router.get(`/admin/users?page=${page}`, filters.value, {
    preserveState: true,
    preserveScroll: true,
  })
}

function toggleSelectAll() {
  if (selectAll.value) {
    selected.value = props.users.data.map(u => u.id)
  }
  else {
    selected.value = []
  }
}

function openCreateModal() {
  editingUser.value = null
  viewingUser.value = null
  form.value = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'user',
    is_active: true,
  }
  if (userModal.value) {
    userModal.value.show()
  }
}

function viewUser(user) {
  viewingUser.value = user
  editingUser.value = null
  form.value = {
    name: user.name,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
  }
  if (userModal.value) {
    userModal.value.show()
  }
}

function editUser(user) {
  editingUser.value = user
  viewingUser.value = null
  form.value = {
    name: user.name,
    email: user.email,
    password: '',
    password_confirmation: '',
    role: user.role,
    is_active: user.is_active,
  }
  if (userModal.value) {
    userModal.value.show()
  }
}

async function confirmDelete(user) {
  const confirmed = await confirmDeleteDialog(user.name)

  if (confirmed) {
    router.delete(`/admin/users/${user.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('User deleted successfully!')
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to delete user'
        toast.error(errorMessage)
      },
    })
  }
}

function saveUser() {
  if (!form.value.name || !form.value.email) {
    toast.error('Please fill in all required fields')

    return
  }

  if (editingUser.value) {
    // Update user
    const data = {
      name: form.value.name,
      email: form.value.email,
      role: form.value.role,
      is_active: form.value.is_active,
    }

    if (form.value.password) {
      data.password = form.value.password
      data.password_confirmation = form.value.password_confirmation
    }

    router.put(`/admin/users/${editingUser.value.id}`, data, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('User updated successfully!')
        if (userModal.value) {
          userModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to update user'
        toast.error(errorMessage)
      },
    })
  }
  else {
    // Create user
    if (!form.value.password) {
      toast.error('Password is required for new user')

      return
    }

    router.post('/admin/users', form.value, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('User created successfully!')
        if (userModal.value) {
          userModal.value.hide()
        }
      },
      onError: (errors) => {
        const errorMessage = Object.values(errors)[0] || 'Failed to create user'
        toast.error(errorMessage)
      },
    })
  }
}

async function bulkAction(action) {
  const confirmed = await confirmDeleteDialog(`${selected.value.length} user(s)`)

  if (!confirmed) {
    return
  }

  router.post('/admin/users/bulk', {
    action,
    ids: selected.value,
  }, {
    preserveScroll: true,
    onSuccess: () => {
      toast.success(`Bulk action "${action}" completed successfully!`)
      selected.value = []
      selectAll.value = false
    },
    onError: (errors) => {
      const errorMessage = Object.values(errors)[0] || 'Bulk action failed'
      toast.error(errorMessage)
    },
  })
}

function exportUsers(format) {
  const params = new URLSearchParams({
    format,
    ...filters.value,
  })
  window.location.href = `/admin/users/export?${params.toString()}`
}

function getRoleBadgeClass(role) {
  const classes = {
    admin: 'bg-primary',
    manager: 'bg-success',
    user: 'bg-info',
  }

  return classes[role] || 'bg-secondary'
}

function getStatusBadgeClass(isActive, lockedUntil) {
  if (lockedUntil && new Date(lockedUntil) > new Date()) {
    return 'bg-danger'
  }

  return isActive ? 'bg-success' : 'bg-warning'
}

function getUserStatus(isActive, lockedUntil) {
  if (lockedUntil && new Date(lockedUntil) > new Date()) {
    return 'Locked'
  }

  return isActive ? 'Active' : 'Inactive'
}

function formatDate(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Watch selected
watch(selected, newVal => {
  selectAll.value = newVal.length === props.users.data.length && newVal.length > 0
})

onMounted(() => {
  const modalElement = document.getElementById('userModal')
  if (modalElement) {
    userModal.value = new bootstrap.Modal(modalElement)
  }
})
</script>

<template>
  <Head title="User Management" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          User Management
        </h1>
        <p class="mb-0 text-muted">
          Manage system users and their permissions
        </p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Admin</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Users
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Filters & Actions -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">
              Filters & Actions
            </div>
            <div>
              <button class="btn btn-primary btn-wave" @click="openCreateModal">
                <i class="ri-user-add-line me-1" />Add User
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <input
                  v-model="filters.search"
                  type="text"
                  class="form-control"
                  placeholder="Search users..."
                  @input="debouncedSearch"
                >
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select v-model="filters.role" class="form-select" @change="applyFilters">
                  <option value="">
                    All Roles
                  </option>
                  <option value="Super Admin">
                    Super Admin
                  </option>
                  <option value="Admin">
                    Admin
                  </option>
                  <option value="Manager">
                    Manager
                  </option>
                  <option value="User">
                    User
                  </option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select v-model="filters.status" class="form-select" @change="applyFilters">
                  <option value="">
                    All Status
                  </option>
                  <option value="active">
                    Active
                  </option>
                  <option value="inactive">
                    Inactive
                  </option>
                  <option value="locked">
                    Locked
                  </option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <button class="btn btn-secondary w-100" @click="resetFilters">
                  <i class="ri-refresh-line me-1" />Reset
                </button>
              </div>
              <div class="col-xl-3 col-lg-12 col-md-12">
                <div class="btn-group w-100" role="group">
                  <button class="btn btn-outline-primary" @click="exportUsers('excel')">
                    <i class="ri-file-excel-line me-1" />Excel
                  </button>
                  <button class="btn btn-outline-primary" @click="exportUsers('csv')">
                    <i class="ri-file-text-line me-1" />CSV
                  </button>
                  <button class="btn btn-outline-primary" @click="exportUsers('pdf')">
                    <i class="ri-file-pdf-line me-1" />PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">
              Users List
            </div>
            <div class="d-flex gap-2">
              <span class="badge bg-primary-transparent">Total: {{ users.total }}</span>
              <span class="badge bg-success-transparent">Active: {{ stats.active }}</span>
              <span class="badge bg-danger-transparent">Inactive: {{ stats.inactive }}</span>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table text-nowrap table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      <input v-model="selectAll" class="form-check-input" type="checkbox" @change="toggleSelectAll">
                    </th>
                    <th scope="col">
                      User
                    </th>
                    <th scope="col">
                      Email
                    </th>
                    <th scope="col">
                      Role
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Last Login
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users.data" :key="user.id">
                    <td>
                      <input v-model="selected" class="form-check-input" type="checkbox" :value="user.id">
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="avatar avatar-sm avatar-rounded me-2">
                          <img v-if="user.avatar" :src="user.avatar" alt="avatar">
                          <span v-else class="avatar-title bg-primary-transparent">
                            {{ user.name.charAt(0).toUpperCase() }}
                          </span>
                        </span>
                        <div>
                          <div class="fw-semibold">
                            {{ user.name }}
                          </div>
                          <div class="fs-11 text-muted">
                            ID: {{ user.id }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{{ user.email }}</td>
                    <td>
                      <span :class="`badge ${getRoleBadgeClass(user.role)}`">
                        {{ user.role }}
                      </span>
                    </td>
                    <td>
                      <span :class="`badge ${getStatusBadgeClass(user.is_active, user.locked_until)}`">
                        {{ getUserStatus(user.is_active, user.locked_until) }}
                      </span>
                    </td>
                    <td>
                      <span v-if="user.last_login_at" class="text-muted fs-12">
                        {{ formatDate(user.last_login_at) }}
                      </span>
                      <span v-else class="text-muted fs-12">Never</span>
                    </td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          class="btn btn-sm btn-icon btn-primary-light"
                          title="View"
                          @click="viewUser(user)"
                        >
                          <i class="ri-eye-line" />
                        </button>
                        <button
                          class="btn btn-sm btn-icon btn-success-light"
                          title="Edit"
                          @click="editUser(user)"
                        >
                          <i class="ri-pencil-line" />
                        </button>
                        <button
                          class="btn btn-sm btn-icon btn-danger-light"
                          title="Delete"
                          @click="confirmDelete(user)"
                        >
                          <i class="ri-delete-bin-line" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="mb-2 mb-sm-0">
                Showing {{ users.from }} to {{ users.to }} of {{ users.total }} entries
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination mb-0">
                  <li class="page-item" :class="{ disabled: !users.prev_page_url }">
                    <a class="page-link" href="javascript:void(0);" @click="changePage(users.current_page - 1)">
                      Previous
                    </a>
                  </li>
                  <li
                    v-for="page in pages"
                    :key="page"
                    class="page-item"
                    :class="{ active: page === users.current_page }"
                  >
                    <a class="page-link" href="javascript:void(0);" @click="changePage(page)">
                      {{ page }}
                    </a>
                  </li>
                  <li class="page-item" :class="{ disabled: !users.next_page_url }">
                    <a class="page-link" href="javascript:void(0);" @click="changePage(users.current_page + 1)">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Actions (shown when items selected) -->
    <div v-if="selected.length > 0" class="bulk-actions-bar">
      <div class="card custom-card mb-0">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="fw-semibold">{{ selected.length }} user(s) selected</span>
            </div>
            <div class="btn-group">
              <button class="btn btn-success" @click="bulkAction('activate')">
                <i class="ri-checkbox-circle-line me-1" />Activate
              </button>
              <button class="btn btn-warning" @click="bulkAction('deactivate')">
                <i class="ri-close-circle-line me-1" />Deactivate
              </button>
              <button class="btn btn-danger" @click="bulkAction('delete')">
                <i class="ri-delete-bin-line me-1" />Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User Modal -->
    <div id="userModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              {{ viewingUser ? 'View User Details' : (editingUser ? 'Edit User' : 'Create New User') }}
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" />
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveUser">
              <div class="row">
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    placeholder="Enter full name"
                    :disabled="viewingUser"
                    required
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    placeholder="Enter email address"
                    :disabled="viewingUser"
                    required
                  >
                </div>
                <div v-if="!viewingUser" class="col-xl-6 mb-3">
                  <label class="form-label">Password {{ editingUser ? '' : '*' }}</label>
                  <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    placeholder="Enter password"
                    :required="!editingUser"
                  >
                  <small v-if="editingUser" class="text-muted">Leave blank to keep current password</small>
                </div>
                <div v-if="!viewingUser && form.password" class="col-xl-6 mb-3">
                  <label class="form-label">Confirm Password *</label>
                  <input
                    v-model="form.password_confirmation"
                    type="password"
                    class="form-control"
                    placeholder="Confirm password"
                    required
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Role *</label>
                  <select
                    v-model="form.role"
                    class="form-select"
                    :disabled="viewingUser"
                    required
                  >
                    <option value="User">
                      User
                    </option>
                    <option value="Manager">
                      Manager
                    </option>
                    <option value="Admin">
                      Admin
                    </option>
                    <option value="Super Admin">
                      Super Admin
                    </option>
                  </select>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Status</label>
                  <div class="form-check form-switch mt-2">
                    <input
                      v-model="form.is_active"
                      class="form-check-input"
                      type="checkbox"
                      :disabled="viewingUser"
                    >
                    <label class="form-check-label">
                      {{ form.is_active ? 'Active' : 'Inactive' }}
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              {{ viewingUser ? 'Close' : 'Cancel' }}
            </button>
            <button v-if="!viewingUser" type="button" class="btn btn-primary" @click="saveUser">
              <i class="ri-save-line me-1" />{{ editingUser ? 'Update' : 'Create' }} User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bulk-actions-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  min-width: 500px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

@media (max-width: 768px) {
  .bulk-actions-bar {
    min-width: 90%;
    left: 5%;
    transform: none;
  }
}
</style>
