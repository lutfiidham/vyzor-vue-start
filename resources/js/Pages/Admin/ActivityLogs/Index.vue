<template>
  <Head title="Activity Logs" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Activity Logs</h1>
        <p class="mb-0 text-muted">View and monitor system activities</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Activity Logs</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Filters -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Filters & Search</div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search activities..."
                  v-model="filters.search"
                  @input="applyFilters"
                >
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select class="form-select" v-model="filters.action" @change="applyFilters">
                  <option value="">All Actions</option>
                  <option value="created">Created</option>
                  <option value="updated">Updated</option>
                  <option value="deleted">Deleted</option>
                  <option value="login">Login</option>
                  <option value="logout">Logout</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select class="form-select" v-model="filters.user" @change="applyFilters">
                  <option value="">All Users</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <input 
                  type="date" 
                  class="form-control" 
                  v-model="filters.date"
                  @change="applyFilters"
                >
              </div>
              <div class="col-xl-3 col-lg-12 col-md-12">
                <div class="btn-group w-100">
                  <button class="btn btn-secondary" @click="resetFilters">
                    <i class="ri-refresh-line me-1"></i>Reset
                  </button>
                  <button class="btn btn-primary" @click="exportLogs">
                    <i class="ri-download-line me-1"></i>Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity Timeline -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Activity Timeline</div>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mb-0 activity-logs-timeline">
              <li 
                v-for="(activity, index) in activities" 
                :key="index"
                class="activity-log-item"
              >
                <div class="d-flex align-items-start">
                  <div class="me-3">
                    <span :class="`avatar avatar-sm avatar-rounded ${getActivityColor(activity.description)}`">
                      <i :class="getActivityIcon(activity.description)"></i>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <div>
                        <span class="fw-semibold">{{ activity.causer?.name || 'System' }}</span>
                        <span class="text-muted mx-1">•</span>
                        <span :class="`badge ${getActionBadgeClass(activity.description)}`">
                          {{ activity.description }}
                        </span>
                      </div>
                      <span class="text-muted fs-11">{{ formatTime(activity.created_at) }}</span>
                    </div>
                    <p class="text-muted fs-13 mb-2">
                      {{ getActivityMessage(activity) }}
                    </p>
                    <div v-if="activity.properties" class="activity-details">
                      <div class="d-flex gap-2 flex-wrap">
                        <span class="badge bg-light text-dark" v-if="activity.subject_type">
                          <i class="ri-file-line me-1"></i>{{ getModelName(activity.subject_type) }}
                        </span>
                        <span class="badge bg-light text-dark" v-if="activity.subject_id">
                          <i class="ri-hashtag me-1"></i>ID: {{ activity.subject_id }}
                        </span>
                        <span class="badge bg-light text-dark" v-if="activity.ip_address">
                          <i class="ri-global-line me-1"></i>{{ activity.ip_address }}
                        </span>
                        <span class="badge bg-light text-dark" v-if="activity.user_agent">
                          <i class="ri-computer-line me-1"></i>{{ getBrowser(activity.user_agent) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <!-- Empty State -->
            <div v-if="activities.length === 0" class="text-center py-5">
              <i class="ri-history-line fs-1 text-muted"></i>
              <p class="text-muted mt-2">No activities found</p>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="card-footer" v-if="pagination.last_page > 1">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="mb-2 mb-sm-0">
                Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} entries
              </div>
              <nav>
                <ul class="pagination mb-0">
                  <li class="page-item" :class="{ disabled: !pagination.prev_page_url }">
                    <a class="page-link" @click="changePage(pagination.current_page - 1)" href="javascript:void(0);">
                      Previous
                    </a>
                  </li>
                  <li 
                    v-for="page in pages" 
                    :key="page" 
                    class="page-item" 
                    :class="{ active: page === pagination.current_page }"
                  >
                    <a class="page-link" @click="changePage(page)" href="javascript:void(0);">
                      {{ page }}
                    </a>
                  </li>
                  <li class="page-item" :class="{ disabled: !pagination.next_page_url }">
                    <a class="page-link" @click="changePage(pagination.current_page + 1)" href="javascript:void(0);">
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Head, router } from '@inertiajs/vue3'

