<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as polarareaData from '@/shared/data/apexcharts/apexchart-polararea'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Polar Area Charts',
  activepage: 'Apex Polar Area Charts',
}
</script>

<template>
  <Head title="Polar Area Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Polar Area Chart
          </div>
        </div>
        <div class="card-body mx-auto">
          <div id="polararea-basic">
            <Apexchart
              height="300"
              type="polarArea"
              :options="polarareaData.Areaoptions"
              :series="polarareaData.Areaseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Polar Area Monochrome Chart
          </div>
        </div>
        <div class="card-body">
          <div id="polararea-monochrome">
            <Apexchart
              height="300"
              type="polarArea"
              :options="polarareaData.Monooptions"
              :series="polarareaData.Monoseries"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
