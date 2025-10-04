<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    card: Object
})

</script>
<template>
    <div :class="`card custom-card ${card.cardClass}`">
        <div class="card-body p-5">
            <div class="lh-1">
                <span class="avatar avatar-xxl avatar-rounded">
                    <BaseImg :src="card.image" alt=""/>
                </span>
            </div>
            <div>
                <div class="main-content">
                    <div class="mb-2 text-warning fs-15">
                        <i :class="`ri-star-${star} me-1`" v-for="(star, index) in card.stars" :key="index"></i>
                    </div>
                    <p class="text-muted mb-3">{{ card.text }}</p>
                    <div>
                        <span class="d-block fw-semibold">{{ card.name }}</span>
                        <span class="fs-13 text-muted">{{ card.role }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
