<template>
  <Head title="User Management" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">User Management</h1>
        <p class="mb-0 text-muted">Manage system users and their permissions</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Users</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Filters & Actions -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">Filters & Actions</div>
            <div>
              <button class="btn btn-primary btn-wave" @click="openCreateModal">
                <i class="ri-user-add-line me-1"></i>Add User
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search users..."
                  v-model="filters.search"
                  @input="debouncedSearch"
                >
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select class="form-select" v-model="filters.role" @change="applyFilters">
                  <option value="">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select class="form-select" v-model="filters.status" @change="applyFilters">
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="locked">Locked</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <button class="btn btn-secondary w-100" @click="resetFilters">
                  <i class="ri-refresh-line me-1"></i>Reset
                </button>
              </div>
              <div class="col-xl-3 col-lg-12 col-md-12">
                <div class="btn-group w-100" role="group">
                  <button class="btn btn-outline-primary" @click="exportUsers('excel')">
                    <i class="ri-file-excel-line me-1"></i>Excel
                  </button>
                  <button class="btn btn-outline-primary" @click="exportUsers('csv')">
                    <i class="ri-file-text-line me-1"></i>CSV
                  </button>
                  <button class="btn btn-outline-primary" @click="exportUsers('pdf')">
                    <i class="ri-file-pdf-line me-1"></i>PDF
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
            <div class="card-title">Users List</div>
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
                      <input class="form-check-input" type="checkbox" v-model="selectAll" @change="toggleSelectAll">
                    </th>
                    <th scope="col">User</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>
                    <th scope="col">Last Login</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users.data" :key="user.id">
                    <td>
                      <input class="form-check-input" type="checkbox" v-model="selected" :value="user.id">
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
                          <div class="fw-semibold">{{ user.name }}</div>
                          <div class="fs-11 text-muted">ID: {{ user.id }}</div>
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
                          @click="viewUser(user)"
                          title="View"
                        >
                          <i class="ri-eye-line"></i>
                        </button>
                        <button 
                          class="btn btn-sm btn-icon btn-success-light" 
                          @click="editUser(user)"
                          title="Edit"
                        >
                          <i class="ri-pencil-line"></i>
                        </button>
                        <button 
                          class="btn btn-sm btn-icon btn-danger-light" 
                          @click="confirmDelete(user)"
                          title="Delete"
                        >
                          <i class="ri-delete-bin-line"></i>
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
                    <a class="page-link" @click="changePage(users.current_page - 1)" href="javascript:void(0);">
                      Previous
                    </a>
                  </li>
                  <li 
                    v-for="page in pages" 
                    :key="page" 
                    class="page-item" 
                    :class="{ active: page === users.current_page }"
                  >
                    <a class="page-link" @click="changePage(page)" href="javascript:void(0);">
                      {{ page }}
                    </a>
                  </li>
                  <li class="page-item" :class="{ disabled: !users.next_page_url }">
                    <a class="page-link" @click="changePage(users.current_page + 1)" href="javascript:void(0);">
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
                <i class="ri-checkbox-circle-line me-1"></i>Activate
              </button>
              <button class="btn btn-warning" @click="bulkAction('deactivate')">
                <i class="ri-close-circle-line me-1"></i>Deactivate
              </button>
              <button class="btn btn-danger" @click="bulkAction('delete')">
                <i class="ri-delete-bin-line me-1"></i>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Head, router } from '@inertiajs/vue3'

// Props with default data
const props = defineProps({
  users: {
    type: Object,
    default: () => ({
      data: [
        { id: 1, name: 'Admin User', email: 'admin@vyzor.test', role: 'admin', is_active: true, last_login_at: '2025-11-09T08:00:00Z', locked_until: null },
        { id: 2, name: 'Manager User', email: 'manager@vyzor.test', role: 'manager', is_active: true, last_login_at: '2025-11-09T07:30:00Z', locked_until: null },
        { id: 3, name: 'Regular User', email: 'user@vyzor.test', role: 'user', is_active: true, last_login_at: '2025-11-08T15:20:00Z', locked_until: null }
      ],
      total: 3,
      from: 1,
      to: 3,
      current_page: 1,
      last_page: 1,
      prev_page_url: null,
      next_page_url: null
    })
  },
  stats: {
    type: Object,
    default: () => ({
      active: 3,
      inactive: 0
    })
  }
})

// State
const selected = ref([])
const selectAll = ref(false)
const filters = ref({
  search: '',
  role: '',
  status: ''
})

// Computed
const pages = computed(() => {
  const total = props.users.last_page
  const current = props.users.current_page
  const pages = []
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Methods
const debouncedSearch = () => {
  // Debounced search - implement with lodash if needed
  applyFilters()
}

const applyFilters = () => {
  console.log('Applying filters:', filters.value)
  // router.get('/admin/users', filters.value, {
  //   preserveState: true,
  //   preserveScroll: true
  // })
}

const resetFilters = () => {
  filters.value = {
    search: '',
    role: '',
    status: ''
  }
  applyFilters()
}

const changePage = (page) => {
  console.log('Changing to page:', page)
  // router.get(`/admin/users?page=${page}`, filters.value, {
  //   preserveState: true,
  //   preserveScroll: true
  // })
}

const toggleSelectAll = () => {
  if (selectAll.value) {
    selected.value = props.users.data.map(u => u.id)
  } else {
    selected.value = []
  }
}

const openCreateModal = () => {
  console.log('Opening create user modal')
  // router.visit('/admin/users/create')
}

const viewUser = (user) => {
  console.log('Viewing user:', user)
  // router.visit(`/admin/users/${user.id}`)
}

const editUser = (user) => {
  console.log('Editing user:', user)
  // router.visit(`/admin/users/${user.id}/edit`)
}

const confirmDelete = (user) => {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    console.log('Deleting user:', user)
    // router.delete(`/admin/users/${user.id}`)
  }
}

const bulkAction = (action) => {
  if (!confirm(`Are you sure you want to ${action} ${selected.value.length} user(s)?`)) {
    return
  }
  
  console.log(`Bulk ${action}:`, selected.value)
  // router.post('/admin/users/bulk', {
  //   action: action,
  //   ids: selected.value
  // })
}

const exportUsers = (format) => {
  console.log('Exporting to:', format)
  // window.location.href = `/admin/users/export?format=${format}`
}

const getRoleBadgeClass = (role) => {
  const classes = {
    admin: 'bg-primary',
    manager: 'bg-success',
    user: 'bg-info'
  }
  return classes[role] || 'bg-secondary'
}

const getStatusBadgeClass = (isActive, lockedUntil) => {
  if (lockedUntil && new Date(lockedUntil) > new Date()) {
    return 'bg-danger'
  }
  return isActive ? 'bg-success' : 'bg-warning'
}

const getUserStatus = (isActive, lockedUntil) => {
  if (lockedUntil && new Date(lockedUntil) > new Date()) {
    return 'Locked'
  }
  return isActive ? 'Active' : 'Inactive'
}

const formatDate = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Watch selected
watch(selected, (newVal) => {
  selectAll.value = newVal.length === props.users.data.length && newVal.length > 0
})
</script>

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
