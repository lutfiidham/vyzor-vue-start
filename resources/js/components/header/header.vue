<template>
  <header class="app-header sticky" id="header">
    <!-- Start::main-header-container -->
    <div class="main-header-container container-fluid">
      <!-- Start::header-content-left -->
      <div class="header-content-left">
        <!-- Start::header-element -->
        <div class="header-element">
          <div class="horizontal-logo">
            <Link :href="logoLink" class="header-logo">
              <BaseImg src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
              <BaseImg src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
              <BaseImg src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
              <BaseImg src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />
            </Link>
          </div>
        </div>
        <!-- End::header-element -->

        <!-- Start::header-element -->
        <div class="header-element mx-lg-0 mx-2">
          <a
            aria-label="Hide Sidebar"
            @click="ToggleMenu"
            class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
            data-bs-toggle="sidebar"
            href="javascript:void(0);"
            ><span></span
          ></a>
        </div>
        <!-- End::header-element -->

        <div class="header-element header-search d-md-block d-none">
          <div class="autoComplete_wrapper">
            <!-- Start::header-link -->
            <input
              type="text"
              class="header-search-bar form-control bg-white"
              id="header-search"
              :value="search"
              @input="handleToChange"
              placeholder="Search"
              spellcheck="false"
              autocomplete="off"
              autocapitalize="off"
            />
            <template v-if="showSuggestions">
              <div
                className="custom-card card w-100 search-result position-absolute z-index-9 search-fix border mt-1"
              >
                <div className="card-header">
                  <div className="card-title mb-0 text-break">Search result of {{ search }}</div>
                </div>
                <div className="card-body overflow-auto">
                  <div class="list-group custom-header" Id="autoComplete_list_1">
                    <template v-if="uniqueSuggestions.length > 0">
                      <li
                        id="autoComplete_result_0"
                        class="list-group-item li-Class"
                        v-for="(e, index) in uniqueSuggestions.slice(0, 7)"
                        :key="index"
                      >
                        <Link
                          :href="`${e.path}/`"
                          class="search-result-item"
                          @click="handleSuggestionClick(e.title)"
                        >
                          {{ e.title }}
                        </Link>
                      </li>
                    </template>
                    <template v-else>
                      <b class="text-danger">There is no component with this name</b>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <a href="javascript:void(0);" class="header-search-icon border-0">
              <i class="bi bi-search fs-12"></i>
            </a>
            <!-- End::header-link -->
          </div>
        </div>
      </div>
      <!-- End::header-content-left -->

      <!-- Start::header-content-right -->
      <ul class="header-content-right">
        <!-- Start::header-element -->
        <li class="header-element d-md-none d-block">
          <a
            href="javascript:void(0);"
            class="header-link"
            data-bs-toggle="modal"
            data-bs-target="#header-responsive-search"
          >
            <!-- Start::header-link-icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <circle cx="112" cy="112" r="80" opacity="0.2" />
              <circle
                cx="112"
                cy="112"
                r="80"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <line
                x1="168.57"
                y1="168.57"
                x2="224"
                y2="224"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
            <!-- End::header-link-icon -->
          </a>
        </li>
        <!-- End::header-element -->

        <!-- Language Switcher Component -->
        <!-- <LanguageSwitcher @language-changed="handleLanguageChanged" /> -->

        <!-- Dark Mode Toggle Component -->
        <DarkModeToggle @theme-changed="handleThemeChanged" />

        <!-- Cart Button Component -->
        <!-- <CartButton :base-url="baseUrl" @cart-updated="handleCartUpdated" /> -->

        <!-- Notification Button Component -->
        <!-- <NotificationButton
          :base-url="baseUrl"
          @notifications-updated="handleNotificationsUpdated"
        /> -->

        <!-- Fullscreen Toggle Component -->
        <FullscreenToggle @fullscreen-changed="handleFullscreenChanged" />

        <!-- Profile Dropdown Component -->
        <ProfileDropdown />

        <!-- Start::header-element -->
        <li class="header-element">
          <!-- Start::header-link|switcher-icon 
          <a
            href="javascript:void(0);"
            class="header-link switcher-icon"
            data-bs-toggle="offcanvas"
            data-bs-target="#switcher-canvas"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <path
                d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                opacity="0.2"
              />
              <circle
                cx="128"
                cy="128"
                r="40"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <path
                d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
          </a>
           End::header-link|switcher-icon -->
        </li>
        <!-- End::header-element -->
      </ul>
      <!-- End::header-content-right -->
    </div>
    <!-- End::main-header-container -->
  </header>

  <div
    class="modal fade"
    id="header-responsive-search"
    tabindex="-1"
    aria-labelledby="header-responsive-search"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-end-0"
              placeholder="Search Anything ..."
              :value="search"
              @input="handleToChange"
              aria-label="Search Anything ..."
              aria-describedby="button-addon2"
            />
            <template v-if="showSuggestions">
              <div
                className="custom-card card w-100 search-result position-absolute z-index-9 search-fix border mt-15 rounded-1"
              >
                <div className="card-header d-none d-sm-block">
                  <div className="card-title mb-0 text-break">
                    Search result of
                    <b
                      ><u>{{ search }}</u></b
                    >
                  </div>
                </div>
                <div className="card-body overflow-auto">
                  <div class="list-group custom-header" Id="autoComplete_list_1">
                    <template v-if="uniqueSuggestions.length > 0">
                      <li
                        id="autoComplete_result_0"
                        class="list-group-item li-Class"
                        v-for="(e, index) in uniqueSuggestions.slice(0, 7)"
                        :key="index"
                      >
                        <Link
                          :href="`${e.path}/`"
                          class="search-result-item"
                          @click="handleSuggestionClick(suggestion.title)"
                        >
                          {{ e.title }}
                        </Link>
                      </li>
                    </template>
                    <template v-else>
                      <b class="text-danger">There is no component with this name</b>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <button class="btn btn-primary" type="button" id="button-addon2">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '../../../stores/auth'
