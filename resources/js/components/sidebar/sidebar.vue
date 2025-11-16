<script setup>
import { Link, router, usePage } from '@inertiajs/vue3'
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  watchEffect,
} from 'vue'
// Dynamic menu from Inertia shared props
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { MENUITEMS as staticMenuData } from '@/shared/data/sidebar/nav'
import { switcherStore } from '../../../stores/switcher'
import RecursiveMenu from '../../../UI/recursiveMenu.vue'
import BaseImg from '../Baseimage/BaseImg.vue'
import 'vue3-perfect-scrollbar/style.css'

// Combine dynamic menu with static menu based on user role
const menuData = computed(() => {
  const dynamicMenus = page.props.menus || []

  // Deep clean static menu data to ensure all properties exist
  const cleanStaticMenu = (menu) => {
    const cleaned = {
      ...menu,
      active: menu.active || false,
      selected: menu.selected || false,
      dirchange: menu.dirchange || false,
      children: menu.children ? menu.children.map(child => cleanStaticMenu(child)) : [],
    }

    return cleaned
  }

  // Only combine with static menu if user is admin and demo menu is enabled
  if (shouldShowDemoMenu.value) {
    const staticMenuDataClean = staticMenuData.map(menu => cleanStaticMenu(menu))
    const combinedMenus = [...dynamicMenus, ...staticMenuDataClean]

    return combinedMenus
  }
  else {
    // Non-admin users or demo menu disabled only get dynamic menus
    return dynamicMenus
  }
})

const level = 0
const isChild = false
let setMenu = false
let hasParent = false
let hasParentLevel = 0
const WindowPreSize = [window.innerWidth]
const previousUrl = ref('/')
const page = usePage()
const { url } = page
const baseUrl = __BASE_PATH__

// Get current user from page props
const currentUser = computed(() => page.props.auth?.user || null)

// Get current user roles
const userRoles = computed(() => {
  const roles = page.props.auth?.user?.roles
  if (!roles)
    return []

  // Laravel getRoleNames() returns array of strings
  if (Array.isArray(roles)) {
    return roles.filter(role => typeof role === 'string' && role.trim() !== '')
  }

  // If it's an object (like Laravel Collection converted to object)
  if (typeof roles === 'object') {
    return Object.values(roles).filter(role => typeof role === 'string' && role.trim() !== '')
  }

  return []
})

// Get demo menu setting from page props
const showDemoMenu = computed(() => {
  return page.props.settings?.show_demo_menu || false
})

// Check if user has admin-level access (Super Admin or Admin)
const isSuperAdminLevel = computed(() => {
  return userRoles.value.some((role) => {
    if (typeof role === 'string') {
      const roleLower = role.toLowerCase()

      return roleLower === 'super admin'
    }
    const roleName = role.name?.toLowerCase()

    return roleName === 'super admin'
  })
})

// Check if demo menu should be shown (only for admin-level users)
const shouldShowDemoMenu = computed(() => {
  return isSuperAdminLevel.value && showDemoMenu.value
})

// Computed logo link - if on demo pages, link to demo dashboard, else to main dashboard
const logoLink = computed(() => {
  const currentPath = page.url
  const isDemoPage = currentPath.startsWith('/demo')

  return isDemoPage ? `${baseUrl}/demo/dashboards/sales/` : '/dashboard'
})

// Logout handler
function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    router.post('/logout')
  }
}

// Force update counter
const forceUpdateCounter = ref(0)

// Helper function to find and toggle menu by title
function toggleMenuByTitle(title) {
  const findMenu = items => {
    for (const item of items) {
      if (item.title === title) {
        return item
      }
      if (item.children && item.children.length > 0) {
        const found = findMenu(item.children)
        if (found)
          return found
      }
    }

    return null
  }

  const menu = findMenu(menuData.value)
  if (menu) {
    menu.active = !menu.active
    // Force update to trigger re-render
    forceUpdateCounter.value++

    return true
  }

  return false
}

