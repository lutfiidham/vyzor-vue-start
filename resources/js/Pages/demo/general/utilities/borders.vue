<script setup>
import * as prism from '@/shared/data/prismCode/utilities/borders'

import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
const dataToPass = {
  title: 'Utilities',
  currentpage: 'Borders',
  activepage: 'Borders',
}
</script>

<template>
  <Head title="Borders | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borders" title="Borders">
        <span class="border border-container"></span>
        <span class="border-top border-container"></span>
        <span class="border-end border-container"></span>
        <span class="border-bottom border-container"></span>
        <span class="border-start border-container"></span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.removeBorders" title="Remove borders">
        <span class="border-0 border-container"></span>
        <span class="border border-top-0 border-container"></span>
        <span class="border border-end-0 border-container"></span>
        <span class="border border-bottom-0 border-container"></span>
        <span class="border border-start-0 border-container"></span>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borderWidths" title="Border Widths">
        <span class="border border-container border-1"></span>
        <span class="border border-container border-2"></span>
        <span class="border border-container border-3"></span>
        <span class="border border-container border-4"></span>
        <span class="border border-container border-5"></span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borderColors" title="Border colors">
        <span class="border border-container border-primary"></span>
        <span class="border border-container border-secondary"></span>
        <span class="border border-container border-success"></span>
        <span class="border border-container border-danger"></span>
        <span class="border border-container border-warning"></span>
        <span class="border border-container border-info"></span>
        <span class="border border-container border-light"></span>
        <span class="border border-container border-dark"></span>
        <span class="border border-container border-white"></span>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borderColorStyling" title="Border color Styling">
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control border-success"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="h4 pb-3 mb-4 text-danger border-bottom border-danger">
          Below Shows Danger Border
        </div>
        <div
          class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1 custom-border"
        >
          Customizing borders with background colors
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borderWithOpacity" title="Border with opacity">
        <div class="border border-success p-2 mb-2">This is default success border</div>
        <div class="border border-success p-2 mb-2 border-opacity-75">
          This is 75% opacity success border
        </div>
        <div class="border border-success p-2 mb-2 border-opacity-50">
          This is 50% opacity success border
        </div>
        <div class="border border-success p-2 mb-2 border-opacity-25">
          This is 25% opacity success border
        </div>
        <div class="border border-success p-2 border-opacity-10">
          This is 10% opacity success border
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.borderRadius" title="Border Radius">
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-top"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-end"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-bottom"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-start"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-circle"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 rounded-pill"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.sizes" title="Sizes">
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-0"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-1"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-2"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-3"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-4"
          alt="..."
        />
        <BaseImg
          src="/images/media/media-58.jpg"
          class="bd-placeholder-img me-1 bd-placeholder-img rounded-5"
          alt="..."
        />
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