import { switcherStore } from '../../../stores/switcher.js'
import { MENUITEMS } from '@/shared/data/sidebar/nav.js'
import { Tooltip } from 'bootstrap'
import {
  Languages,
  Notifications,
  notificationNotes as initialNotificationNotes,
} from '@/shared/data/header.js'
import BaseImg from '../Baseimage/BaseImg.vue'
import { Link, usePage } from '@inertiajs/vue3'

// Modular components
import {
  // LanguageSwitcher,
  DarkModeToggle,
  // CartButton,
  // NotificationButton,
  FullscreenToggle,
  ProfileDropdown,
} from './parts/index.js'

// Stores
const switcher = switcherStore()
const { logUserOut } = useAuthStore()
const page = usePage()
const baseUrl = __BASE_PATH__

// Get current user from page props
const currentUser = computed(() => page.props.auth?.user || null)

// User initials for avatar fallback
const userInitials = computed(() => {
  if (!currentUser.value?.name) return 'U'
  return currentUser.value.name.charAt(0).toUpperCase()
})

// Computed logo link - if on demo pages, link to demo dashboard, else to main dashboard
const logoLink = computed(() => {
  const currentPath = page.url
  const isDemoPage = currentPath.startsWith('/demo')
  return isDemoPage ? `${baseUrl}/demo/dashboards/sales/` : '/dashboard'
})

// Refs
const isFullScreen = ref(false)
const search = ref('')
const showSuggestions = ref(false)
const notificationNotes = ref([...initialNotificationNotes])

// Functions
const colorthemeFn = (value) => {
  localStorage.setItem('vyzorcolortheme', value)
  localStorage.removeItem('vyzorbodyBgRGB') // ❌ Fix: removeItem takes only one argument
  switcher.colorthemeFn(value)
}