function toggleSubmenu(event, targetObject, menuList = menuData.value, isChildFlag = isChild) {
  const html = document.documentElement
  const element = event.target
  if (
    (html.getAttribute('data-nav-style') == 'icon-hover'
      && html.getAttribute('data-toggled') == 'icon-hover-closed')
    || (html.getAttribute('data-toggled') == 'menu-hover-closed'
      && html.getAttribute('data-nav-style') == 'menu-hover')
  ) {
    return
  }

  // Simple approach: direct toggle
  if (targetObject && targetObject.hasOwnProperty('active')) {
    targetObject.active = !targetObject.active
    // Force update to trigger re-render
    forceUpdateCounter.value++
  }
  if (targetObject?.children && targetObject.active) {
    if (
      html.getAttribute('data-vertical-style') == 'doublemenu'
      && html.getAttribute('data-toggled') != 'double-menu-open'
    ) {
      if (window.innerWidth < 992) {
        html.setAttribute('data-toggled', 'open')
      }
      else {
        html.setAttribute('data-toggled', 'double-menu-open')
      }
    }
  }
  if (
    element
    && html.getAttribute('data-nav-layout') == 'horizontal'
    && (html.getAttribute('data-nav-style') == 'menu-click'
      || html.getAttribute('data-nav-style') == 'icon-click')
  ) {
    const listItem = element.closest('li')
    if (listItem) {
      // Find the first sibling <ul> element
      const siblingUL = listItem.querySelector('ul')
      let outterUlWidth = 0
      let listItemUL = listItem.closest('ul:not(.main-menu)')
      while (listItemUL) {
        listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)')
        if (listItemUL) {
          outterUlWidth += listItemUL.clientWidth
        }
      }
      if (siblingUL) {
        // You've found the sibling <ul> element
        const siblingULRect = listItem.getBoundingClientRect()
        if (html.getAttribute('dir') == 'rtl') {
          if (
            siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0
            && outterUlWidth < window.innerWidth
            && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth
          ) {
            targetObject.dirchange = true
          }
          else {
            targetObject.dirchange = false
          }
        }
        else {
          if (
            outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth
            && siblingULRect.right >= 0
            && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth
          ) {
            targetObject.dirchange = true
          }
          else {
            targetObject.dirchange = false
          }
        }
      }
      setTimeout(() => {
        const computedValue = siblingUL.getBoundingClientRect()
        if (computedValue.bottom > window.innerHeight) {
          siblingUL.style.height = `${window.innerHeight - computedValue.top - 8}px`
          siblingUL.style.overflow = 'auto'
        }
      }, 100)
    }
  }
}

function setAncestorsActive(menuData, targetObject, level) {
  const html = document.documentElement
  const parent = findParent(menuData, targetObject)
  if (parent) {
    parent.active = true
    if (parent.active) {
      html.setAttribute('data-toggled', 'double-menu-open')
    }
    setAncestorsActive(menuData, parent, level)
  }
  else {
    if (html.getAttribute('data-vertical-style') == 'doublemenu' && level == 1) {
      html.setAttribute('data-toggled', 'double-menu-close')
    }
  }
}

function closeOtherMenus(menuData, targetObject) {
  for (const item of menuData) {
    if (item !== targetObject) {
      item.active = false
      if (item.children && item.children.length > 0) {
        closeOtherMenus(item.children, targetObject)
      }
    }
  }
}

function findParent(menuData, targetObject) {
  for (const item of menuData) {
    if (item.children && item.children.includes(targetObject)) {
      return item
    }
    if (item.children && item.children.length > 0) {
      const parent = findParent(item.children, targetObject)
      if (parent) {
        return parent
      }
    }
  }

  return null
}

