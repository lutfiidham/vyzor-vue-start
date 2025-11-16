<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as mixedData from '@/shared/data/apexcharts/apexchart-mixed'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Mixed Charts',
  activepage: 'Apex Mixed Charts',
}
</script>

<template>
  <Head title="Mixed Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line & Column Chart
          </div>
        </div>
        <div class="card-body">
          <div id="mixed-linecolumn">
            <Apexchart
              height="300"
              type="line"
              :options="mixedData.Mixedlineoptions"
              :series="mixedData.Mixedlineseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Multiple Y-Axis Chart
          </div>
        </div>
        <div class="card-body">
          <div id="mixed-multiple-y">
            <Apexchart
              height="300"
              type="line"
              :options="mixedData.Mixedaxisoptions"
              :series="mixedData.Mixedaxisseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line & Area Chart
          </div>
        </div>
        <div class="card-body">
          <div id="mixed-linearea">
            <Apexchart
              height="300"
              type="line"
              :options="mixedData.Mixedareaoptions"
              :series="mixedData.Mixedareaseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line, Column & Area Chart
          </div>
        </div>
        <div class="card-body">
          <div id="mixed-all">
            <Apexchart
              height="300"
              type="line"
              :options="mixedData.Mixedcolumnoptions"
              :series="mixedData.Mixedcolumnseries"
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
