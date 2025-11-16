<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as boxplotData from '@/shared/data/apexcharts/apexchart-boxplot'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Boxplot Charts',
  activepage: 'Apex Boxplot Charts',
}
</script>

<template>
  <Head title="Boxplot Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Boxplot Chart
          </div>
        </div>
        <div class="card-body">
          <div id="boxplot-basic">
            <Apexchart
              height="320"
              type="boxPlot"
              :options="boxplotData.Boxplotoptions"
              :series="boxplotData.Boxplotseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Boxplot With Scatter Chart
          </div>
        </div>
        <div class="card-body">
          <div id="boxplot-basic">
            <Apexchart
              height="320"
              type="boxPlot"
              :options="boxplotData.Boxplotsoptions"
              :series="boxplotData.Boxplotsseries"
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