function HoverToggleInnerMenuFn(event, item) {
  const html = document.documentElement
  const element = event.target
  if (
    element
    && html.getAttribute('data-nav-layout') == 'horizontal'
    && (html.getAttribute('data-nav-style') == 'menu-hover'
      || html.getAttribute('data-nav-style') == 'icon-hover')
  ) {
    const listItem = element.closest('li')
    if (listItem) {
      // Find the first sibling <ul> element
      const siblingUL = listItem.querySelector('ul')
      let outterUlWidth = 0
      let listItemUL = listItem.closest('ul:not(.main-menu)')
      while (listItemUL) {
        listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)')
        if (listItemUL) {
          outterUlWidth += listItemUL.clientWidth
        }
      }
      if (siblingUL) {
        // You've found the sibling <ul> element
        const siblingULRect = listItem.getBoundingClientRect()
        if (html.getAttribute('dir') == 'rtl') {
          if (
            siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0
            && outterUlWidth < window.innerWidth
            && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth
          ) {
            item.dirchange = true
          }
          else {
            item.dirchange = false
          }
        }
        else {
          if (
            outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth
            && siblingULRect.right >= 0
            && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth
          ) {
            item.dirchange = true
          }
          else {
            item.dirchange = false
          }
        }
      }
    }
  }
}

function setSubmenu(event, targetObject, menuList = menuData.value) {
  const html = document.documentElement
  if (
    html.getAttribute('data-nav-style') != 'icon-hover'
    && html.getAttribute('data-nav-style') != 'menu-hover'
  ) {
    if (!event?.ctrlKey) {
      setMenu = true
      for (const item of menuList) {
        if (item === targetObject) {
          item.active = true
          item.selected = true
          setMenuAncestorsActive(item)
        }
        else if (!item.active && !item.selected) {
          item.active = false // Set active to false for items not matching the target
          item.selected = false // Set active to false for items not matching the target
        }
        else {
          removeActiveOtherMenus(item)
        }
        if (item.children && item.children.length > 0) {
          setSubmenu(event, targetObject, item.children)
        }
      }
      setMenu = false
    }
  }
}

function getParentObject(obj, childObject) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      if (
        typeof obj[key] === 'object'
        && JSON.stringify(obj[key]) === JSON.stringify(childObject)
      ) {
        return obj // Return the parent object
      }
      if (typeof obj[key] === 'object') {
        const parentObject = getParentObject(obj[key], childObject)
        if (parentObject !== null) {
          return parentObject
        }
      }
    }
  }

  return null // Object not found
}

function setMenuAncestorsActive(targetObject) {
  const parent = getParentObject(menuData.value, targetObject)
  const html = document.documentElement
  if (parent) {
    if (hasParentLevel > 2) {
      hasParent = true
    }
    parent.active = true
    parent.selected = true
    hasParentLevel += 1
    setMenuAncestorsActive(parent)
  }
  else if (!hasParent) {
    if (html.getAttribute('data-vertical-style') == 'doublemenu') {
      if (window.innerWidth < 992) {
        html.setAttribute('data-toggled', 'close')
      }
      else {
        html.setAttribute('data-toggled', 'double-menu-close')
      }
    }
  }
}

function removeActiveOtherMenus(item) {
  if (item) {
    if (Array.isArray(item)) {
      for (const val of item) {
        val.active = false
        val.selected = false
      }
    }
    item.active = false
    item.selected = false

    if (item.children && item.children.length > 0) {
      removeActiveOtherMenus(item.children)
    }
  }
  else {

  }
}

function closeMenuFn() {
  const closeMenuRecursively = (items) => {
    items?.forEach((item) => {
      item.active = false
      closeMenuRecursively(item.children)
    })
  }
  closeMenuRecursively(menuData.value)
}
const switcher = switcherStore()
function colorthemeFn(value) {
  ;(localStorage.setItem('vyzorcolortheme', value),
  localStorage.removeItem('vyzorbodyBgRGB', value))
  switcher.colorthemeFn(value)
}

