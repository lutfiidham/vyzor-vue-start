<template>
    <div class="page-header-breadcrumb mb-3">
        <div class="d-flex align-center justify-content-between flex-wrap gap-1">
            <h1 class="page-title fw-medium fs-18 mb-0">{{ propData?.activepage }}</h1>
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                    <a href="javascript:void(0);">
                        {{ propData?.title }}
                    </a>
                </li>
                <li class="breadcrumb-item" v-if="propData?.subtitle">
                    <a href="javascript:void(0);">
                        {{ propData?.subtitle }}
                    </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ propData?.currentpage }}</li>
            </ol>
        </div>
    </div>
</template>

<script setup>
defineProps({
    propData: Object,
})
</script>

<style scoped></style>
