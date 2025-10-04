<script setup>
import * as barData from "@/shared/data/apexcharts/apexchart-bar";
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from "@inertiajs/vue3";

const dataToPass = {
    itle: "Charts",
    subtitle: "Apex Charts",
    currentpage: "Apex Bar Charts",
    activepage: "Apex Bar Charts"
}

</script>

<template>
    <Head title="Bar Charts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-basic">
                        <apexchart height="300" type="bar" :options="barData.Barbasicoptions"
                            :series="barData.Barbasicseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Grouped Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-group">
                        <apexchart height="300" type="bar" :options="barData.Bargroupoptions"
                            :series="barData.Bargroupseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Stacked Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-stacked">
                        <apexchart height="300" type="bar" :options="barData.Barstackoptions"
                            :series="barData.Barstackseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        100% Stacked Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-full">
                        <apexchart height="300" type="bar" :options="barData.Barstack1options"
                            :series="barData.Barstck1series" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Bar Chart With Negative Values
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-negative">
                        <apexchart height="300" type="bar" :options="barData.Barchartoptions"
                            :series="barData.Barchartseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Bar Chart With Markers
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-markers">
                        <apexchart height="300" type="bar" :options="barData.Barmakeroptions"
                            :series="barData.Barmakerseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Reversed Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-reversed">
                        <apexchart height="300" type="bar" :options="barData.Barreverseoptions"
                            :series="barData.Barreverseseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Bar With Category DataLabels
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-categories">
                        <apexchart height="300" type="bar" :options="barData.Barlableoptions"
                            :series="barData.Barlabelseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Patterned Bar Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-pattern">
                        <apexchart height="300" type="bar" :options="barData.Barpatternoptions"
                            :series="barData.Barpatternseries" />
                    </div>
                </div>
            </div>
        </div>
         <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Bar With Image Fill
                    </div>
                </div>
                <div class="card-body">
                    <div id="bar-image">
                        <apexchart height="300" type="bar" :options="barData.Barimgoptions"
                            :series="barData.Barimgseries" />
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
