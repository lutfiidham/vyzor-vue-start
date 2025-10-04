<script setup>
import Pageheader from '@/components/pageheader/pageheader.vue';
import { Head } from '@inertiajs/vue3';
 const dataToPass= {
                title: "Pages",
                currentpage: "Empty",
                activepage: "Empty"
            }

</script>

<template>
    <Head title="Empty | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <h6 class="mb-0">Empty Card</h6>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
