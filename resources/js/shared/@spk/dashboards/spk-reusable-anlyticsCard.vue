<script setup>
defineProps({
    analyticData: Object,
})


</script>

<template>
    <div v-for="(item, index) in analyticData" :key="index" class="col-xxl-3 col-lg-6">
    <div class="card custom-card">
        <div class="card-body">
            <div class="d-flex align-items-start gap-3">
                <div>
                    <span :class="`avatar avatar-md bg-${item.svgColor} svg-white`" v-html="item.svgIcon">
                        
                    </span>
                </div>
                <div>
                    <span class="d-block text-muted">{{ item.title }}</span>
                    <h5 class="fw-semibold mb-1">{{ item.value }}</h5>
                    <div class="text-muted fs-12">
                        <span :class="`text-${item.iconColor}`"><i :class="item.icon"></i>{{ item.percent }}</span>
                        {{ item.year }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>