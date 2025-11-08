<script setup>
import * as radialbarData from '@/shared/data/apexcharts/apexchart-radialbar'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Radialbar Charts',
  activepage: 'Apex Radialbar Charts',
}
</script>

<template>
  <Head title="Radialbar Charts | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Pie Chart</div>
        </div>
        <div class="card-body">
          <div id="radialbar-basic">
            <apexchart
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
          <div class="card-title">Multiple Radialbar Chart</div>
        </div>
        <div class="card-body">
          <div id="radialbar-multiple">
            <apexchart
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
          <div class="card-title">Circle Chart - Custom Angle</div>
        </div>
        <div class="card-body">
          <div id="circle-custom">
            <apexchart
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
          <div class="card-title">Gradient Circle Chart</div>
        </div>
        <div class="card-body">
          <div id="gradient-circle">
            <apexchart
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
          <div class="card-title">Stroked Circular Gauge</div>
        </div>
        <div class="card-body">
          <div id="circular-stroked">
            <apexchart
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
          <div class="card-title">Circle Chart With Image</div>
        </div>
        <div class="card-body">
          <div id="circle-image">
            <apexchart
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
          <div class="card-title">Semi Circular Gauge</div>
        </div>
        <div class="card-body">
          <div id="circular-semi">
            <apexchart
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
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
