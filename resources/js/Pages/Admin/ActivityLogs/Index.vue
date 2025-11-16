<script setup>
import { Head, router } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

// Props
const props = defineProps({
  activities: Array,
  users: Array,
  pagination: Object,
})

// Computed data with fallbacks
const activitiesData = computed(() => props.activities || [])
const usersData = computed(() => props.users || [])
const paginationData = computed(() => props.pagination || {
  current_page: 1,
  last_page: 1,
  from: 1,
  to: 0,
  total: 0,
  prev_page_url: null,
  next_page_url: null,
})

// State
const filters = ref({
  search: '',
  action: '',
  user: '',
  date: '',
})

// Computed
const pages = computed(() => {
  const total = paginationData.value.last_page
  const current = paginationData.value.current_page
  const pagesList = []

  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)

  for (let i = start; i <= end; i++) {
    pagesList.push(i)
  }

  return pagesList
})

// Methods
function getActivityIcon(description) {
  if (!description)
    return 'ri-history-line'
  const icons = {
    created: 'ri-add-circle-line',
    updated: 'ri-pencil-line',
    deleted: 'ri-delete-bin-line',
    login: 'ri-login-box-line',
    logout: 'ri-logout-box-line',
  }

  return icons[description] || 'ri-history-line'
}

function getActivityColor(description) {
  if (!description)
    return 'bg-secondary-transparent'
  const colors = {
    created: 'bg-success-transparent',
    updated: 'bg-primary-transparent',
    deleted: 'bg-danger-transparent',
    login: 'bg-info-transparent',
    logout: 'bg-warning-transparent',
  }

  return colors[description] || 'bg-secondary-transparent'
}

function getActionBadgeClass(description) {
  if (!description)
    return 'bg-secondary-transparent'
  const classes = {
    created: 'bg-success-transparent',
    updated: 'bg-primary-transparent',
    deleted: 'bg-danger-transparent',
    login: 'bg-info-transparent',
    logout: 'bg-warning-transparent',
  }

  return classes[description] || 'bg-secondary-transparent'
}

function getActivityMessage(activity) {
  if (!activity || !activity.description)
    return 'Performed an action'
  const messages = {
    created: `Created new ${getModelName(activity.subject_type)}`,
    updated: `Updated ${getModelName(activity.subject_type)}`,
    deleted: `Deleted ${getModelName(activity.subject_type)}`,
    login: 'Logged into the system',
    logout: 'Logged out from the system',
  }

  return messages[activity.description] || 'Performed an action'
}

function getModelName(subjectType) {
  if (!subjectType)
    return 'Item'
  const parts = subjectType.split('\\')

  return parts[parts.length - 1]
}

function getBrowser(userAgent) {
  if (!userAgent)
    return 'Unknown'
  if (userAgent.includes('Chrome'))
    return 'Chrome'
  if (userAgent.includes('Firefox'))
    return 'Firefox'
  if (userAgent.includes('Safari'))
    return 'Safari'
  if (userAgent.includes('Edge'))
    return 'Edge'

  return 'Browser'
}

