<script  setup>
import * as bubbleData from '@/shared/data/apexcharts/apexchart-bubble';
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from '@inertiajs/vue3';

const dataToPass = {
    title: "Charts",
    subtitle: "Apex Charts",
    currentpage: "Apex Bubble Charts",
    activepage: "Apex Bubble Charts"
}

</script>

<template>
    <Head title="Bubble Charts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Simple Bubble Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bubble-simple">
                        <apexchart height="320" type="bubble" :options="bubbleData.Bubbleoptions"
                            :series="bubbleData.Bubbleseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        3D Bubble Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="bubble-3d">
                        <apexchart height="320" type="bubble" :options="bubbleData.Bubble3doptions"
                            :series="bubbleData.Bubble3dseries" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
