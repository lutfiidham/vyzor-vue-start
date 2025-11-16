<script setup>
import { Head } from '@inertiajs/vue3'
import { Chart as ChartJS, registerables } from 'chart.js'
import { defineAsyncComponent } from 'vue'
import {
  BarChart,
  BubbleChart,
  DoughnutChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart,
} from 'vue-chart-3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as chartjsData from '@/shared/data/chartjs/chartjs'

const ChartjsCardComponent = defineAsyncComponent(
  () => import('@/shared/@spk/charts/chartjs-cards.vue'),
)

ChartJS.register(...registerables)

const dataToPass = {
  title: 'Charts',
  currentpage: 'Chartjs',
  activepage: 'Chartjs',
}

const chartjs = [
  {
    type: LineChart,
    title: 'Chartjs Line Chart',
    data: chartjsData.linedata,
  },
  {
    type: BarChart,
    title: 'Chartjs Bar Chart',
    data: chartjsData.bardata,
  },
  {
    type: PieChart,
    title: 'Chartjs Pie Chart',
    data: chartjsData.singledata,
  },
  {
    type: DoughnutChart,
    title: 'Chartjs Doughnut Chart',
    data: chartjsData.singledata,
  },
  {
    type: PolarAreaChart,
    title: 'Chartjs Polar Chart',
    data: chartjsData.singledata2,
  },
  {
    type: RadarChart,
    title: 'Chartjs Radial Chart',
    data: chartjsData.radialdata,
  },
  {
    type: ScatterChart,
    title: 'Chartjs Scatter Chart',
    data: chartjsData.scatterdata,
  },
  {
    type: BubbleChart,
    title: 'Chartjs Bubble Chart',
    data: chartjsData.Bubbledata,
  },
]
</script>

<template>
  <Head title="Chartjs Charts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div v-for="(card, index) in chartjs" :key="index" class="col-xl-6">
      <ChartjsCardComponent
        :title="card.title"
        :type="card.type"
        :data="card.data"
        :option="card.option"
      />
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
