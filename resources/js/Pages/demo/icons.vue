<script setup>
import { Head } from '@inertiajs/vue3'
import * as bootstrap from 'bootstrap'
import { onMounted } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as iconData from '@/shared/data/icon'

const dataToPass = {
  title: 'Icons',
  currentpage: 'Icons',
  activepage: 'Icons',
}

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl, {
      animation: true,
      trigger: 'hover',
    })
  })
})
</script>

<template>
  <Head title="Icons | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Bootstrap Icons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://icons.getbootstrap.com/" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.Bootstrapicons"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="bi bi-arrow-left-circle"
            >
              <i :class="`bi bi-${idx.text}`" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Remix Icons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://remixicon.com/" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="ri-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.Remixicons"
              :key="index"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="ri-home-line"
            >
              <i :class="idx.text" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Feather Icons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://feathericons.com/" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.Feathericons"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="fe fe-activity"
            >
              <i :class="`fe fe-${idx.text}`" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tabler Icons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://tabler-icons.io/" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.Tablericons"
              :key="index"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="ti ti-brand-tabler"
            >
              <i :class="`ti ti-${idx.text}`" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line Awesome Icons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://icons8.com/line-awesome" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="las la-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.LineAwesomeicons"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="las la-bell"
            >
              <i :class="`las la-${idx.text}`" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Boxicons
          </div>
        </div>
        <div class="card-body">
          <p class="mb-1">
            Simply beautiful open source icons. For more info
            <a href="https://boxicons.com/" target="_blank" class="text-primary">click here</a>.
          </p>
          <p class="mb-4">
            <code>&lt;i class="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code>
          </p>
          <ul class="icons-list list-unstyled">
            <li
              v-for="(idx, index) in iconData.Boxicons"
              :key="index"
              class="icons-list-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="bx bx-home"
            >
              <i :class="`bx bx-${idx.text}`" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
