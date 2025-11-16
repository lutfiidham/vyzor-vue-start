<script setup>
import { Tooltip } from 'bootstrap'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import { MENUITEMS } from '@/shared/data/sidebar/nav'
import { switcherStore } from '../../../stores/switcher'
import BaseImg from '../Baseimage/BaseImg.vue'
// Reactive state and refs
let switcher = reactive(switcherStore())
const dynamicPrimaryColor = ref('black')
const dynamicBackgroundColor = ref('black')
const themePrimarySelected = ref('')
const themeBackgroundStr = ref('')

// themePrimaryFn: Computed getter/setter
const themePrimaryFn = computed({
  get() {
    return themePrimarySelected.value
  },
  set(value) {
    themePrimarySelected.value = value
    switcher.themePrimaryFn(value)
  },
})

// themeBackgroundFn: Computed getter/setter
const themeBackgroundFn = computed({
  get() {
    return themeBackgroundStr.value
  },
  set(value) {
    themeBackgroundStr.value = value
    localStorage.removeItem('vyzorHeader')
    localStorage.removeItem('vyzorMenu')

    const parts = value.split(',').map(s => s.trim())
    if (parts.length === 6) {
      const val1 = parts.slice(0, 3).join(',')
      const val2 = parts.slice(3).join(',')
      switcher.themeBackgroundFn(val1, val2)
    }
    else {
      console.warn('Invalid format:', value)
    }
  },
})

function primaryColorFn(color) {
  const primaryRgb = convertRgbToIndividual(color)
  switcher.themePrimaryFn(primaryRgb)
}

function dynamicBackgroundColorFn(color) {
  const bgRgb = convertRgbToIndividual(color)
  const bgRgb2 = convertRgbToIndividual(color)
  const bg1Update = bgRgb.split(', ').join(', ')
  const bg2Update = bgRgb2.split(', ')
  bg2Update[0] = Number(bg2Update[0]) + 14
  bg2Update[1] = Number(bg2Update[1]) + 14
  bg2Update[2] = Number(bg2Update[2]) + 14
  switcher.themeBackgroundFn(bg1Update, bg2Update.join(', '))
}

function convertRgbToIndividual(value) {
  // Use a regular expression to extract the numeric values
  const numericValues = value.match(/\d+/g)
  // Join the numeric values with spaces to get the desired format
  return numericValues.join(', ')
}

function colorthemeFn(value) {
  switcher.colorthemeFn(value)

  localStorage.removeItem('vyzorbodylightRGB')
  localStorage.removeItem('vyzorbodyBgRGB')
  localStorage.setItem('vyzorcolortheme', value)
  if (value == 'dark') {
    localStorage.setItem('vyzorMenu', 'dark')
    localStorage.setItem('vyzorHeader', 'dark')
    themeBackgroundStr.value = ''
  }
  else {
    localStorage.removeItem('vyzorHeader')
    localStorage.removeItem('vyzorMenu')
    themeBackgroundStr.value = ''
  }
}

function directionFn(value) {
  switcher.directionFn(value)
  localStorage.setItem('vyzordirection', value)
}

function navigationStylesFn(value) {
  switcher.navigationStylesFn(value)
  localStorage.setItem('vyzornavstyles', value)
}

function closeMenuFn() {
  const closeMenuRecursively = (items) => {
    items?.forEach((item) => {
      item.active = false
      closeMenuRecursively(item.children)
    })
  }
  closeMenuRecursively(MENUITEMS)
}

function menuStylesFn(value) {
  switcher.menuStylesFn(value)
  localStorage.setItem('vyzormenuStyles', value)
  if (value == 'menu-hover' || value == 'icon-hover') {
    closeMenuFn()
  }
}

function layoutStylesFn(value) {
  switcher.layoutStylesFn(value)
  localStorage.setItem('vyzorverticalstyles', value)
  if (value == 'horizontal') {
    closeMenuFn()
  }
}

function pageStylesFn(value) {
  switcher.pageStylesFn(value)
  localStorage.setItem('vyzorpageStyle', value)
}

