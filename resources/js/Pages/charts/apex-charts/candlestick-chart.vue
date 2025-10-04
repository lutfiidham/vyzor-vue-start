<script setup>
import * as candleData from '@/shared/data/apexcharts/apexchart-candlestick'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Candlestick Charts',
  activepage: 'Apex Candlestick Charts',
}
</script>

<template>
  <Head title="Candlestick Charts | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Candlestick Chart</div>
        </div>
        <div class="card-body">
          <div id="candlestick-basic">
            <apexchart
              height="300"
              type="candlestick"
              :options="candleData.Candbasicoptions"
              :series="candleData.Candbasicseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick Synced With Brush Chart</div>
        </div>
        <div class="card-body">
          <div id="chart-candlestick">
            <apexchart
              height="166"
              type="candlestick"
              :options="candleData.Candsyncoptions"
              :series="candleData.Candsyncedseries"
            />
          </div>
          <div id="chart-candlestick">
            <apexchart
              height="120"
              type="bar"
              :options="candleData.CandeoptionsBar"
              :series="candleData.CandseriesBar"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick With Category X-axis</div>
        </div>
        <div class="card-body">
          <div id="candlestick-categoryx">
            <apexchart
              height="300"
              type="candlestick"
              :options="candleData.Candaxisoptions"
              :series="candleData.Candaxisseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick With Line Chart</div>
        </div>
        <div class="card-body">
          <div id="candlestick-line">
            <apexchart
              height="300"
              type="candlestick"
              :options="candleData.Candlineoptions"
              :series="candleData.Candlineseries"
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
