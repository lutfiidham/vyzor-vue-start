<script lang="js" setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    card:Object,
    required: true

})
</script>

<template>
    <div class="card custom-card">
        <div class="card-body">
            <div class="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="lh-1">
                        <span class="avatar avatar-sm avatar-rounded">
                            <BaseImg :src="card.imgSrc" alt=""/>
                        </span>
                    </div>
                    <div class="fs-14">{{ card.title }}</div>
                </div>
                <div>{{ card.price }}</div>
            </div>
            <div class="deal-description">
                <div class="my-1">
                    <a href="javascript:void(0);" class="company-name">{{ card.company }}</a>
                </div>
                <div class="text-muted fs-12">{{ card.date }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
