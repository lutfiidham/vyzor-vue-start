<script lang="js" setup>
import * as prism from '@/shared/data/prismCode/ui-elements/tooltips'
import * as tooltipData from '@/shared/data/ui-elements/tooltips'
import * as bootstrap from 'bootstrap'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'
import { onMounted } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Tooltips',
  activepage: 'Tooltips',
}

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  )
})
</script>

<template>
  <Head title="Tootips | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Tooltip Directions" :code="prism.TooltipDirections">
        <div class="btn-list">
          <button
            type="button"
            class="btn btn-primary btn-wave"
            data-bs-toggle="tooltip"
            :data-bs-placement="idx.text"
            :title="`Tooltip on ${idx.text}`"
            v-for="(idx, index) in tooltipData.Tooltipdirtooltip"
            :key="index"
          >
            Tooltip on {{ idx.text }}
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Colored Tooltips" :code="prism.ColoredTooltips">
        <div class="btn-list">
          <button
            type="button"
            :class="`btn btn-${idx.color} btn-wave`"
            data-bs-toggle="tooltip"
            :data-bs-custom-class="`tooltip-${idx.color}`"
            :data-bs-placement="idx.dir"
            :title="`${idx.text} Tooltip`"
            v-for="(idx, index) in tooltipData.Coloredtooltip"
            :key="index"
          >
            {{ idx.text }} Tooltip
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Tooltips on links" :code="prism.TooltipsOnLinks">
        <p class="text-muted mb-0">
          Hover on the link to view the
          <a
            href="javascript:void(0);"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-primary"
            title="Link Tooltip"
            class="text-primary"
            >Tooltip</a
          >
        </p>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="With an SVG's" :code="prism.WithAnSVGs">
        <a
          href="javascript:void(0);"
          data-bs-toggle="tooltip"
          :title="idx.text"
          :data-bs-custom-class="`tooltip-${idx.color}`"
          :class="`me-3 svg-${idx.color}`"
          v-for="(idx, index) in tooltipData.SVGtooltip"
          :key="index"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path :d="idx.class" />
          </svg>
        </a>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Disabled elements" :code="prism.DisabledElements">
        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
          <button class="btn btn-primary" type="button" disabled="">Disabled button</button>
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Tooltip For Images" :code="prism.TooltipForImages">
        <a
          href="javascript:void(0);"
          data-bs-toggle="tooltip"
          title="Alex Carey"
          data-bs-custom-class="tooltip-primary"
          class="avatar avatar-md me-2 online avatar-rounded"
        >
          <BaseImg src="/images/faces/12.jpg" alt="img" />
        </a>
        <a
          href="javascript:void(0);"
          data-bs-toggle="tooltip"
          title="Marina Kai"
          data-bs-custom-class="tooltip-primary"
          class="avatar avatar-lg me-2 online avatar-rounded"
        >
          <BaseImg src="/images/faces/3.jpg" alt="img" />
        </a>
        <a
          href="javascript:void(0);"
          data-bs-toggle="tooltip"
          title="Tim Cook"
          data-bs-custom-class="tooltip-primary"
          class="avatar avatar-xl me-2 offline avatar-rounded"
        >
          <BaseImg src="/images/faces/15.jpg" alt="img" />
        </a>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
