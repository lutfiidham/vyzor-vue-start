<script setup>
import * as prism from '@/shared/data/prismCode/ui-elements/popover'
import * as popoverData from '@/shared/data/ui-elements/popover'
import { Popover, Tooltip } from 'bootstrap'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../UI/showcodeCard.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { Head } from '@inertiajs/vue3'

let tooltipInstances = []
let popoverInstances = []

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach((el) => {
    if (!Tooltip.getInstance(el)) {
      const tooltip = new Tooltip(el)
      tooltipInstances.push(tooltip)
    }
  })

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  popoverTriggerList.forEach((el) => {
    if (!Popover.getInstance(el)) {
      const popover = new Popover(el)
      popoverInstances.push(popover)
    }
  })
})

onBeforeUnmount(() => {
  tooltipInstances.forEach((instance) => instance.dispose())
  tooltipInstances = []

  popoverInstances.forEach((instance) => instance.dispose())
  popoverInstances = []
})

let dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Popovers',
  activepage: 'Popovers',
}
</script>

<template>
  <Head title="Popovers | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Default Popovers" :code="prism.defaultPopovers">
        <div class="btn-list">
          <a
            tabindex="0"
            class="btn btn-outline-primary btn-wave"
            role="button"
            data-bs-toggle="popover"
            :data-bs-placement="idx.class"
            :title="`Popover ${idx.text} `"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
            v-for="(idx, index) in popoverData.Defaultalerts"
            :key="index"
            >Popover
            {{ idx.text }}
          </a>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard title="Colored Headers" :code="prism.coloredHeaders">
        <div class="btn-list">
          <button
            type="button"
            :class="`btn btn-${idx.color} btn-wave`"
            data-bs-toggle="popover"
            :data-bs-placement="idx.class"
            :data-bs-custom-class="`header-${idx.color1}`"
            title="Color Header"
            :data-bs-content="`Popover with ${idx.color1} header.`"
            v-for="(idx, index) in popoverData.Colorheaderalerts"
            :key="index"
          >
            Header {{ idx.text }}
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Colored Popovers" :code="prism.coloredPopovers">
        <div class="btn-list">
          <button
            type="button"
            :class="`btn btn-${idx.color1} btn-wave`"
            data-bs-toggle="popover"
            :data-bs-placement="idx.class"
            :data-bs-custom-class="`popover-${idx.color1}`"
            title="Color Background"
            :data-bs-content="`Popover with ${idx.text} background.`"
            v-for="(idx, index) in popoverData.Colredalerts"
            :key="index"
          >
            {{ idx.text }}
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Light Popovers" :code="prism.lightPopovers">
        <div class="btn-list">
          <button
            type="button"
            :class="`btn btn-${idx.color1}-light btn-wave`"
            data-bs-toggle="popover"
            :data-bs-placement="idx.class"
            :data-bs-custom-class="`popover-${idx.color1}-light`"
            title="Light Background"
            :data-bs-content="`Popover with light ${idx.text} background.`"
            v-for="(idx, index) in popoverData.Colredalerts"
            :key="index"
          >
            {{ idx.text }}
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard
        title="Dismissible Popovers"
        :code="prism.DismissiblePopovers"
        customCardBodyClass="d-flex flex-wrap justify-content-between"
      >
        <a
          tabindex="0"
          :class="`btn btn-${idx.color} m-1`"
          role="button"
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          :data-bs-placement="idx.class"
          title="Dismissible popover"
          :data-bs-content="`And here's some amazing content. It's very engaging. ${idx.class}?`"
          v-for="(idx, index) in popoverData.Dismissiblealerts"
          :key="index"
          >Popover Dismiss
        </a>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Disabled Popover" :code="prism.disabledPopover">
        <span
          class="d-inline-block"
          tabindex="0"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Disabled popover"
        >
          <button class="btn btn-primary" type="button" disabled>Disabled button</button>
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Icon Popovers" :code="prism.iconPopovers">
        <a
          class="me-4 svg-primary"
          href="javascript:void(0)"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-custom-class="popover-primary only-body"
          data-bs-content="This popover is used to provide details about this icon."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            />
          </svg>
        </a>
        <a
          class="me-4 svg-secondary"
          href="javascript:void(0)"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-custom-class="popover-secondary only-body"
          data-bs-content="This popover is used to provide information about this icon."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
        </a>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
