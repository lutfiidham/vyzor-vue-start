<script setup>
import * as pieData from '@/shared/data/apexcharts/apexchart-pie';
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from '@inertiajs/vue3';

const dataToPass = {
    title: "Charts",
    subtitle: "Apex Charts",
    currentpage: "Apex Pie Charts",
    activepage: "Apex Pie Charts"
}

</script>

<template>

    <Head title="Pie Charts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
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
                        <apexchart height="300" type="pie" :options="pieData.Basicpieoptions"
                            :series="pieData.Basicpieseries" />
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
                        <apexchart height="300" type="donut" :options="pieData.Donutoptions"
                            :series="pieData.Donutseries" />
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
                        <apexchart height="300" type="donut" :options="pieData.Updatedoptions"
                            :series="pieData.Updatedseries" />
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
                        <apexchart height="300" type="pie" :options="pieData.Piemonooptions"
                            :series="pieData.Piemonoseries" />
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
                        <apexchart height="300" type="donut" :options="pieData.Piegardientoptions"
                            :series="pieData.Piegradientseries" />
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
                        <apexchart height="300" type="pie" :options="pieData.Pieimgoptions"
                            :series="pieData.Pieimgseries" />
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
                        <apexchart height="300" type="donut" :options="pieData.Piechartoptions"
                            :series="pieData.Piechartseries" />
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
