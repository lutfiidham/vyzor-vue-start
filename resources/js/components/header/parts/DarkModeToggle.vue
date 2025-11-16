<script setup>
import { switcherStore } from '../../../../stores/switcher.js'

const emit = defineEmits(['theme-changed'])

const switcher = switcherStore()

function toggleTheme(theme) {
  localStorage.setItem('vyzorcolortheme', theme)
  localStorage.removeItem('vyzorbodyBgRGB')
  switcher.colorthemeFn(theme)
  emit('theme-changed', theme)
}
</script>

<template>
  <li class="header-element header-theme-mode">
    <!-- Start::header-link|layout-setting -->
    <a href="javascript:void(0);" class="header-link layout-setting">
      <span class="light-layout" @click="toggleTheme('dark')">
        <!-- Start::header-link-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="header-link-icon"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
            opacity="0.2"
          />
          <path
            d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
        <!-- End::header-link-icon -->
      </span>
      <span class="dark-layout" @click="toggleTheme('light')">
        <!-- Start::header-link-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="header-link-icon"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <circle cx="128" cy="128" r="56" opacity="0.2" />
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="32"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <circle
            cx="128"
            cy="128"
            r="56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="64"
            y1="64"
            x2="56"
            y2="56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="64"
            y1="192"
            x2="56"
            y2="200"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="192"
            y1="64"
            x2="200"
            y2="56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="192"
            y1="192"
            x2="200"
            y2="200"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="40"
            y1="128"
            x2="32"
            y2="128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="128"
            y1="216"
            x2="128"
            y2="224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="216"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
        <!-- End::header-link-icon -->
      </span>
    </a>
    <!-- End::header-link|layout-setting -->
  </li>
</template>
