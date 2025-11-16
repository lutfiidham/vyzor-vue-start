<script setup>
import { onMounted, ref } from 'vue'
import { switcherStore } from '../../../stores/switcher.js'

const switcher = switcherStore()
const dynamicPrimaryColor = ref('black')

function convertRgbToIndividual(value) {
  // Use a regular expression to extract the numeric values
  const numericValues = value.match(/\d+/g)
  // Join the numeric values with spaces to get the desired format
  return numericValues ? numericValues.join(' ') : ''
}

function themePrimaryFn(value) {
  switcher.themePrimaryFn(value)
}

function primaryColorFn(color) {
  const primaryRgb = convertRgbToIndividual(color)
  themePrimaryFn(primaryRgb)
}

function colorthemeFn(value) {
  switcher.colorthemeFn(value)
  localStorage.setItem('vyzorcolortheme', value)
  if (value === 'dark') {
    localStorage.setItem('vyzorHeader', 'dark')
    localStorage.setItem('vyzorcolortheme', 'dark')
  }
}

function directionFn(value) {
  switcher.directionFn(value)
  localStorage.setItem('vyzordirection', value)
}

function custompageLocalStorage() {
  switcher.custompageLocalStorage()
}

async function reset() {
  await switcher.$reset()
  await switcher.custompageReset()
}

onMounted(() => {
  custompageLocalStorage()
})
</script>

<template>
  <div
    id="switcher-canvas"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom">
      <h5 id="offcanvasRightLabel" class="offcanvas-title">
        Switcher
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body">
      <div class="">
        <p class="switcher-style-head">
          Theme Color Mode:
        </p>
        <div class="row switcher-style">
          <div class="col-4">
            <div class="form-check switch-select">
              <label class="form-check-label" for="switcher-light-theme"> Light </label>
              <input
                id="switcher-light-theme"
                :checked="switcher.colortheme == 'light' ? true : false"
                class="form-check-input"
                type="radio"
                name="theme-style"
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
        <div class="row switcher-style">
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
      <div class="theme-colors">
        <p class="switcher-style-head">
          Theme Primary:
        </p>
        <div class="d-flex align-items-center switcher-style">
          <div class="form-check switch-select me-3">
            <input
              id="switcher-primary"
              class="form-check-input color-input color-primary-1"
              type="radio"
              name="theme-primary"
              :checked="switcher.themePrimary == '42 ,16, 164' ? true : false"
              @click="themePrimaryFn('42 ,16, 164')"
            >
          </div>
          <div class="form-check switch-select me-3">
            <input
              id="switcher-primary1"
              class="form-check-input color-input color-primary-2"
              type="radio"
              name="theme-primary"
              :checked="switcher.themePrimary == '125 ,0, 189' ? true : false"
              @click="themePrimaryFn('125 ,0, 189')"
            >
          </div>
          <div class="form-check switch-select me-3">
            <input
              id="switcher-primary2"
              class="form-check-input color-input color-primary-3"
              type="radio"
              name="theme-primary"
              :checked="switcher.themePrimary == '4, 118, 141' ? true : false"
              @click="themePrimaryFn('4, 118, 141')"
            >
          </div>
          <div class="form-check switch-select me-3">
            <input
              id="switcher-primary3"
              class="form-check-input color-input color-primary-4"
              type="radio"
              name="theme-primary"
              :checked="switcher.themePrimary == '138, 0, 32' ? true : false"
              @click="themePrimaryFn('138, 0, 32')"
            >
          </div>
          <div class="form-check switch-select me-3">
            <input
              id="switcher-primary4"
              class="form-check-input color-input color-primary-5"
              type="radio"
              name="theme-primary"
              :checked="switcher.themePrimary == '9 ,124, 103' ? true : false"
              @click="themePrimaryFn('9 ,124, 103')"
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
      <div>
        <p class="switcher-style-head">
          reset:
        </p>
        <div class="text-center">
          <button id="reset-all" class="btn btn-danger mt-3" @click="reset()">
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
