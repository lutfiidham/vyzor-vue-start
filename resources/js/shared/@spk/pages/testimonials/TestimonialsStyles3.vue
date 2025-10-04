<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    card: Object
})

</script>
<template>
<div class="card custom-card">
    <div class="card-body text-center p-5">
        <div class="testimonaial-3-quote"><i class="bx bxs-quote-alt-left"></i></div>
        <div class="lh-1 mb-4">
            <span class="avatar avatar-xl avatar-rounded">
                <BaseImg :src="card.image" alt="img"/>
            </span>
        </div>
        <div class="mb-2 text-warning fs-15">
            <i :class="`ri-star-${star} me-1`" v-for="(star,index) in card.stars" :key="index"></i>
        </div>
        <p>
            {{ card.text }}
        </p>
        <div class="d-flex align-items-center justify-content-start">
            <div class="flex-grow-1">
                <h6 class="mb-1">{{ card.name }}</h6>
                <span class="fs-14 fw-normal text-muted">{{ card.role }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped></style>
