<script setup>
import BaseImg from "../../components/Baseimage/BaseImg.vue";
defineProps({
    customCardClass: String,
    cardHeaderClass: String,
    cardBodyClass: String,
    cardFooterClass: String,
    chartId: String,
    title: String,
    showCardFooter: {
        type: Boolean,
        default: false,
    },
    showGitImg: {
        type: Boolean,
        default: false,
    },
    btnGroup: {
        type: Boolean,
        default: false,
    },
    card: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <!-- Header -->
        <div :class="['card-header justify-content-between', cardHeaderClass]">
            <div class="card-title">{{ title }}</div>

            <!-- Optional Button Group -->
            <template v-if="btnGroup">
                <div class="btn-group ms-auto">
                    <button class="btn btn-primary btn-sm" id="one_month">1M</button>
                    <button class="btn btn-primary btn-sm" id="six_months">6M</button>
                    <button class="btn btn-primary btn-sm" id="one_year">1Y</button>
                    <button class="btn btn-primary btn-sm" id="all">ALL</button>
                </div>
            </template>

            <slot name="cardHeader" />
        </div>

        <!-- Body -->
        <div :class="['card-body', cardBodyClass]">
            <slot name="showData" />

            <div class="content-wrapper" :id="chartId">
                <!-- Primary Chart -->
                <apexchart v-if="card.chart?.options" :height="card.height" :type="card.type"
                    :options="card.chart.options" :series="card.chart.series" />

                <!-- GitHub style block -->
                <template v-if="showGitImg">
                    <div class="github-style d-flex align-items-center mt-3">
                        <div class="me-2">
                            <BaseImg class="userimg rounded" src="/images/faces/1.jpg" alt="User avatar" width="38"
                                height="38" />
                        </div>
                        <div class="userdetails lh-1">
                            <a class="username fw-semibold fs-14">coder</a>
                            <span class="cmeta d-block mt-1">
                                <span class="commits">95</span> commits
                            </span>
                        </div>
                    </div>
                </template>

                <!-- Secondary Chart -->
                <apexchart v-if="card.chart?.secondaryOptions" :height="card.height" :type="card.type"
                    :options="card.chart.secondaryOptions" :series="card.chart.secondarySeries" />

                <!-- Tertiary Chart -->
                <apexchart v-if="card.chart?.tertiaryOptions" :height="card.height" :type="card.type"
                    :options="card.chart.tertiaryOptions" :series="card.chart.tertiarySeries" />
            </div>

            <slot name="ChartCards" />
        </div>

        <!-- Footer -->
        <template v-if="showCardFooter">
            <div :class="['card-footer', cardFooterClass]">
                <slot name="cardFooter" />
            </div>
        </template>
    </div>
</template>

<style scoped>
/* Optional: Styles for card layout */
</style>
