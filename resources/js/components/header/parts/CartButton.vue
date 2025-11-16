<script setup>
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { notificationNotes as initialNotificationNotes } from '@/shared/data/header.js'
import BaseImg from '../../Baseimage/BaseImg.vue'
import 'vue3-perfect-scrollbar/style.css'

const props = defineProps({
  baseUrl: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['cart-updated'])

const cartItems = ref([...initialNotificationNotes])

function removeFromCart(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
  emit('cart-updated', cartItems.value)
}

function decrementQuantity(event) {
  event.preventDefault()
  const input = event.currentTarget.parentElement?.querySelector('input')
  if (input) {
    const unit = Number(input.value)
    if (unit > 1) {
      input.value = String(unit - 1)
    }
  }
}

function incrementQuantity(event) {
  event.preventDefault()
  const input = event.currentTarget.parentElement?.querySelector('input')
  if (input) {
    input.value = String(Number(input.value) + 1)
  }
}
</script>

<template>
  <li class="header-element cart-dropdown dropdown">
    <!-- Start::header-link|dropdown-toggle -->
    <a
      href="javascript:void(0);"
      class="header-link dropdown-toggle"
      data-bs-auto-close="outside"
      data-bs-toggle="dropdown"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z" opacity="0.2" />
        <path
          d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="92"
          cy="204"
          r="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="188"
          cy="204"
          r="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <path
          d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </svg>
      <span id="cart-icon-badge" class="badge bg-primary rounded-pill header-icon-badge">{{
        cartItems.length
      }}</span>
    </a>
    <!-- End::header-link|dropdown-toggle -->
    <!-- Start::main-header-dropdown -->
    <div
      class="main-header-dropdown dropdown-menu dropdown-menu-end"
      data-popper-placement="none"
    >
      <div class="p-3 bg-primary text-fixed-white position-relative z-2">
        <div class="d-flex align-items-center justify-content-between">
          <p class="mb-0 fs-16">
            Cart Items<span
              id="cart-data"
              class="badge bg-warning ms-1 fs-12 rounded-circle"
            >{{ cartItems.length }}</span>
          </p>
          <Link
            :href="`${baseUrl}/demo/dashboards/ecommerce/products/`"
            class="text-fixed-white text-decoration-underline fs-12"
          >
            Continue Shopping <i class="ti ti-arrow-narrow-right" />
          </Link>
        </div>
      </div>
      <div class="dropdown-divider" />
      <ul class="list-unstyled mb-0">
        <PerfectScrollbar id="header-cart-items-scroll">
          <li
            v-for="(item, index) in cartItems"
            :key="index"
            :class="`dropdown-item ${item.liclass}`"
          >
            <div class="d-flex align-items-start cart-dropdown-item gap-3">
              <div class="lh-1">
                <span class="avatar avatar-xl bg-gray-300">
                  <BaseImg :src="item.image" alt="img" />
                </span>
              </div>
              <div class="flex-fill w-75">
                <div class="d-flex align-items-start justify-content-between mb-3">
                  <div class="fs-14 fw-medium w-75">
                    <div class="text-truncate">
                      <Link :href="`${baseUrl}/demo/dashboards/ecommerce/cart/`">
                        {{ item.name }}
                      </Link>
                    </div>
                    <div class="fs-11 text-muted text-truncate">
                      <span>{{ item.description }}</span>
                    </div>
                  </div>
                  <div class="text-end">
                    <a
                      href="javascript:void(0);"
                      class="header-cart-remove dropdown-item-close"
                      @click="removeFromCart(item.id)"
                    ><i class="ri-delete-bin-line" /></a>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="flex-fill">
                    <div class="lh-1 fs-12 mb-1">
                      <span
                        class="text-muted fw-normal d-inline-block text-decoration-line-through"
                      >{{ item.oldprice }}</span><span class="text-success ms-1">25% off</span>
                    </div>
                    <h6 class="fw-medium mb-0">
                      {{ item.newprice }}
                    </h6>
                  </div>
                  <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2">
                    <a
                      href="javascript:void(0);"
                      class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus"
                      @click="decrementQuantity($event)"
                    >
                      <i class="ri-subtract-line" />
                    </a>
                    <input
                      id="product-qty-1"
                      type="text"
                      class="form-control form-control-cart border-0 text-center w-100"
                      aria-label="quantity"
                      :value="item.quantity"
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus"
                      @click="incrementQuantity($event)"
                    >
                      <i class="ri-add-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </PerfectScrollbar>
      </ul>
      <div
        v-if="cartItems.length"
        class="p-3 empty-header-item border-top position-relative z-2"
      >
        <div class="text-center d-grid">
          <Link
            :href="`${baseUrl}/demo/dashboards/ecommerce/checkout/`"
            class="btn btn-primary btn-wave"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
      <div v-if="!cartItems.length" class="p-5 empty-item">
        <div class="text-center">
          <span class="avatar avatar-xl avatar-rounded bg-success-transparent">
            <i class="ti ti-shopping-cart fs-2" />
          </span>
          <h6 class="fw-medium mb-1 mt-3">
            No items in your cart yet
          </h6>
          <span class="mb-3 fw-normal fs-13 d-block">Add some to enjoy a seamless checkout experience! :)</span>
        </div>
      </div>
    </div>
    <!-- End::main-header-dropdown -->
  </li>
</template>
