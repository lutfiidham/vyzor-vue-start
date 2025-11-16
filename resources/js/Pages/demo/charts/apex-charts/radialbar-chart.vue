<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as radialbarData from '@/shared/data/apexcharts/apexchart-radialbar'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Radialbar Charts',
  activepage: 'Apex Radialbar Charts',
}
</script>

<template>
  <Head title="Radialbar Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Pie Chart
          </div>
        </div>
        <div class="card-body">
          <div id="radialbar-basic">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Pieoptions"
              :series="radialbarData.Pieseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Multiple Radialbar Chart
          </div>
        </div>
        <div class="card-body">
          <div id="radialbar-multiple">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Multiroptions"
              :series="radialbarData.Multirseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Circle Chart - Custom Angle
          </div>
        </div>
        <div class="card-body">
          <div id="circle-custom">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Customoptions"
              :series="radialbarData.Customseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Gradient Circle Chart
          </div>
        </div>
        <div class="card-body">
          <div id="gradient-circle">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Gradientoptions"
              :series="radialbarData.Gradientseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Stroked Circular Gauge
          </div>
        </div>
        <div class="card-body">
          <div id="circular-stroked">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Strokeoptions"
              :series="radialbarData.Storkeseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Circle Chart With Image
          </div>
        </div>
        <div class="card-body">
          <div id="circle-image">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Circleoptions"
              :series="radialbarData.Circleseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Semi Circular Gauge
          </div>
        </div>
        <div class="card-body">
          <div id="circular-semi">
            <Apexchart
              height="300"
              type="radialBar"
              :options="radialbarData.Gaugeoptions"
              :series="radialbarData.Gaugeseries"
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
