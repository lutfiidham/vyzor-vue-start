<script setup>
defineProps({
    card: Object
})

</script>

<template>
    <div class="card custom-card">
        <div class="card-body">
            <div class="d-flex align-items-center gap-3 flex-wrap">
                <div class="lh-1">
                    <span :class="['avatar avatar-md', card.color]">
                        <i :class="`fs-5 ${card.iconClass}`"></i>
                    </span>
                </div>
                <div class="flex-fill">
                    <span>
                        {{ card.title }}
                    </span>
                    <h5 class="d-block fw-semibold mb-0">{{ card.value }}</h5>
                </div>
                <div class="text-end">
                    <div :class="`fw-semibold ${card.crmicon === 'up' ? 'text-success' : 'text-danger'}`"><i
                            :class="`me-1 ${card.crmicon === 'up' ? 'ti ti-arrow-narrow-up' : 'ti ti-arrow-narrow-down'}`"></i>{{
                                card.crmpercentChange }}</div>
                    <div class="text-muted fs-12">This Year</div>
                </div>
            </div>
        </div>
    </div>
</template>