function menuResizeFn() {
  WindowPreSize.push(window.innerWidth)
  if (WindowPreSize.length > 2) {
    WindowPreSize.shift()
  }
  if (WindowPreSize.length > 1) {
    if (
      WindowPreSize[WindowPreSize.length - 1] < 992
      && WindowPreSize[WindowPreSize.length - 2] >= 992
    ) {
      // less than 992;
      const html = document.documentElement
      html.setAttribute('data-toggled', 'close')
    }

    if (
      WindowPreSize[WindowPreSize.length - 1] >= 992
      && WindowPreSize[WindowPreSize.length - 2] < 992
    ) {
      const html = document.documentElement
      // greater than 992
      if (html.getAttribute('data-vertical-style') == 'doublemenu') {
        if (document.querySelector('.double-menu-active')) {
          html.setAttribute('data-toggled', 'double-menu-open')
        }
        else {
          html.setAttribute('data-toggled', 'double-menu-close')
        }
      }
      else {
        html.removeAttribute('data-toggled')
      }
    }
  }
}

function mainContentFn() {
  // Used to close the menu in Horizontal and small screen
  const html = document.documentElement
  if (window.innerWidth < 992) {
    html.setAttribute('data-toggled', 'close')
  }
  else if (
    html.getAttribute('data-nav-layout') == 'horizontal'
    || html.getAttribute('data-nav-style') == 'menu-click'
    || html.getAttribute('data-nav-style') == 'icon-click'
  ) {
    closeMenuFn()
  }
}

function leftArrowFn() {
  // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space
  // Used to Slide the menu to Left side
  const slideLeft = document.querySelector('.slide-left')
  const slideRight = document.querySelector('.slide-right')
  const menuNav = document.querySelector('.main-menu')
  const mainContainer1 = document.querySelector('.main-sidebar')
  const marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuNav).marginInlineStart.split('px')[0]),
  )
  const mainContainer1Width = mainContainer1.offsetWidth
  if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
    if (marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
      menuNav.style.marginInlineStart
        = `${Number(menuNav.style.marginInlineStart.split('px')[0])
        + Math.abs(mainContainer1Width)
        }px`
      slideRight.classList.remove('d-none')
    }
    else if (marginRightValue >= 0) {
      menuNav.style.marginInlineStart = '0px'
      slideLeft.classList.add('d-none')
      slideRight.classList.remove('d-none')
    }
    else {
      menuNav.style.marginInlineStart = '0px'
      slideLeft.classList.add('d-none')
      slideRight.classList.remove('d-none')
    }
  }
  else {
    menuNav.style.marginInlineStart = '0px'
    slideLeft.classList.add('d-none')
  }

  const element = document.querySelector('.main-menu > .slide.open')
  const element1 = document.querySelector('.main-menu > .slide.open >ul')
  if (element) {
    element.classList.remove('open')
  }
  if (element1) {
    element1.style.display = 'none'
  }
}

function rightArrowFn() {
  // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space
  // Used to Slide the menu to Right side
  const slideLeft = document.querySelector('.slide-left')
  const slideRight = document.querySelector('.slide-right')
  const menuNav = document.querySelector('.main-menu')
  const mainContainer1 = document.querySelector('.main-sidebar')
  const marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuNav).marginInlineStart.split('px')[0]),
  )
  const check = menuNav.scrollWidth - mainContainer1.offsetWidth
  let mainContainer1Width = mainContainer1.offsetWidth

  if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
    if (Math.abs(check) > Math.abs(marginRightValue)) {
      if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
        mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue)
        slideRight.classList.add('d-none')
      }
      menuNav.style.marginInlineStart
        = `${Number(menuNav.style.marginInlineStart.split('px')[0])
        - Math.abs(mainContainer1Width)
        }px`
      slideLeft.classList.remove('d-none')
    }
  }

  const element = document.querySelector('.main-menu > .slide.open')
  const element1 = document.querySelector('.main-menu > .slide.open >ul')
  if (element) {
    element.classList.remove('open')
  }
  if (element1) {
    element1.style.display = 'none'
  }
}

