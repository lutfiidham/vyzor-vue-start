<script setup>
defineProps({
    dashboardCards: Object,
})

</script>

<div :class="colClass" v-for="(item, index) in objectList" :key="index"></div>

<template>
    <div v-for="(item, index) in dashboardCards" :key="item.id" class="col-xl-12 col-md-6">
        <div :class="['card custom-card dashboard-main-card overflow-hidden', item.styles.cardClass]">
            <div class="card-body">
                <div class="d-flex align-items-start gap-3">
                    <div class="flex-fill">
                        <span class="fs-13 fw-medium">{{ item.title }}</span>
                        <h4 class="fw-semibold my-2 lh-1">{{ item.value }}</h4>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="fs-12 d-block text-muted"><span
                                    :class="['me-1 d-inline-flex align-items-center fw-semibold', item.styles.arrowColor]"><i
                                        :class="['me-1 fw-semibold align-middle', item.styles.arrowDir]"></i>{{
                                    item.change }}</span>{{ item.timeframe }}</span>
                        </div>
                    </div>
                    <div>
                        <span :class="['avatar avatar-md', item.styles.avatarBg, item.styles.svgClass]"
                            v-html="item.svg">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>