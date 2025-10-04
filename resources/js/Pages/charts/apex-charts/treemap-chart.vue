<script setup>
import * as treemapData from '@/shared/data/apexcharts/apexchart-treemap';
import Pageheader from "@/components/pageheader/pageheader.vue";
import { Head } from '@inertiajs/vue3';

const dataToPass = {
    title: "Charts",
    subtitle: "Apex Charts",
    currentpage: "Apex Treemap Charts",
    activepage: "Apex Treemap Charts"
}

</script>

<template>
    <Head title="Treemap Charts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
       <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                       Basic Treemap Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="treemap-basic">
                        <apexchart height="350" type="treemap" :options="treemapData.Treebasicoptions"
                            :series="treemapData.Treebasicseries" />
                    </div>
                </div>
            </div>
        </div>
       <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                       Multi Dimensional Treemap Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="treemap-multi">
                        <apexchart height="350" type="treemap" :options="treemapData.Treemultioptions"
                            :series="treemapData.Treemultiseries" />
                    </div>
                </div>
            </div>
        </div>
       <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                       Distributed Treemap Chart
                    </div>
                </div>
                <div class="card-body">
                    <div id="treemap-distributed">
                        <apexchart height="350" type="treemap" :options="treemapData.Treedisoptions"
                            :series="treemapData.Treedisseries" />
                    </div>
                </div>
            </div>
        </div>
       <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                       Treemap with color ranges
                    </div>
                </div>
                <div class="card-body">
                    <div id="treemap-colorranges">
                        <apexchart height="350" type="treemap" :options="treemapData.Treecoloroptions"
                            :series="treemapData.Treecolorseries" />
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
