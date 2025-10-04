<script setup>
defineProps({
    ecommerceCards: Object,
})

</script>

<template>
    <div v-for="(item, index) in ecommerceCards" :key="index" class="col-lg-6">
        <div :class="['card custom-card dashboard-main-card', item.color]">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <h5 class="fw-semibold">{{ item.value }}</h5>
                        <span class="d-block fs-12 text-muted">{{ item.title }}</span>
                    </div>
                    <div>
                        <span :class="`avatar avatar-lg bg-${item.color}-transparent svg-${item.color}`"
                            v-html="item.svgIcon">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>