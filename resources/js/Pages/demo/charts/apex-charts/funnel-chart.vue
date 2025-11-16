<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as funnelData from '@/shared/data/apexcharts/apexchart-funnel'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Funnel Charts',
  activepage: 'Apex Funnel Charts',
}
</script>

<template>
  <Head title="Funnel Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Funnel Chart
          </div>
        </div>
        <div class="card-body">
          <div id="funnel-chart">
            <Apexchart
              height="300"
              type="bar"
              :options="funnelData.Funneloptions"
              :series="funnelData.Funnelseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Pyramid Chart
          </div>
        </div>
        <div class="card-body">
          <div id="pyramid-chart">
            <Apexchart
              height="300"
              type="bar"
              :options="funnelData.Pyramidoptions"
              :series="funnelData.Pyramidseries"
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
