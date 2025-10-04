<script setup>
defineProps({
    card: Object
})

</script>
<template>
    <div class="card custom-card dashboard-main-card">
        <div class="card-body">
            <div class="d-flex align-items-start gap-2 flex-wrap">
                <div class="lh-1">
                    <span
                        :class="`avatar avatar-md avatar-rounded bg-${card.svgColor}-transparent svg-${card.svgColor}`"
                        v-html="card.svgIcon"> </span>
                </div>
                <div class="flex-fill">
                    <div class="d-flex align-items-end justify-content-between">
                        <span class="d-block mb-1">{{ card.title }}</span>
                        <div class="dropdown">
                            <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown"
                                aria-expanded="false" class=" btn btn-icon btn-sm rounded-circle btn-light">
                                <i class="ti ti-dots text-muted fs-5"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Month</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Year</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between">
                        <h4 class="fw-semibold mb-0">{{ card.value }}</h4>
                        <div :class="`text-${card.arrow === 'up' ? 'success' : 'danger'} fs-13`"><i
                                :class="`ti ti-arrow-${card.arrow}`"></i>{{ card.percent }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