const ToggleMenu = () => {
  const html = document.documentElement

  if (window.innerWidth <= 992) {
    const dataToggled = html.getAttribute('data-toggled')
    html.setAttribute('data-toggled', dataToggled === 'open' ? 'close' : 'open')
  } else {
    const menuNavLayoutType = html.getAttribute('data-nav-style')
    const verticalStyleType = html.getAttribute('data-vertical-style')
    const dataToggled = html.getAttribute('data-toggled')

    if (menuNavLayoutType) {
      if (dataToggled) {
        html.removeAttribute('data-toggled')
      } else {
        html.setAttribute('data-toggled', `${menuNavLayoutType}-closed`)
      }
    } else if (verticalStyleType) {
      if (verticalStyleType === 'doublemenu') {
        if (dataToggled === 'double-menu-open' && document.querySelector('.double-menu-active')) {
          html.setAttribute('data-toggled', 'double-menu-close')
        } else if (document.querySelector('.double-menu-active')) {
          html.setAttribute('data-toggled', 'double-menu-open')
        }
      } else {
        if (dataToggled) {
          html.removeAttribute('data-toggled')
        } else {
          const map = {
            closed: 'close-menu-close',
            icontext: 'icon-text-close',
            overlay: 'icon-overlay-close',
            detached: 'detached-close',
          }
          html.setAttribute('data-toggled', map[verticalStyleType] || '')
        }
      }
    }
  }
}

const toggleFullScreen = () => {
  const element = document.documentElement
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    element.requestFullscreen()
  }
}

const fullscreenChanged = () => {
  isFullScreen.value = !!document.fullscreenElement
}

// Event handlers for modular components
const handleLanguageChanged = (lang) => {
  console.log('Language changed to:', lang)
  // Add language change logic here
}

const handleThemeChanged = (theme) => {
  console.log('Theme changed to:', theme)
  // Theme is already handled in DarkModeToggle component
}

const handleCartUpdated = (cartItems) => {
  notificationNotes.value = cartItems
  console.log('Cart updated:', cartItems)
}

const handleNotificationsUpdated = (notifications) => {
  console.log('Notifications updated:', notifications)
  // Add notification update logic here
}

const handleFullscreenChanged = (isFullscreen) => {
  isFullScreen.value = isFullscreen
  console.log('Fullscreen changed:', isFullscreen)
}

// Legacy functions (kept for compatibility)
const handleCartDelete = (id) => {
  notificationNotes.value = notificationNotes.value.filter((item) => item.id !== id)
}

const dec = (event) => {
  event.preventDefault()
  const input = event.currentTarget.parentElement?.querySelector('input')
  if (input) {
    const unit = Number(input.value)
    if (unit > 1) {
      input.value = String(unit - 1)
    }
  }
}

const inc = (event) => {
  event.preventDefault()
  const input = event.currentTarget.parentElement?.querySelector('input')
  if (input) {
    input.value = String(Number(input.value) + 1)
  }
}

const handleClickOutside = () => {
  showSuggestions.value = false
}

const handleToChange = (event) => {
  const target = event.target
  search.value = target.value
  showSuggestions.value = search.value.length > 0
}

const handleSuggestionClick = (suggestionTitle) => {
  search.value = ''
  showSuggestions.value = false
}

// Computed
const filterSuggestions = computed(() => {
  const getTitlesWithPaths = (menuItems) => {
    const titles = []
    menuItems.forEach((item) => {
      if (item?.path) {
        titles.push({ title: item.title, path: item.path })
      }
      if (Array.isArray(item?.children)) {
        titles.push(...getTitlesWithPaths(item.children))
      }
    })
    return titles
  }
  return getTitlesWithPaths(MENUITEMS)
})

const uniqueSuggestions = computed(() => {
  const searchLower = search.value.toLowerCase()
  const suggestions = filterSuggestions.value.filter((item) =>
    item.title.toLowerCase().includes(searchLower)
  )
  const uniqueTitles = Array.from(new Set(suggestions.map((item) => item.title.toLowerCase())))
  return uniqueTitles.map((title) => suggestions.find((item) => item.title.toLowerCase() === title))
})

// Tooltip lifecycle
let pop = null

onMounted(() => {
  document.addEventListener('fullscreenchange', fullscreenChanged, { passive: true })
  document.body.addEventListener('click', handleClickOutside, { passive: true })
  pop = new Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]',
  })
})

onUnmounted(() => {
  document.body.removeEventListener('click', handleClickOutside)
  document.removeEventListener('fullscreenchange', fullscreenChanged)
  if (pop) pop.dispose()

  const popovers = document.getElementsByClassName('tooltip')
  Array.from(popovers).forEach((el) => el.remove())
})
</script>
