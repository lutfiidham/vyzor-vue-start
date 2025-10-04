<script setup>
import * as culumnData from '@/shared/data/apexcharts/apexchart-column';
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from '@inertiajs/vue3';

const dataToPass = {
    title: "Charts",
    subtitle: "Apex Charts",
    currentpage: "Apex Column Charts",
    activepage: "Apex Column Charts"
}

</script>

<template>
    <Head title="Column Charts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Column Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-basic">
                        <apexchart height="300" type="bar" :options="culumnData.Columnbasicoptions"
                            :series="culumnData.Columnbasicseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Column Chart With Datalabels
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-datalabels">
                        <apexchart height="300" type="bar" :options="culumnData.Columnchartoptions"
                            :series="culumnData.Columnchartseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Stacked Column Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-stacked">
                        <apexchart height="300" type="bar" :options="culumnData.Stackcolumnoptions"
                            :series="culumnData.Stackcolumnseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        100% Stacked Column Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-stacked-full">
                        <apexchart height="300" type="bar" :options="culumnData.Columnstack1options"
                            :series="culumnData.Columnstack1series" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Column Chart With Markers
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-markers">
                        <apexchart height="300" type="bar" :options="culumnData.Columnmakeroptions"
                            :series="culumnData.Columnmakerseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Column Chart With Rotated Labels
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-rotated-labels">
                        <apexchart height="300" type="bar" :options="culumnData.Columnrotateoptions"
                            :series="culumnData.Columnrotateseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Column Chart With Negative Values
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-negative">
                        <apexchart height="300" type="bar" :options="culumnData.Columnvalueoptions"
                            :series="culumnData.Columnvalueseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Range Column Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="column-range">
                        <apexchart height="300" type="bar" :options="culumnData.Columnoptions"
                            :series="culumnData.Columnseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Distributed Columns Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="columns-distributed">
                        <apexchart height="300" type="bar" :options="culumnData.Column1options"
                            :series="culumnData.Column1series" />
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
