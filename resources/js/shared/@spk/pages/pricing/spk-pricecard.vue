<script setup>
defineProps({
    card: Object
})

</script>
<template>
    <div :class="`card custom-card dashboard-main-card pricing-card pricing-${card.color}`">
        <div class="card-body p-4">
            <span v-if="card.badge" class="badge bg-dark text-white pricing-recommended-badge">
                Recommended
            </span>
            <div class="lh-1 mb-3">
                <span :class="`avatar avatar-lg avatar-rounded bg-${card.color}-transparent svg-${card.color}`"
                    v-html="card.svgIcon"> </span>
            </div>
            <h5 class="fw-semibold">{{ card.title }}</h5>
            <p class="text-muted">{{ card.description }}</p>
            <div class="pricing-count">
                <span class="fs-13 d-block mb-1">Start at</span>
                <div class="d-flex align-items-end gap-2">
                    <h2 class="fw-semibold mb-0 lh-1">{{ card.price }}</h2>
                    <span class="fs-13">/ {{ card.user }} per user</span>
                </div>
            </div>
            <hr class="section-devider my-4">
            <ul class="list-unstyled pricing-features-list">
                <li v-for="(item, index) in card.features" :key="index">
                    <template v-if="typeof item === 'string'">
                        {{ item }}
                    </template>
                    <template v-else>
                        <span class="fw-medium">{{ item.label }}</span> {{ item.value }}
                    </template>
                </li>
            </ul>
            <div class="d-grid mt-4">
                <button :class="`btn btn-lg btn-${card.btnColor}`">Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