// Props with sample data
const props = defineProps({
  activities: {
    type: Array,
    default: () => [
      {
        id: 1,
        description: 'created',
        subject_type: 'App\\Models\\User',
        subject_id: 5,
        causer: { id: 1, name: 'Admin User' },
        properties: {},
        ip_address: '127.0.0.1',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        created_at: '2025-11-09T09:30:00Z'
      },
      {
        id: 2,
        description: 'login',
        subject_type: null,
        subject_id: null,
        causer: { id: 2, name: 'Manager User' },
        properties: {},
        ip_address: '127.0.0.1',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Firefox/120.0',
        created_at: '2025-11-09T08:15:00Z'
      },
      {
        id: 3,
        description: 'updated',
        subject_type: 'App\\Models\\User',
        subject_id: 3,
        causer: { id: 1, name: 'Admin User' },
        properties: {},
        ip_address: '127.0.0.1',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        created_at: '2025-11-09T07:45:00Z'
      }
    ]
  },
  users: {
    type: Array,
    default: () => [
      { id: 1, name: 'Admin User' },
      { id: 2, name: 'Manager User' }
    ]
  },
  pagination: {
    type: Object,
    default: () => ({
      current_page: 1,
      last_page: 1,
      from: 1,
      to: 3,
      total: 3,
      prev_page_url: null,
      next_page_url: null
    })
  }
})

// State
const filters = ref({
  search: '',
  action: '',
  user: '',
  date: ''
})

// Computed
const pages = computed(() => {
  const total = props.pagination.last_page
  const current = props.pagination.current_page
  const pages = []
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Methods
const getActivityIcon = (description) => {
  const icons = {
    created: 'ri-add-circle-line',
    updated: 'ri-pencil-line',
    deleted: 'ri-delete-bin-line',
    login: 'ri-login-box-line',
    logout: 'ri-logout-box-line'
  }
  return icons[description] || 'ri-history-line'
}

const getActivityColor = (description) => {
  const colors = {
    created: 'bg-success-transparent',
    updated: 'bg-primary-transparent',
    deleted: 'bg-danger-transparent',
    login: 'bg-info-transparent',
    logout: 'bg-warning-transparent'
  }
  return colors[description] || 'bg-secondary-transparent'
}

const getActionBadgeClass = (description) => {
  const classes = {
    created: 'bg-success-transparent',
    updated: 'bg-primary-transparent',
    deleted: 'bg-danger-transparent',
    login: 'bg-info-transparent',
    logout: 'bg-warning-transparent'
  }
  return classes[description] || 'bg-secondary-transparent'
}

const getActivityMessage = (activity) => {
  const messages = {
    created: `Created new ${getModelName(activity.subject_type)}`,
    updated: `Updated ${getModelName(activity.subject_type)}`,
    deleted: `Deleted ${getModelName(activity.subject_type)}`,
    login: 'Logged into the system',
    logout: 'Logged out from the system'
  }
  return messages[activity.description] || 'Performed an action'
}

const getModelName = (subjectType) => {
  if (!subjectType) return 'Item'
  const parts = subjectType.split('\\')
  return parts[parts.length - 1]
}

const getBrowser = (userAgent) => {
  if (!userAgent) return 'Unknown'
  if (userAgent.includes('Chrome')) return 'Chrome'
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Safari')) return 'Safari'
  if (userAgent.includes('Edge')) return 'Edge'
  return 'Browser'
}

const formatTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const applyFilters = () => {
  console.log('Applying filters:', filters.value)
  // router.get('/admin/activity-logs', filters.value, {
  //   preserveState: true,
  //   preserveScroll: true
  // })
}

const resetFilters = () => {
  filters.value = {
    search: '',
    action: '',
    user: '',
    date: ''
  }
  applyFilters()
}

const changePage = (page) => {
  console.log('Changing to page:', page)
  // router.get(`/admin/activity-logs?page=${page}`, filters.value, {
  //   preserveState: true,
  //   preserveScroll: true
  // })
}

const exportLogs = () => {
  console.log('Exporting logs')
  // window.location.href = `/admin/activity-logs/export?${new URLSearchParams(filters.value).toString()}`
}
</script>

<style scoped>
.activity-log-item {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
}

.activity-log-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.activity-log-item::before {
  content: '';
  position: absolute;
  left: 18px;
  top: 40px;
  bottom: -15px;
  width: 2px;
  background: rgba(0, 0, 0, 0.05);
}

.activity-log-item:last-child::before {
  display: none;
}

.activity-details {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 0.375rem;
}
</style>
