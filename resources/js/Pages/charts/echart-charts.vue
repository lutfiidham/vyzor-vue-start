<script setup>
import { defineAsyncComponent, ref } from 'vue';
import * as echartData from "@/shared/data/chartjs/echartdata"
// import VChart from 'vue-echarts';
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from '@inertiajs/vue3';
const VChart = defineAsyncComponent(() => import('vue-echarts'))

const dataToPass = {
    title: "Charts",
    currentpage: "Echart Charts",
    activepage: "Echart Charts"
};

const chartOptions = ref([
    { title: "Basic Line Chart", option: echartData.chartOption },
    { title: "Smoothed Line Chart", option: echartData.SmoothChart },
    { title: "Basic Area Chart", option: echartData.AreaChart },
    { title: "Stacked Line Chart", option: echartData.StackedLineChart },
    { title: "Stacked Area Chart", option: echartData.StackedAreaChart },
    { title: "Step Line Chart", option: echartData.StepLineChart },
    { title: "Basic Bar Chart", option: echartData.BasicBarChart },
    { title: "Bar With Background Chart", option: echartData.BarBackgroundChart },
    { title: "Style For a Single Bar Chart", option: echartData.SingleBarChart },
    { title: "Water Fall Chart", option: echartData.WaterFallChart },
    { title: "Bar With Negative Values Chart", option: echartData.BarNegativeChart },
    { title: "Bar With Labels Chart", option: echartData.BarLabelChart },
    { title: "Horizontal Bar Chart", option: echartData.HorizontalBarChart },
    { title: "Horizontal Stacked Bar Chart", option: echartData.HorizontalStackChart },
    { title: "Pie Chart", option: echartData.PieChart },
    { title: "Doughnut Chart", option: echartData.DoughnutChart },
    { title: "Basic Scatter Chart", option: echartData.ScatterChart },
    { title: "Bubble Chart", option: echartData.BubbleChart },
    { title: "Candlestick Chart", option: echartData.CandleChart },
    { title: "Basic Radar Chart", option: echartData.RadarChart },
    { title: "Heatmap Chart", option: echartData.HeatmapChart },
    { title: "Treemap Chart", option: echartData.TreemapChart },
    { title: "Funnel Chart", option: echartData.FunnelChart },
    { title: "Basic Gauge Chart", option: echartData.GaugeChart },
    { title: "Simple Graph Chart", option: echartData.SimpleChart },
]);
</script>

<template>
    <Head title="Echarts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div v-for="(chart, index) in chartOptions" :key="index" class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">{{ chart.title }}</div>
                </div>
                <div class="card-body">
                    <VChart class="echart-charts" :option="chart.option" autoresize />
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>