function formatTime(date) {
  if (!date)
    return 'N/A'
  try {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  catch (e) {
    return 'Invalid Date'
  }
}

function applyFilters() {
  router.get('/admin/activity-logs', filters.value, {
    preserveState: true,
    preserveScroll: true,
  })
}

function resetFilters() {
  filters.value = {
    search: '',
    action: '',
    user: '',
    date: '',
  }
  applyFilters()
}

function changePage(page) {
  router.get('/admin/activity-logs', { ...filters.value, page }, {
    preserveState: true,
    preserveScroll: true,
  })
}

function exportLogs() {
  window.location.href = `/admin/activity-logs/export?${new URLSearchParams(filters.value).toString()}`
}
</script>

<template>
  <Head title="Activity Logs" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          Activity Logs
        </h1>
        <p class="mb-0 text-muted">
          View and monitor system activities
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
              Activity Logs
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Filters -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Filters & Search
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <input
                  v-model="filters.search"
                  type="text"
                  class="form-control"
                  placeholder="Search activities..."
                  @input="applyFilters"
                >
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select v-model="filters.action" class="form-select" @change="applyFilters">
                  <option value="">
                    All Actions
                  </option>
                  <option value="created">
                    Created
                  </option>
                  <option value="updated">
                    Updated
                  </option>
                  <option value="deleted">
                    Deleted
                  </option>
                  <option value="login">
                    Login
                  </option>
                  <option value="logout">
                    Logout
                  </option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <select v-model="filters.user" class="form-select" @change="applyFilters">
                  <option value="">
                    All Users
                  </option>
                  <option v-for="user in usersData" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-6">
                <input
                  v-model="filters.date"
                  type="date"
                  class="form-control"
                  @change="applyFilters"
                >
              </div>
              <div class="col-xl-3 col-lg-12 col-md-12">
                <div class="btn-group w-100">
                  <button class="btn btn-secondary" @click="resetFilters">
                    <i class="ri-refresh-line me-1" />Reset
                  </button>
                  <button class="btn btn-primary" @click="exportLogs">
                    <i class="ri-download-line me-1" />Export
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
            <div class="card-title">
              Activity Timeline
            </div>
          </div>
          <div class="card-body">
            <div v-if="activitiesData.length === 0" class="text-center py-5">
              <div class="avatar avatar-xxl bg-light mb-3">
                <i class="ri-history-line fs-1 text-muted" />
              </div>
              <h5 class="mb-2">
                No Activity Logs Found
              </h5>
              <p class="text-muted">
                There are no activity logs to display at this time.
              </p>
            </div>
            <ul v-else class="list-unstyled mb-0 activity-logs-timeline">
              <li
                v-for="(activity, index) in activitiesData"
                :key="index"
                class="activity-log-item"
              >
                <div class="d-flex align-items-start">
                  <div class="me-3">
                    <span :class="`avatar avatar-sm avatar-rounded ${getActivityColor(activity?.description || '')}`">
                      <i :class="getActivityIcon(activity?.description || '')" />
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <div>
                        <span class="fw-semibold">{{ activity?.causer?.name || 'System' }}</span>
                        <span class="text-muted mx-1">•</span>
                        <span :class="`badge ${getActionBadgeClass(activity?.description || '')}`">
                          {{ activity?.description || 'unknown' }}
                        </span>
                      </div>
                      <span class="text-muted fs-11">{{ formatTime(activity?.created_at) }}</span>
                    </div>
                    <p class="text-muted fs-13 mb-2">
                      {{ getActivityMessage(activity || {}) }}
                    </p>
                    <div v-if="activity?.properties" class="activity-details">
                      <div class="d-flex gap-2 flex-wrap">
                        <span v-if="activity?.subject_type" class="badge bg-light text-dark">
                          <i class="ri-file-line me-1" />{{ getModelName(activity.subject_type) }}
                        </span>
                        <span v-if="activity?.subject_id" class="badge bg-light text-dark">
                          <i class="ri-hashtag me-1" />ID: {{ activity.subject_id }}
                        </span>
                        <span v-if="activity?.ip_address" class="badge bg-light text-dark">
                          <i class="ri-global-line me-1" />{{ activity.ip_address }}
                        </span>
                        <span v-if="activity?.user_agent" class="badge bg-light text-dark">
                          <i class="ri-computer-line me-1" />{{ getBrowser(activity.user_agent) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <!-- Empty State -->
            <div v-if="activities.length === 0" class="text-center py-5">
              <i class="ri-history-line fs-1 text-muted" />
              <p class="text-muted mt-2">
                No activities found
              </p>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="paginationData.last_page > 1" class="card-footer">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="mb-2 mb-sm-0">
                Showing {{ paginationData.from }} to {{ paginationData.to }} of {{ paginationData.total }} entries
              </div>
              <nav>
                <ul class="pagination mb-0">
                  <li class="page-item" :class="{ disabled: !paginationData.prev_page_url }">
                    <a class="page-link" href="javascript:void(0);" @click="changePage(paginationData.current_page - 1)">
                      Previous
                    </a>
                  </li>
                  <li
                    v-for="page in pages"
                    :key="page"
                    class="page-item"
                    :class="{ active: page === paginationData.current_page }"
                  >
                    <a class="page-link" href="javascript:void(0);" @click="changePage(page)">
                      {{ page }}
                    </a>
                  </li>
                  <li class="page-item" :class="{ disabled: !paginationData.next_page_url }">
                    <a class="page-link" href="javascript:void(0);" @click="changePage(paginationData.current_page + 1)">
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