function checkHoriMenu() {
  const menuNav = document.querySelector('.main-sidebar')
  const mainMenu = document.querySelector('.main-menu')
  const slideLeft = document.querySelector('.slide-left')
  const slideRight = document.querySelector('.slide-right')

  // Show/Hide the arrows
  if (mainMenu && menuNav && slideRight && slideLeft) {
    const marginRightValue = Math.ceil(
      Number(window.getComputedStyle(mainMenu).marginInlineStart.split('px')[0]),
    )
    if (mainMenu.scrollWidth > menuNav.offsetWidth) {
      slideRight?.classList.remove('d-none')
      slideLeft?.classList.add('d-none')
    }
    else {
      slideRight?.classList.add('d-none')
      slideLeft?.classList.add('d-none')
      mainMenu.style.marginLeft = '0px'
      mainMenu.style.marginRight = '0px'
    }
    if (marginRightValue == 0) {
      slideLeft?.classList.add('d-none')
    }
    else {
      slideLeft?.classList.remove('d-none')
    }
  }
}

function handleAttributeChange(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
      const newValue = mutation.target.getAttribute('data-nav-layout')
      if (newValue == 'vertical') {
        let currentPath = window.location.pathname.endsWith('/')
          ? window.location.pathname.slice(0, -1)
          : window.location.pathname
        currentPath = !currentPath ? '/dashboard/crm' : currentPath
        setMenuUsingUrl(currentPath)
      }
      else {
        closeMenuFn()
      }
    }
  }
}

function setMenuUsingUrl(currentPath) {
  hasParent = false
  hasParentLevel = 1
  // Check current url and trigger the setSidemenu method to active the menu.
  const setSubmenuRecursively = (items) => {
    items?.forEach((item) => {
      if (item.path == '') {
        return
      }
      else if (item.path === currentPath) {
        setSubmenu(null, item)
      }
      setSubmenuRecursively(item.children)
    })
  }
  setSubmenuRecursively(menuData.value)
}

const preventpagejump = ref('')
let menuOverflowed = false

function menuscrollFn() {
  const html = document.documentElement
  const navLayout = html.getAttribute('data-nav-layout') == 'horizontal'
  const menuPosition = html.getAttribute('data-menu-position') == 'scrollable'
  const header = document.querySelector('.app-header')?.clientHeight || 0
  window.onscroll = () => {
    if (!menuPosition && preventpagejump.value && navLayout && window.innerWidth >= 992) {
      if (window.scrollY > header) {
        preventpagejump.value.style.height = `${header}px`
        menuOverflowed = true
      }
      else {
        preventpagejump.value.style.height = `${0}px`
        menuOverflowed = false
      }
    }
  }
}

onMounted(() => {
  const currentUrl = url.endsWith('/') ? url.slice(0, -1) : url
  setMenuUsingUrl(currentUrl)
  // Close menu based on html attribute
  const html = document.documentElement
  const navLayout = html.getAttribute('data-nav-layout')
  const navStyle = html.getAttribute('data-nav-style')
  if (navLayout === 'horizontal' || navStyle === 'menu-hover' || navStyle === 'icon-hover') {
    closeMenuFn()
  }
})

// Watch route changes reactively
watchEffect(() => {
  const { url } = usePage()
  // Strip the trailing slash from the URL if present
  let currentPath = url.endsWith('/') ? url.slice(0, -1) : url
  currentPath = currentPath || '/dashboard/ecommerce' // Default fallback
  // Only update the menu if the path has changed
  if (currentPath !== previousUrl.value) {
    setMenuUsingUrl(currentPath)
    previousUrl.value = currentPath
  }
})

