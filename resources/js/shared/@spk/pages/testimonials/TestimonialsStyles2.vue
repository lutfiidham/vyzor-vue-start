<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    card: Object
})

</script>
<template>
    <div :class="`card custom-card testimonial-style-2-card ${card.color}`">
        <div class="card-body p-5">
            <h5 class="fw-semibold mb-3">{{ card.title }}</h5>
            <div class="mb-3 text-muted">
                {{ card.description }}
            </div>
            <div class="d-flex align-items-end justify-content-between flex-wrap gap-2">
                <div class="lh-1">
                    <span class="avatar rounded-circle me-2">
                        <BaseImg :src="card.imgSrc" alt="" class="img-fluid rounded-circle"/>
                    </span>
                </div>
                <div class="flex-fill">
                    <span class="d-block fw-semibold">{{ card.name }}</span>
                    <span>{{ card.role }}</span>
                </div>
                <div class="text-warning d-block ms-1">
                    <i :class="`ri-star-${star} me-1`" v-for="(star, index) in card.stars" :key="index"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
