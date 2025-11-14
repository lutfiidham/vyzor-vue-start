<template>
  <li class="header-element notifications-dropdown d-xl-block d-none dropdown">
    <!-- Start::header-link|dropdown-toggle -->
    <a
      href="javascript:void(0);"
      class="header-link dropdown-toggle"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      id="messageDropdown"
      aria-expanded="false"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path
          d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
          opacity="0.2"
        />
        <path
          d="M96,192a32,32,0,0,0,64,0"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <path
          d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </svg>
      <span class="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
    </a>
    <!-- End::header-link|dropdown-toggle -->
    <!-- Start::main-header-dropdown -->
    <div
      class="main-header-dropdown dropdown-menu dropdown-menu-end"
      data-popper-placement="none"
    >
      <div class="p-3 bg-primary text-fixed-white">
        <div class="d-flex align-items-center justify-content-between">
          <p class="mb-0 fs-16">Notifications</p>
          <a href="javascript:void(0);" class="badge bg-light text-default border" @click="clearAllNotifications"
            >Clear All</a
          >
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <PerfectScrollbar class="list-unstyled mb-0" id="header-notification-scroll">
        <li
          :class="`dropdown-item position-relative ${notification.liClass}`"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <Link :href="`${baseUrl}/demo/applications/chat/`" class="stretched-link"></Link>
          <div class="d-flex align-items-start gap-3">
            <div class="lh-1">
              <span class="avatar avatar-sm avatar-rounded bg-primary-transparent">
                <BaseImg v-if="notification.avatar" :src="notification.avatar" alt="" />
                <i v-if="notification.icon" class="ri-notification-line fs-16"></i>
              </span>
            </div>
            <div class="flex-fill">
              <span class="d-block fw-semibold">{{ notification.title }}</span>
              <span class="d-block text-muted fs-12">{{ notification.description }}</span>
            </div>
            <div class="text-end">
              <span class="d-block mb-1 fs-12 text-muted">{{ notification.time }}</span>
              <span :class="`d-block text-primary ${notification.isUnread ? '' : 'd-none'} `"
                ><i class="ri-circle-fill fs-9"></i
              ></span>
            </div>
          </div>
        </li>
      </PerfectScrollbar>
      <div class="p-5 empty-item1 d-none" v-if="!notifications.length">
        <div class="text-center">
          <span class="avatar avatar-xl avatar-rounded bg-secondary-transparent">
            <i class="ri-notification-off-line fs-2"></i>
          </span>
          <h6 class="fw-medium mt-3">No New Notifications</h6>
        </div>
      </div>
    </div>
    <!-- End::main-header-dropdown -->
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import { Notifications } from '@/shared/data/header.js'
import BaseImg from '../../Baseimage/BaseImg.vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  baseUrl: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['notifications-updated'])

const notifications = ref([...Notifications])

const clearAllNotifications = () => {
  notifications.value = []
  emit('notifications-updated', notifications.value)
}
</script>