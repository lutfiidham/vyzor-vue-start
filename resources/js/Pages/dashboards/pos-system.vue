<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as SystemData from "@/shared/data/dashboards/pos-systemdata.js";
import SwiperjsCardComponent from "@/shared/@spk/swiperjs-cards.vue";
import Pageheader from "@/components/pageheader/pageheader.vue";
import SpkPosSwiperCard from "@/shared/@spk/dashboards/spk-posSwiperCard.vue";
import Quantity from "../../../UI/quantity.vue";
import BaseImg from '../../components/Baseimage/BaseImg.vue';
import { Head } from '@inertiajs/vue3';

// DOM refs and Isotope
const grid = ref  (null)
const isotope = ref  (null)
const activeFilter = ref('*')

// Initialize Isotope on mount
onMounted(async () => {
    const module = await import('isotope-layout')
    const IsotopeModule = module.default
    if (grid.value) {
        isotope.value = new IsotopeModule(grid.value, {
            itemSelector: '.card-item',
            layoutMode: 'fitRows',
            fitWidth: true,
            percentPosition: true,
        })
    }
})

// Destroy Isotope on unmount
onBeforeUnmount(() => {
    if (isotope.value) {
        isotope.value.destroy()
        isotope.value = null
    }
})

// Filter handler
const handleTabClick = (filter) => {
    activeFilter.value = filter
    if (isotope.value) {
        isotope.value.arrange({ filter })
    }
}

// Data passed to layout/header
const dataToPass = {
    title: 'Dashboards',
    currentpage: 'POS System',
    activepage: 'POS System'
}

// System data
const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    500: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
    1200: { slidesPerView: 2, spaceBetween: 20 },
    1400: { slidesPerView: 3, spaceBetween: 20 },
    1600: { slidesPerView: 3, spaceBetween: 20 },
    1800: { slidesPerView: 4, spaceBetween: 20 },
}
</script>


<template>
    <Head title="Pos-System | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="row">
                <div class="col-xl-12">
                    <h5 class="fw-semibold mb-3 d-flex align-items-center">Orders<span
                            class="badge bg-primary ms-2 rounded-pill">08</span></h5>
                    <SwiperjsCardComponent :swiperItems="SystemData.Orders"
                        swiperClass="swiper swiper-navigation pos-orders-swiper" :breakpoints="breakpoints"
                        :slidesPerView="4" :spaceBetween="20" :pagination="false" :navigation="true" :autoplay="true">
                        <template #default="{ card }">
                            <SpkPosSwiperCard :card="card" />
                        </template>
                    </SwiperjsCardComponent>
                </div>
                <div class="col-xl-12">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <h5 class="fw-semibold mb-0 d-flex align-items-center">Categories<span
                                class="badge bg-success ms-2 rounded-pill">07</span></h5>
                        <a href="javascript:void(0);" class="text-muted fs-13">View All<i
                                class="ti ti-arrow-narrow-right ms-1"></i></a>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-4 flex-wrap pos-category pos-categories-list"
                        id="filter">
                        <div :class="`nft-tag nft-tag-${idx.class} ${activeFilter === idx.filter ? 'active' : ''}`"
                            v-for="(idx) in SystemData.Tags" :key="idx.id" @click="handleTabClick(idx.filter)">
                            <a href="javascript:void(0);" class="stretched-link categories" data-filter="*">
                                <span class="nft-tag-icon">
                                    <BaseImg :src="idx.icon" alt=""/>
                                </span>
                                <span class="nft-tag-text podcast-category-text">{{ idx.text }}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="row list-wrapper" ref="grid">
                        <div :class="`col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 card-item ${idx.category}`"
                            data-category="Soups" v-for="(idx) in SystemData.Systemcards" :key="idx.id">
                            <div class="card custom-card">
                                <BaseImg :src="idx.image" class="card-img-top bg-light" alt="..."/>
                                <div class="card-body">
                                    <div class="mb-1">
                                        <a href="javascript:void(0);" class="fw-medium fs-16">{{ idx.title }}</a>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <h5 class="fw-semibold mb-0">${{ idx.price }}</h5>
                                            <span class="text-muted fs-13 text-decoration-line-through">${{
                                                idx.originalPrice }}</span>
                                        </div>
                                        <div>
                                            <button
                                                class="btn btn-primary btn-sm btn-wave d-inline-flex align-items-center justify-content-center"
                                                data-bs-toggle="tooltip" data-bs-placement="top" title="Add Item">Add
                                                Item<i class="ti ti-plus ms-1"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">Orders Details</div>
                    <span class="badge bg-primary-transparent">4 Items</span>
                </div>
                <div class="card-body">
                    <div class="mb-4">
                        <span class="fw-semibold d-block mb-0">Recepient: Jhon Doe</span>
                        <span class="d-block fs-13 text-muted mb-1">Mon - 24,Feb 2025 - 12:45PM</span>
                        <span class="d-block fs-12 text-muted">#SPK1236655</span>
                    </div>
                    <ul class="list-unstyled pos-system-orders-list">
                        <li v-for="(idx) in SystemData.CartItems" :key="idx.id">
                            <div class="d-flex align-items-start gap-2 flex-wrap">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg bg-light border">
                                        <BaseImg :src="idx.image" alt="img"/>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex align-items-end mb-1 flex-wrap">
                                        <span class="fw-semibold text-truncate flex-fill">{{ idx.title }}</span>
                                        <div class="d-flex align-items-center order-qnt gap-2">
                                            <Quantity
                                                decClass="badge bg-white p-1 border text-muted fs-13 product-quantity-minus"
                                                inputClass="form-control form-control-cart border-0 text-center w-100"
                                                incClass="badge bg-white p-1 border text-muted fs-13 product-quantity-plus" />
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="flex-grow-1 mb-0 text-primary">${{ idx.price }}</div>
                                        <div class="lh-1">
                                            <a href="javascript:void(0);"
                                                class="text-danger fs-12 text-decoration-underline">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card-footer p-0">
                    <div class="p-3 border-bottom border-bottom-dashed">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 fw-semibold mb-2">
                            <span>Sub total</span>
                            <span>$37.96</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2  text-muted">
                            <span>Packaging Charges:</span>
                            <span>+$5.00</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2  text-muted">
                            <span>GST:</span>
                            <span>$2.99</span>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 text-primary px-3 py-2 fw-semibold fs-18 border-bottom border-bottom-dashed">
                        <span>Total:</span>
                        <span>$45.00</span>
                    </div>
                    <div class="p-3">
                        <h6 class="fw-semibold mb-3">Payment Methods:</h6>
                        <div class="btn-group flex-wrap" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
                            <label class="btn btn-outline-primary btn-w-sm" for="btnradio1">
                                <span class="d-block"><i class="ti ti-cash fs-5"></i></span>
                                <span class="d-block">Cash</span>
                            </label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                            <label class="btn btn-outline-primary btn-w-sm" for="btnradio2">
                                <span class="d-block"><i class="ti ti-qrcode fs-5"></i></span>
                                <span class="d-block">UPI</span>
                            </label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                            <label class="btn btn-outline-primary" for="btnradio3">
                                <span class="d-block"><i class="ti ti-credit-card fs-5"></i></span>
                                <span class="d-block">Debit Card</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="card-footer d-grid">
                    <button class="btn btn-primary btn-lg">Pay - $45.00</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
