<script setup>
import * as currencyExchangeData from "@/shared/data/dashboards/crypto/currencyExchangedata.js";
import SpkReusableExchangeCard from "@/shared/@spk/dashboards/crypto/spk-reusable-exchangeCard.vue";
import Pageheader from "@/components/pageheader/pageheader.vue";
import { ref } from "vue";
import BaseImg from "../../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Dashboards",
    subtitle: "Crypto",
    currentpage: "Currency Exchange",
    activepage: "Currency Exchange"
}

const cryptoValue = ref("Bitcoin")
const currencyValue = ref("USD")

</script>

<template>
    <Head title="Crypto-Currency Exchange | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card currency-exchange-card border-0">
                <div class="card-body p-sm-5 d-flex align-items-center justify-content-center">
                    <div class="crypto-currency-exchange-background">
                        <BaseImg src="/images/media/media-65.png" alt=""/>
                    </div>
                    <div class="container">
                        <h3 class="text-center">Buy and Sell Coins without additional fees</h3>
                        <span class="d-block fs-16 text-center text-muted mb-4">
                            Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC
                            crypto-currency..
                        </span>
                        <div class="p-3 mb-4 rounded currency-exchange-area">
                            <div class="row gy-3">
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="0.0453" placeholder="Enter Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div>
                                        <VueMultiselect :searchable="true" name="Vacancies" :show-labels="false"
                                            :multiple="false" v-model="cryptoValue"
                                            :options="currencyExchangeData.bitciondata" :taggable="false"
                                            placeholder="Select">
                                        </VueMultiselect>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div class="fs-2 text-fixed-white text-center op-8 lh-1 mt-1">
                                        =
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="1350.93"
                                        placeholder="Exchange Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <VueMultiselect :searchable="true" name="Vacancies" :show-labels="false"
                                        :multiple="false" v-model="currencyValue"
                                        :options="currencyExchangeData.usdData" :taggable="false" placeholder="Select">
                                    </VueMultiselect>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-danger btn-wave">Exchange Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row justify-content-center">
        <SpkReusableExchangeCard :currencyCards="currencyExchangeData.currencyCards" />
        <div class="col-xl-12">
            <div class="text-center my-4">
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
