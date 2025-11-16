<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as scatterData from '@/shared/data/apexcharts/apexchart-scatter'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Scatter Charts',
  activepage: 'Apex Scatter Charts',
}
</script>

<template>
  <Head title="Scatter Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Scatter Chart
          </div>
        </div>
        <div class="card-body">
          <div id="scatter-basic">
            <Apexchart
              height="320"
              type="scatter"
              :options="scatterData.Scatterboptions"
              :series="scatterData.Scatterbseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Datetime Scatter Chart
          </div>
        </div>
        <div class="card-body">
          <div id="scatter-datetime">
            <Apexchart
              height="320"
              type="scatter"
              :options="scatterData.Scatterdateoptions"
              :series="scatterData.Scatterdateseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Image Fill Scatter Chart
          </div>
        </div>
        <div class="card-body">
          <div id="scatter-image">
            <Apexchart
              height="320"
              type="scatter"
              :options="scatterData.Scatterfilloptions"
              :series="scatterData.Scatterfillseries"
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
