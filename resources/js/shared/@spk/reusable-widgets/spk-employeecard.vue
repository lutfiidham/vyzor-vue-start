<script setup>
defineProps({
    widget: Object
})
</script>

<template>
    <div class="col">
        <div :class="`card custom-card widget-card-style1 ${widget.cardColor}`">
            <div class="card-body">
                <div :class="`d-flex align-items-start gap-3 flex-wrap ${widget.divClass}`">
                    <div class="lh-1">
                        <span :class="`avatar avatar-md bg-${widget.color}`">
                            <i :class="`${widget.iconClass} fs-5`"></i>
                        </span>
                    </div>
                    <div class="flex-fill">
                        <span class="d-block">{{ widget.title }}</span>
                        <h5 :class="`fw-semibold ${widget.valueClass}`">{{ widget.value }}</h5>
                        <template v-if="widget.badge">
                            <span :class="`badge bg-${widget.color}-transparent`">{{ widget.badgeText }}</span>
                        </template>
                    </div>
                    <div :class="widget.endText">
                        <template v-if="widget.crmbadge">
                            <div :class="`fw-semibold text-${widget.crmiconColor}`">
                                <i :class="`ti ti-arrow-narrow-${widget.crmicon} me-1`"></i>{{ widget.crmpercentChange }}
                            </div>
                        </template>
                        <div :class="`${widget.percentageColorClass}`">{{ widget.percentChange }}</div>
                        <template v-if="widget.crmbadge">
                            <div class="text-muted fs-12">This Year</div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
