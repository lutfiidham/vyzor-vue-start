<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/forms/formelements/colorpicker'
import ShowcodeCard from '../../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Color Pickers',
  activepage: 'Color Pickers',
}
</script>

<template>
  <Head title="Color-Picker | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <div class="row">
    <div class="col-xl-6 custom-color-picker">
      <ShowcodeCard
        :code="prism.vue3CircleWithDisabledAlphaColorPicker"
        title="vue3 Circle with Disabled Alpha Color Picker"
      >
        <div class="text-center text-sm-start">
          <ColorPicker
            v-model:pure-color="pureColor"
            shape="circle"
            format="rgb"
            picker-type="chrome"
            use-type="pure"
            :disable-alpha="true"
          />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 custom-color-picker square-colorPicker">
      <ShowcodeCard :code="prism.vue3GradientColorPicker" title="vue3 Gradient Color Picker">
        <div class="text-center text-sm-start">
          <ColorPicker v-model:gradient-color="gradientColor" use-type="both" lang="en" />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard
        :code="prism.vuetifyColorPicker"
        title="Vuetify Color Picker"
        custom-card-body-class="d-flex justify-content-between"
      >
        <div class="row g-3">
          <div class="col">
            <VColorPicker />
          </div>
          <div class="col">
            <VColorPicker hide-canvas show-swatches />
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
