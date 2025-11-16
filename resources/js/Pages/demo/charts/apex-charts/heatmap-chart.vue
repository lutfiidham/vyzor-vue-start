<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as heatmapData from '@/shared/data/apexcharts/apexchart-heatmap'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Heatmap Charts',
  activepage: 'Apex Heatmap Charts',
}
</script>

<template>
  <Head title="Heatmap Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Heatmap Chart
          </div>
        </div>
        <div class="card-body">
          <div id="heatmap-basic">
            <Apexchart
              height="350"
              type="heatmap"
              :options="heatmapData.Heatboptions"
              :series="heatmapData.Heatbseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Multi Series Heatmap Chart
          </div>
        </div>
        <div class="card-body">
          <div id="heatmap-multiseries">
            <Apexchart
              height="350"
              type="heatmap"
              :options="heatmapData.Heatmultioptions"
              :series="heatmapData.Heatmultiseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Color Range Heatmap Chart
          </div>
        </div>
        <div class="card-body">
          <div id="heatmap-colorrange">
            <Apexchart
              height="350"
              type="heatmap"
              :options="heatmapData.Heatrangeoptions"
              :series="heatmapData.Heatrangeseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Heatmap Range Without Shades
          </div>
        </div>
        <div class="card-body">
          <div id="heatmap-range">
            <Apexchart
              height="350"
              type="heatmap"
              :options="heatmapData.Heatshadeoptions"
              :series="heatmapData.Heatshadeseries"
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
