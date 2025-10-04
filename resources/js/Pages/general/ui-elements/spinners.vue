<script setup>
import * as prism from '@/shared/data/prismCode/ui-elements/spinner';
import * as spinnerData from "@/shared/data/ui-elements/spinner"
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../../UI/showcodeCard.vue";
import { Head } from '@inertiajs/vue3';
const dataToPass = {
    title: "Ui Elements",
    currentpage: "Spinners",
    activepage: "Spinners"
}
</script>

<template>
    <Head title="Spinners | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Border spinner" :code="prism.BorderSpinner">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Growing spinner" :code="prism.GrowingSpinner">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Colors" :code="prism.Colors">
                <div :class="`spinner-border me-2 text-${idx.color}`" role="status"
                    v-for="(idx, index) in spinnerData.Colorspinner" :key="index">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Growing Color spinners" :code="prism.GrowingSpinner1">
                <div :class="`spinner-grow me-2 text-${idx.color}`" role="status"
                    v-for="(idx, index) in spinnerData.Colorspinner" :key="index">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Alignment Flex" :code="prism.AlignmentFlex">
                <div class="d-flex justify-content-center mb-4">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Alignment Float" :code="prism.AlignmentFloat">
                <div class="clearfix mb-4">
                    <div class="spinner-border float-end" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="spinner-border float-start" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Alignment Text center" :code="prism.AlignmentTextCenter">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </ShowcodeCard>
            <ShowcodeCard title="Spinner Sizes" custom-card-body-class="d-flex 
                align-items-center" :code="prism.SpinnerSizes">
                <div class="spinner-border spinner-border-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border me-4" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Alignment Margin" :code="prism.AlignmentMargin">
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Buttons" :code="prism.Buttons">
                <div class="btn-list">
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-border spinner-border-sm align-middle" role="status"
                            aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                    </button>
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-border spinner-border-sm align-middle" role="status"
                            aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                    </button>
                    <button :class="`btn btn-${idx.color}`" type="button" disabled
                        v-for="(idx, index) in spinnerData.Buttonspinner" :key="index">
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->
</template>

<style scoped>
/* Add your styles here */
</style>