function widthStylesFn(value) {
  switcher.widthStylesFn(value)
  localStorage.setItem('vyzorwidthStyles', value)
}

function menuPositionFn(value) {
  switcher.menuPositionFn(value)
  localStorage.setItem('vyzormenuposition', value)
}

function headerPositionFn(value) {
  switcher.headerPositionFn(value)
  localStorage.setItem('vyzorheaderposition', value)
}

function menuColorFn(value) {
  switcher.menuColorFn(value)
  localStorage.setItem('vyzorMenu', value)
}

function headerColorFn(value) {
  switcher.headerColorFn(value)
  localStorage.setItem('vyzorHeader', value)
}

function backgroundImageFn(value) {
  switcher.backgroundImageFn(value)
  localStorage.setItem('vyzorbgimg', value)
}

function reset() {
  switcher.$reset()
  switcher.reset()
  themePrimarySelected.value = ''
  themeBackgroundStr.value = ''
}

function retrieveFromLocalStorage() {
  switcher.retrieveFromLocalStorage()
}

onMounted(() => {
  switcher = switcherStore()
  switcher.themePrimaryStorage()
  switcher.themeBackgroundStorage()
  themePrimarySelected.value = switcher.themePrimary
  themeBackgroundStr.value = switcher.themeBackground
  const pop = new Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]',
  })
})

onUnmounted(() => {
  const popovers = document.getElementsByClassName('tooltip')
  Array.from(popovers).forEach((item) => {
    item.remove()
  })
})
</script>

