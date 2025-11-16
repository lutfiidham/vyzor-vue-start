<script setup>
import { Head } from '@inertiajs/vue3'
import { onMounted, onUnmounted } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as lineData from '@/shared/data/apexcharts/apexchart-linemap'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Line Charts',
  activepage: 'Apex Line Charts',
}

function setDataLineChart() {
  const intervalId = setInterval(() => {}, 3000)
  onUnmounted(() => {
    clearInterval(intervalId)
  })
}

onMounted(() => {
  setDataLineChart()
})
</script>

<template>
  <Head title="Line Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Line Chart
          </div>
        </div>
        <div class="card-body">
          <div id="line-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linebasicoptions"
              :series="lineData.Linebasicseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line Chart With Data Labels
          </div>
        </div>
        <div class="card-body">
          <div id="line-chart-datalabels">
            <Apexchart
              id="line-chart-datalabels"
              height="300"
              type="line"
              :options="lineData.Linedataoptions"
              :series="lineData.Linedataseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Zoomable Time Series
          </div>
        </div>
        <div class="card-body">
          <div id="line-chart">
            <Apexchart
              height="300"
              type="area"
              :options="lineData.Linezoomoptions"
              :series="lineData.Linezoomseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Line With Annotations
          </div>
        </div>
        <div class="card-body">
          <div id="annotation-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Lineannotationoptions"
              :series="lineData.Lineannotationseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Brush Chart
          </div>
        </div>
        <div class="card-body">
          <div id="wrapper">
            <div id="brush-chart1">
              <Apexchart
                height="157"
                type="line"
                :options="lineData.Linebrushoptions"
                :series="lineData.Linebrushseries"
              />
            </div>
            <div id="brush-chart">
              <Apexchart
                height="130"
                type="area"
                :options="lineData.optionsLine"
                :series="lineData.seriesLine"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            StepLine Chart
          </div>
        </div>
        <div class="card-body">
          <div id="stepline-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linestepoptions"
              :series="lineData.Linestepseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Gradient Line Chart
          </div>
        </div>
        <div class="card-body">
          <div id="gradient-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linegardientoptions"
              :series="lineData.Linegardientseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Missing/Null Values Chart
          </div>
        </div>
        <div class="card-body">
          <div id="null-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linenulloptions"
              :series="lineData.Linenullseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Real Time Chart
          </div>
        </div>
        <div class="card-body">
          <div id="dynamic-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linerealoptions"
              :series="lineData.Linerealseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Dashed Line Chart
          </div>
        </div>
        <div class="card-body">
          <div id="dashed-chart">
            <Apexchart
              height="300"
              type="line"
              :options="lineData.Linedashoptions"
              :series="lineData.Linedashseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Syncing Charts
          </div>
        </div>
        <div class="card-body">
          <div id="wrapper">
            <div id="chart-line">
              <Apexchart
                height="166"
                type="line"
                :options="lineData.Linesyncoptions"
                :series="lineData.Linesyncseries"
              />
            </div>
            <div id="chart-line2">
              <Apexchart
                height="166"
                type="line"
                :options="lineData.optionsLine2"
                :series="lineData.seriesLine2"
              />
            </div>
            <div id="chart-area">
              <Apexchart
                height="166"
                type="line"
                :options="lineData.optionsArea"
                :series="lineData.seriesArea"
              />
            </div>
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
