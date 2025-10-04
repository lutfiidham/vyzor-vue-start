<script setup>
import Pageheader from "@/components/pageheader/pageheader.vue";
import DescriptionGallery from "../../../UI/descriptionGallery.vue";
import GalleryList from "../../../UI/galleryList.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Applications",
    currentpage: "Gallery",
    activepage: "Gallery"
}
</script>

<template>
    <Head title="Gallery | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Simple Image Gallery
                    </div>
                </div>
                <div class="card-body">
                    <GalleryList />
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Images with Description
                    </div>
                </div>
                <div class="card-body">
                    <DescriptionGallery />
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

</template>

<style scoped>
/* Add your styles here */
</style>
