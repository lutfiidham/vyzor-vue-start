<script setup>
import * as prism from '@/shared/data/prismCode/forms/formelements/colorpicker'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../../UI/showcodeCard.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Color Pickers',
  activepage: 'Color Pickers',
}
</script>

<template>
  <Head title="Color-Picker | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <div class="row">
    <div class="col-xl-6 custom-color-picker">
      <ShowcodeCard
        :code="prism.vue3CircleWithDisabledAlphaColorPicker"
        title="vue3 Circle with Disabled Alpha Color Picker"
      >
        <div class="text-center text-sm-start">
          <color-picker
            v-model:pureColor="pureColor"
            shape="circle"
            format="rgb"
            pickerType="chrome"
            useType="pure"
            :disableAlpha="true"
          />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 custom-color-picker square-colorPicker">
      <ShowcodeCard :code="prism.vue3GradientColorPicker" title="vue3 Gradient Color Picker">
        <div class="text-center text-sm-start">
          <color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />
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
            <v-color-picker></v-color-picker>
          </div>
          <div class="col">
            <v-color-picker hide-canvas show-swatches></v-color-picker>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
