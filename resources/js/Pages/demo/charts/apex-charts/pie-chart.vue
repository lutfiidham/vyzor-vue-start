<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as pieData from '@/shared/data/apexcharts/apexchart-pie'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Pie Charts',
  activepage: 'Apex Pie Charts',
}
</script>

<template>
  <Head title="Pie Charts | Vyzor - Laravel & Vue " />
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
          <div id="pie-basic">
            <Apexchart
              height="300"
              type="pie"
              :options="pieData.Basicpieoptions"
              :series="pieData.Basicpieseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Simple Donut Chart
          </div>
        </div>
        <div class="card-body">
          <div id="donut-simple">
            <Apexchart
              height="300"
              type="donut"
              :options="pieData.Donutoptions"
              :series="pieData.Donutseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Updating Donut Chart
          </div>
        </div>
        <div class="card-body">
          <div id="donut-update">
            <Apexchart
              height="300"
              type="donut"
              :options="pieData.Updatedoptions"
              :series="pieData.Updatedseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Monochrome Pie Chart
          </div>
        </div>
        <div class="card-body">
          <div id="pie-monochrome">
            <Apexchart
              height="300"
              type="pie"
              :options="pieData.Piemonooptions"
              :series="pieData.Piemonoseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Gradient Donut Chart
          </div>
        </div>
        <div class="card-body">
          <div id="donut-gradient">
            <Apexchart
              height="300"
              type="donut"
              :options="pieData.Piegardientoptions"
              :series="pieData.Piegradientseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Image Filled Pie Chart
          </div>
        </div>
        <div class="card-body">
          <div id="pie-image">
            <Apexchart
              height="300"
              type="pie"
              :options="pieData.Pieimgoptions"
              :series="pieData.Pieimgseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Donut Chart With Patterns
          </div>
        </div>
        <div class="card-body mx-auto">
          <div id="donut-pattern">
            <Apexchart
              height="300"
              type="donut"
              :options="pieData.Piechartoptions"
              :series="pieData.Piechartseries"
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
