<script setup>
import * as Pricingdata from "@/shared/data/pages/pricingdata";
import Pageheader from "@/components/pageheader/pageheader.vue";
import SpkBasicpricecard from "@/shared/@spk/pages/pricing/spk-basicpricecard.vue";
import SpkPricecard from "@/shared/@spk/pages/pricing/spk-pricecard.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Pages",
    currentpage: "Pricing",
    activepage: "Pricing"
}
</script>

<template>

    <Head title="Pricing | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row d-flex justify-content-center mb-5">
        <div class="pricing-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Pricing Plans
            </span>
            <h2 class="fw-semibold mt-2">Choose the Right Plan for Your Needs</h2>
            <span class="d-block text-muted fs-16 mb-3">Choose a plan that fits your needs with scalable features and
                great value.</span>
            <div class="tab-style-1 border p-1 bg-white rounded-pill d-inline-block">
                <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button type="button" class="nav-link rounded-pill fw-medium active" data-bs-toggle="pill"
                            data-bs-target="#pricing-monthly" aria-selected="true" role="tab">Monthly</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button type="button" class="nav-link rounded-pill fw-medium" data-bs-toggle="pill"
                            data-bs-target="#pricing-yearly" aria-selected="false" role="tab"
                            tabindex="-1">Yearly</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="pricing-monthly" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-12" v-for="(idx, index) in Pricingdata.PricingData" :key="index">
                            <SpkPricecard :card="idx" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 border-0" id="pricing-yearly" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-12" v-for="(idx, index) in Pricingdata.YearData" :key="index">
                            <SpkPricecard :card="idx" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row d-flex justify-content-center">
        <div class="pricing-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Our Pricing
            </span>
            <h2 class="fw-semibold mt-2">Choose the Plan That Fits Your Needs</h2>
            <span class="d-block text-muted fs-16 mb-3">Select the right fit and enjoy seamless access to all
                features.</span>
            <div class="tab-style-1 border bg-white rounded-0 d-inline-block">
                <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button type="button" class="nav-link rounded-0 fw-medium active" data-bs-toggle="pill"
                            data-bs-target="#pricing1-monthly" aria-selected="true" role="tab">Monthly</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button type="button" class="nav-link rounded-0 fw-medium" data-bs-toggle="pill"
                            data-bs-target="#pricing1-yearly" aria-selected="false" role="tab"
                            tabindex="-1">Yearly</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="pricing1-monthly" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-4" v-for="(idx, index) in Pricingdata.BasicPricingdata" :key="index">
                            <SpkBasicpricecard :card="idx" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 border-0" id="pricing1-yearly" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-4" v-for="(idx, index) in Pricingdata.BasicPricing1data" :key="index">
                            <SpkBasicpricecard :card="idx" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