<template>
  <!-- Start Switcher -->
  <div
    id="switcher-canvas"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom d-block p-0">
      <div class="d-flex align-items-center justify-content-between p-3">
        <h5 id="offcanvasRightLabel" class="offcanvas-title text-default">
          Switcher
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <nav class="border-top border-block-start-dashed">
        <div id="switcher-main-tab" class="nav nav-tabs nav-justified" role="tablist">
          <button
            id="switcher-home-tab"
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#switcher-home"
            type="button"
            role="tab"
            aria-controls="switcher-home"
            aria-selected="true"
          >
            Theme Styles
          </button>
          <button
            id="switcher-profile-tab"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#switcher-profile"
            type="button"
            role="tab"
            aria-controls="switcher-profile"
            aria-selected="false"
          >
            Theme Colors
          </button>
        </div>
      </nav>
    </div>
    <div class="offcanvas-body">
      <div id="nav-tabContent" class="tab-content">
        <div
          id="switcher-home"
          class="tab-pane fade show active border-0"
          role="tabpanel"
          aria-labelledby="switcher-home-tab"
          tabindex="0"
        >
          <div class="">
            <p class="switcher-style-head">
              Theme Color Mode:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-light-theme"> Light </label>
                  <input
                    id="switcher-light-theme"
                    class="form-check-input"
                    type="radio"
                    name="theme-style"
                    :checked="switcher.colortheme == 'light' ? true : false"
                    @click="colorthemeFn('light')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-dark-theme"> Dark </label>
                  <input
                    id="switcher-dark-theme"
                    class="form-check-input"
                    type="radio"
                    name="theme-style"
                    :checked="switcher.colortheme == 'dark' ? true : false"
                    @click="colorthemeFn('dark')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Directions:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-ltr"> LTR </label>
                  <input
                    id="switcher-ltr"
                    class="form-check-input"
                    type="radio"
                    name="direction"
                    :checked="switcher.direction == 'ltr' ? true : false"
                    @click="directionFn('ltr')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-rtl"> RTL </label>
                  <input
                    id="switcher-rtl"
                    class="form-check-input"
                    type="radio"
                    name="direction"
                    :checked="switcher.direction == 'rtl' ? true : false"
                    @click="directionFn('rtl')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Navigation Styles:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-vertical"> Vertical </label>
                  <input
                    id="switcher-vertical"
                    class="form-check-input"
                    type="radio"
                    name="navigation-style"
                    :checked="switcher.navigationStyles == 'vertical' ? true : false"
                    @click="navigationStylesFn('vertical')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-horizontal"> Horizontal </label>
                  <input
                    id="switcher-horizontal"
                    class="form-check-input"
                    type="radio"
                    name="navigation-style"
                    :checked="switcher.navigationStyles == 'horizontal' ? true : false"
                    @click="navigationStylesFn('horizontal')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="navigation-menu-styles">
            <p class="switcher-style-head">
              Vertical & Horizontal Menu Styles:
            </p>
            <div class="row switcher-style gx-0 pb-2 gy-2">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-menu-click"> Menu Click </label>
                  <input
                    id="switcher-menu-click"
                    class="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    :checked="switcher.menuStyles == 'menu-click' ? true : false"
                    @click="menuStylesFn('menu-click')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-menu-hover"> Menu Hover </label>
                  <input
                    id="switcher-menu-hover"
                    class="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    :checked="switcher.menuStyles == 'menu-hover' ? true : false"
                    @click="menuStylesFn('menu-hover')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-icon-click"> Icon Click </label>
                  <input
                    id="switcher-icon-click"
                    class="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    :checked="switcher.menuStyles == 'icon-click' ? true : false"
                    @click="menuStylesFn('icon-click')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-icon-hover"> Icon Hover </label>
                  <input
                    id="switcher-icon-hover"
                    class="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    :checked="switcher.menuStyles == 'icon-hover' ? true : false"
                    @click="menuStylesFn('icon-hover')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sidemenu-layout-styles">
            <p class="switcher-style-head">
              Sidemenu Layout Styles:
            </p>
            <div class="row switcher-style gx-0 pb-2 gy-2">
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-default-menu"> Default Menu </label>
                  <input
                    id="switcher-default-menu"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'default-menu' ? true : false"
                    @click="layoutStylesFn('default-menu')"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-closed-menu"> Closed Menu </label>
                  <input
                    id="switcher-closed-menu"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'closed-menu' ? true : false"
                    @click="layoutStylesFn('closed-menu')"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-icontext-menu"> Icon Text </label>
                  <input
                    id="switcher-icontext-menu"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'icontext-menu' ? true : false"
                    @click="layoutStylesFn('icontext-menu')"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-icon-overlay"> Icon Overlay </label>
                  <input
                    id="switcher-icon-overlay"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'icon-overlay' ? true : false"
                    @click="layoutStylesFn('icon-overlay')"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-detached"> Detached </label>
                  <input
                    id="switcher-detached"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'detached' ? true : false"
                    @click="layoutStylesFn('detached')"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-double-menu"> Double Menu </label>
                  <input
                    id="switcher-double-menu"
                    class="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    :checked="switcher.layoutStyles == 'double-menu' ? true : false"
                    @click="layoutStylesFn('double-menu')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Page Styles:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-xl-3 col-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-regular"> Regular </label>
                  <input
                    id="switcher-regular"
                    class="form-check-input"
                    type="radio"
                    name="page-styles"
                    :checked="switcher.pageStyles == 'regular' ? true : false"
                    @click="pageStylesFn('regular')"
                  >
                </div>
              </div>
              <div class="col-xl-3 col-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-classic"> Classic </label>
                  <input
                    id="switcher-classic"
                    class="form-check-input"
                    type="radio"
                    name="page-styles"
                    :checked="switcher.pageStyles == 'classic' ? true : false"
                    @click="pageStylesFn('classic')"
                  >
                </div>
              </div>
              <div class="col-xl-3 col-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-modern"> Modern </label>
                  <input
                    id="switcher-modern"
                    class="form-check-input"
                    type="radio"
                    name="page-styles"
                    :checked="switcher.pageStyles == 'modern' ? true : false"
                    @click="pageStylesFn('modern')"
                  >
                </div>
              </div>
              <div class="col-xl-3 col-6">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-flat"> Flat </label>
                  <input
                    id="switcher-modern"
                    class="form-check-input"
                    type="radio"
                    name="page-styles"
                    :checked="switcher.pageStyles == 'flat' ? true : false"
                    @click="pageStylesFn('flat')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Layout Width Styles:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-default-width"> Default </label>
                  <input
                    id="switcher-full-width"
                    class="form-check-input"
                    type="radio"
                    name="layout-width"
                    :checked="switcher.widthStyles == 'default' ? true : false"
                    @click="widthStylesFn('default')"
                  >
                </div>
              </div>
              <div class="col-5">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-full-width"> Full Width </label>
                  <input
                    id="switcher-full-width"
                    class="form-check-input"
                    type="radio"
                    name="layout-width"
                    :checked="switcher.widthStyles == 'fullwidth' ? true : false"
                    @click="widthStylesFn('full-width')"
                  >
                </div>
              </div>
              <div class="col-3">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-boxed"> Boxed </label>
                  <input
                    id="switcher-boxed"
                    class="form-check-input"
                    type="radio"
                    name="layout-width"
                    :checked="switcher.widthStyles == 'boxed' ? true : false"
                    @click="widthStylesFn('boxed')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Menu Positions:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-menu-fixed"> Fixed </label>
                  <input
                    id="switcher-menu-fixed"
                    class="form-check-input"
                    type="radio"
                    name="menu-positions"
                    :checked="switcher.menuPosition == 'fixed' ? true : false"
                    @click="menuPositionFn('fixed')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-menu-scroll"> Scrollable </label>
                  <input
                    id="switcher-menu-scroll"
                    class="form-check-input"
                    type="radio"
                    name="menu-positions"
                    :checked="switcher.menuPosition == 'scrollable' ? true : false"
                    @click="menuPositionFn('scrollable')"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">
              Header Positions:
            </p>
            <div class="row switcher-style gx-0">
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-header-fixed"> Fixed </label>
                  <input
                    id="switcher-header-fixed"
                    class="form-check-input"
                    type="radio"
                    name="header-positions"
                    :checked="switcher.headerPosition == 'fixed' ? true : false"
                    @click="headerPositionFn('fixed')"
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-check switch-select">
                  <label class="form-check-label" for="switcher-header-scroll"> Scrollable </label>
                  <input
                    id="switcher-header-scroll"
                    class="form-check-input"
                    type="radio"
                    name="header-positions"
                    :checked="switcher.headerPosition == 'scrollable' ? true : false"
                    @click="headerPositionFn('scrollable')"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="switcher-profile"
          class="tab-pane fade border-0"
          role="tabpanel"
          aria-labelledby="switcher-profile-tab"
          tabindex="0"
        >
          <div>
            <div class="theme-colors">
              <p class="switcher-style-head">
                Menu Colors:
              </p>
              <div class="d-flex switcher-style pb-2">
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-menu-light"
                    class="form-check-input color-input color-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Light Menu"
                    type="radio"
                    name="menu-colors"
                    :checked="switcher.menuColor == 'light' ? true : false"
                    @click="menuColorFn('light')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-menu-dark"
                    title="Dark Menu"
                    type="radio"
                    name="menu-colors"
                    :checked="switcher.menuColor == 'dark' ? true : false"
                    @click="menuColorFn('dark')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-menu-primary"
                    title="Color Menu"
                    type="radio"
                    name="menu-colors"
                    :checked="switcher.menuColor == 'color' ? true : false"
                    @click="menuColorFn('color')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-gradient"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-menu-gradient"
                    title="Gradient Menu"
                    type="radio"
                    name="menu-colors"
                    :checked="switcher.menuColor == 'gradient' ? true : false"
                    @click="menuColorFn('gradient')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-transparent"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-menu-transparent"
                    title="Transparent Menu"
                    type="radio"
                    name="menu-colors"
                    :checked="switcher.menuColor == 'transparent' ? true : false"
                    @click="menuColorFn('transparent')"
                  >
                </div>
              </div>
              <div class="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Menu dynamically change from below Theme Primary
                color picker
              </div>
            </div>
            <div class="theme-colors">
              <p class="switcher-style-head">
                Header Colors:
              </p>
              <div class="d-flex switcher-style pb-2">
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-header-light"
                    title="Light Header"
                    type="radio"
                    name="header-colors"
                    :checked="switcher.headerColor == 'light' ? true : false"
                    @click="headerColorFn('light')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-header-dark"
                    title="Dark Header"
                    type="radio"
                    name="header-colors"
                    :checked="switcher.headerColor == 'dark' ? true : false"
                    @click="headerColorFn('dark')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-header-primary"
                    title="Color Header"
                    type="radio"
                    name="header-colors"
                    :checked="switcher.headerColor == 'color' ? true : false"
                    @click="headerColorFn('color')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-gradient"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-header-gradient"
                    title="Gradient Header"
                    type="radio"
                    name="header-colors"
                    :checked="switcher.headerColor == 'gradient' ? true : false"
                    @click="headerColorFn('gradient')"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    class="form-check-input color-input color-transparent"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="switcher-header-transparent"
                    title="Transparent Header"
                    type="radio"
                    name="header-colors"
                    :checked="switcher.headerColor == 'transparent' ? true : false"
                    @click="headerColorFn('transparent')"
                  >
                </div>
              </div>
              <div class="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Header dynamically change from below Theme Primary
                color picker
              </div>
            </div>
            <div class="theme-colors">
              <p class="switcher-style-head">
                Theme Primary:
              </p>
              <div class="d-flex align-items-center switcher-style">
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-primary"
                    v-model="themePrimaryFn"
                    class="form-check-input color-input color-primary-1"
                    type="radio"
                    name="theme-primary"
                    value="42 ,16, 164"
                    :checked="themePrimaryFn == '42 ,16, 164'"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-primary1"
                    v-model="themePrimaryFn"
                    class="form-check-input color-input color-primary-2"
                    type="radio"
                    name="theme-primary"
                    value="125 ,0, 189"
                    :checked="themePrimaryFn == '125 ,0, 189'"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-primary2"
                    v-model="themePrimaryFn"
                    class="form-check-input color-input color-primary-3"
                    type="radio"
                    name="theme-primary"
                    value="4, 118, 141"
                    :checked="themePrimaryFn == '4, 118, 141'"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-primary3"
                    v-model="themePrimaryFn"
                    class="form-check-input color-input color-primary-4"
                    type="radio"
                    name="theme-primary"
                    value="138, 0, 32"
                    :checked="themePrimaryFn == '138, 0, 32'"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-primary4"
                    v-model="themePrimaryFn"
                    class="form-check-input color-input color-primary-5"
                    type="radio"
                    name="theme-primary"
                    value="9 ,124, 103"
                    :checked="themePrimaryFn == '9 ,124, 103'"
                  >
                </div>
                <div class="form-check switch-select ps-0 mt-1 color-primary-light">
                  <ColorPicker
                    v-model:dynamic-primary-color="dynamicPrimaryColor"
                    shape="circle"
                    format="rgb"
                    picker-type="chrome"
                    use-type="pure"
                    :disable-alpha="true"
                    @update:pure-color="primaryColorFn"
                  />
                </div>
              </div>
            </div>
            <div class="theme-colors">
              <p class="switcher-style-head">
                Theme Background:
              </p>
              <div class="d-flex align-items-center switcher-style">
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-background"
                    v-model="themeBackgroundFn"
                    class="form-check-input color-input color-bg-1"
                    type="radio"
                    name="theme-background"
                    value="0,8,52,14,22,66"
                    :checked="switcher.themeBackground == `0,8,52,14,22,66`"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-background1"
                    v-model="themeBackgroundFn"
                    class="form-check-input color-input color-bg-2"
                    type="radio"
                    value="58,0,109,72,14,123"
                    :checked="switcher.themeBackground == `58,0,109,72,14,123`"
                    name="theme-background"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-background2"
                    v-model="themeBackgroundFn"
                    value="0,59,70,14,73,84"
                    class="form-check-input color-input color-bg-3"
                    type="radio"
                    :checked="switcher.themeBackground == `0,59,70,14,73,84`"
                    name="theme-background"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-background3"
                    v-model="themeBackgroundFn"
                    value="65,0,0,79,14,14"
                    class="form-check-input color-input color-bg-4"
                    type="radio"
                    :checked="switcher.themeBackground == `65,0,0,79,14,14`"
                    name="theme-background"
                  >
                </div>
                <div class="form-check switch-select me-3">
                  <input
                    id="switcher-background4"
                    v-model="themeBackgroundFn"
                    value="1,77,46,15,91,60"
                    class="form-check-input color-input color-bg-5"
                    type="radio"
                    :checked="switcher.themeBackground == `1,77,46,15,91,60`"
                    name="theme-background"
                  >
                </div>
                <div
                  class="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent"
                >
                  <ColorPicker
                    v-model="dynamicBackgroundColor"
                    shape="circle"
                    format="rgb"
                    picker-type="chrome"
                    use-type="pure"
                    :disable-alpha="true"
                    @update:pure-color="dynamicBackgroundColorFn"
                  >
                    <i class="icon">ICON_HERE</i>
                  </ColorPicker>
                </div>
              </div>
            </div>
            <div class="menu-image mb-3">
              <p class="switcher-style-head">
                Menu With Background Image:
              </p>
              <div class="d-flex flex-wrap align-items-center switcher-style">
                <div class="form-check switch-select menu-img-select m-2">
                  <input
                    id="switcher-bg-img"
                    class="form-check-input bgimage-input bg-img1"
                    type="radio"
                    name="theme-background"
                    :checked="switcher.backgroundImage == 'bgimg1' ? true : false"
                    @click="backgroundImageFn('bgimg1')"
                  >
                  <div class="bg-img-container">
                    <BaseImg src="/images/menu-bg-images/bg-img1.jpg" alt="" />
                  </div>
                </div>
                <div class="form-check switch-select menu-img-select m-2">
                  <input
                    id="switcher-bg-img1"
                    class="form-check-input bgimage-input bg-img2"
                    type="radio"
                    name="theme-background"
                    :checked="switcher.backgroundImage == 'bgimg2' ? true : false"
                    @click="backgroundImageFn('bgimg2')"
                  >
                  <div class="bg-img-container">
                    <BaseImg src="/images/menu-bg-images/bg-img2.jpg" alt="" />
                  </div>
                </div>
                <div class="form-check switch-select menu-img-select m-2">
                  <input
                    id="switcher-bg-img2"
                    class="form-check-input bgimage-input bg-img3"
                    type="radio"
                    name="theme-background"
                    :checked="switcher.backgroundImage == 'bgimg3' ? true : false"
                    @click="backgroundImageFn('bgimg3')"
                  >
                  <div class="bg-img-container">
                    <BaseImg src="/images/menu-bg-images/bg-img3.jpg" alt="" />
                  </div>
                </div>
                <div class="form-check switch-select menu-img-select m-2">
                  <input
                    id="switcher-bg-img3"
                    class="form-check-input bgimage-input bg-img4"
                    type="radio"
                    name="theme-background"
                    :checked="switcher.backgroundImage == 'bgimg4' ? true : false"
                    @click="backgroundImageFn('bgimg4')"
                  >
                  <div class="bg-img-container">
                    <BaseImg src="/images/menu-bg-images/bg-img4.jpg" alt="" />
                  </div>
                </div>
                <div class="form-check switch-select menu-img-select m-2">
                  <input
                    id="switcher-bg-img4"
                    class="form-check-input bgimage-input bg-img5"
                    type="radio"
                    name="theme-background"
                    :checked="switcher.backgroundImage == 'bgimg5' ? true : false"
                    @click="backgroundImageFn('bgimg5')"
                  >
                  <div class="bg-img-container">
                    <BaseImg src="/images/menu-bg-images/bg-img5.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between canvas-footer flex-wrap">
          <a
            id="reset-all"
            href="javascript:void(0);"
            class="btn btn-danger m-1 w-100"
            @click="reset()"
          >Reset</a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Switcher -->
</template>
