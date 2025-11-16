<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import BaseImg from '../../Baseimage/BaseImg.vue'

const page = usePage()

// Get current user from page props
const currentUser = computed(() => page.props.auth?.user || null)

// User initials for avatar fallback
const userInitials = computed(() => {
  if (!currentUser.value?.name)
    return 'U'

  return currentUser.value.name.charAt(0).toUpperCase()
})
</script>

<template>
  <li class="header-element dropdown">
    <!-- Start::header-link|dropdown-toggle -->
    <a
      id="mainHeaderProfile"
      href="javascript:void(0);"
      class="header-link dropdown-toggle"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
    >
      <div class="d-flex align-items-center">
        <span class="avatar avatar-sm avatar-rounded me-2">
          <BaseImg
            v-if="currentUser?.avatar"
            :src="currentUser.avatar"
            alt="User Avatar"
            class="header-link-icon"
          />
          <span v-else class="avatar-title bg-primary header-link-icon">{{ userInitials }}</span>
        </span>
      </div>
    </a>
    <!-- End::header-link|dropdown-toggle -->
    <div
      class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
      aria-labelledby="mainHeaderProfile"
    >
      <div class="p-3 bg-primary text-fixed-white">
        <div class="d-flex align-items-center justify-content-between">
          <p class="mb-0 fs-16">
            {{
              currentUser?.roles
                .map((role) => role.charAt(0).toUpperCase() + role.slice(1))
                .join(', ')
            }}
          </p>
          <Link href="/profile/edit" class="text-fixed-white">
            <i class="ti ti-settings-cog" />
          </Link>
        </div>
      </div>
      <div class="dropdown-divider" />
      <div class="p-3">
        <div class="d-flex align-items-start gap-2">
          <div class="lh-1">
            <span class="avatar avatar-sm bg-primary-transparent avatar-rounded">
              <BaseImg v-if="currentUser?.avatar" :src="currentUser.avatar" alt="User Avatar" />
              <span v-else class="avatar-title bg-primary">{{ userInitials }}</span>
            </span>
          </div>
          <div>
            <span class="d-block fw-semibold lh-1">{{ currentUser?.name || 'User' }}</span>
            <span class="text-muted fs-12">{{ currentUser?.email || 'user@example.com' }}</span>
          </div>
        </div>
      </div>
      <div class="dropdown-divider" />
      <ul class="list-unstyled mb-0">
        <li>
          <ul class="list-unstyled mb-0 sub-list">
            <li>
              <Link class="dropdown-item d-flex align-items-center" href="/profile">
                <i class="ti ti-user-circle me-2 fs-18" />My Profile
              </Link>
            </li>
            <li>
              <Link class="dropdown-item d-flex align-items-center" href="/profile/edit">
                <i class="ti ti-settings-cog me-2 fs-18" />Edit Profile
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul class="list-unstyled mb-0 sub-list">
            <li>
              <Link class="dropdown-item d-flex align-items-center" href="/admin/activity-logs">
                <i class="ti ti-bolt me-2 fs-18" />Activity Logs
              </Link>
            </li>
            <li>
              <Link class="dropdown-item d-flex align-items-center" href="/notifications">
                <i class="ti ti-bell me-2 fs-18" />Notifications
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/logout"
            method="post"
            as="button"
            class="dropdown-item d-flex align-items-center"
          >
            <i class="ti ti-logout me-2 fs-18" />Log Out
          </Link>
        </li>
      </ul>
    </div>
  </li>
</template>
