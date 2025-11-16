<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as radarData from '@/shared/data/apexcharts/apexchart-radar'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Radar Charts',
  activepage: 'Apex Radar Charts',
}
</script>

<template>
  <Head title="Radar Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Radar Chart
          </div>
        </div>
        <div class="card-body">
          <div id="radar-basic">
            <Apexchart
              height="300"
              type="radar"
              :options="radarData.Radaroptions"
              :series="radarData.Radarseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Radar Chart-Multiple Series
          </div>
        </div>
        <div class="card-body">
          <div id="radar-multiple">
            <Apexchart
              height="300"
              type="radar"
              :options="radarData.Multioptions"
              :series="radarData.Multiseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Radar Chart Polygon Fill
          </div>
        </div>
        <div class="card-body">
          <div id="radar-polygon">
            <Apexchart
              height="300"
              type="radar"
              :options="radarData.Polygonoptions"
              :series="radarData.Ploygonseries"
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
