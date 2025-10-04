<script setup>
defineProps({
    card: Object,
    cardClass: String

})

</script>
<template>
    <div :class="`card custom-card ${card.cardClass}`">
        <div class="card-body p-4 text-center">
            <h5 :class="`fw-semibold mb-3 ${card.titleColor}`">{{ card.title }}</h5>
            <div class="d-flex align-items-end justify-content-center gap-1 mb-4">
                <h2 :class="`fw-semibold mb-0 lh-1 text-${card.priceColor}`">{{ card.price }}</h2>
                <span :class="`fs-13 ${card.cardClass ? '' : 'text-muted'}`">/ {{ card.year }}</span>
            </div>
            <ul class="list-unstyled pricing-features-list-1 mx-5 text-start mb-4">
                <li v-for="(item, index) in card.features" :key="index">
                    {{ typeof item === 'string' ? item : item.value }}
                </li>
            </ul>
            <div>
                <span :class="`badge bg-${card.badgeColor}-transparent py-1 px-3 fs-13 rounded-pill fw-normal`">{{
                    card.percent }}</span>
                <div class="d-grid mt-3">
                    <button :class="`btn btn-${card.btnColor} btn-lg`">Choose Plan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