onMounted(() => {
  // Adding the menuResize after the component created.
  window.addEventListener('resize', menuResizeFn, {
    passive: true,
  })
  window.addEventListener('scroll', menuscrollFn, {
    passive: true,
  })
  const mainContent = document.querySelector('.main-content')
  // Adding the mainContentFn after the component created.
  if (mainContent) {
    mainContent.addEventListener('click', mainContentFn, {
      passive: true,
    })
  }
  // Used to check on mounting face to close the menu.
  if (window.innerWidth < 992) {
    document.documentElement.setAttribute('data-toggled', 'close')
  }
  else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
    closeMenuFn()
  }

  // Select the target element
  const targetElement = document.documentElement

  // Create a MutationObserver instance
  const observer = new MutationObserver(handleAttributeChange)

  // Configure the observer to watch for attribute changes
  const config = {
    attributes: true,
  }

  // Start observing the target element
  observer.observe(targetElement, config)
})

onBeforeMount(() => {
  window.removeEventListener('resize', menuResizeFn)
})
</script>

<template>
  <div id="responsive-overlay" @click="mainContentFn" />
  <!-- Start::app-sidebar -->
  <aside id="sidebar" class="app-sidebar sticky">
    <!-- Start::main-sidebar-header -->
    <div class="main-sidebar-header">
      <Link :href="logoLink" class="header-logo">
        <BaseImg src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
        <BaseImg src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
        <BaseImg src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
        <BaseImg src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />
      </Link>
    </div>
    <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar -->
    <PerfectScrollbar id="sidebar-scroll" class="main-sidebar">
      <!-- Start::nav -->
      <nav class="main-menu-container nav nav-pills flex-column sub-open">
        <div id="slide-left" class="slide-left" @click="leftArrowFn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#7b8191"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
          </svg>
        </div>
        <ul class="main-menu">
          <li
            v-for="(mainmenuItem, index) in menuData"
            :key="`${mainmenuItem.id || mainmenuItem.title || index}-${forceUpdateCounter}`"
            :class="`${mainmenuItem?.menutitle ? 'slide__category' : ''} ${mainmenuItem?.type == 'link' ? 'slide' : ''} ${mainmenuItem?.type == 'empty' ? 'slide' : ''} ${mainmenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${mainmenuItem?.active ? 'open' : ''} ${mainmenuItem?.selected ? 'active' : ''}`"
          >
            <template v-if="mainmenuItem?.menutitle">
              <span class="category-name">{{ mainmenuItem.menutitle }}</span>
            </template>
            <template v-if="mainmenuItem?.type === 'link'">
              <Link
                :href="mainmenuItem.path"
                class="side-menu__item"
                :class="`${mainmenuItem.selected ? 'active' : ''}`"
              >
                <span v-if="mainmenuItem.icon" v-html="mainmenuItem.icon" />
                <span class="side-menu__label">{{ mainmenuItem.title }}
                  <span v-if="mainmenuItem.badgetxt" v-html="mainmenuItem.badgetxt" />
                </span>
              </Link>
            </template>
            <template v-if="mainmenuItem?.type === 'empty'">
              <a href="javascript:;" class="side-menu__item">
                <span v-if="mainmenuItem.icon" v-html="mainmenuItem.icon" />
                <span class="side-menu__label">{{ mainmenuItem.title }}
                  <span v-if="mainmenuItem.badgetxt" v-html="mainmenuItem.badgetxt" />
                </span>
              </a>
            </template>
            <template v-if="mainmenuItem?.type === 'sub'">
              <RecursiveMenu
                :menu-data="mainmenuItem"
                :toggle-submenu="toggleSubmenu"
                :HoverToggleInnerMenuFn="HoverToggleInnerMenuFn"
                :level="level + 1"
              />
            </template>
          </li>
        </ul>
      </nav>
      <!-- End::nav -->
    </PerfectScrollbar>
    <!-- End::main-sidebar -->
  </aside>
  <!-- End::app-sidebar -->
</template>
