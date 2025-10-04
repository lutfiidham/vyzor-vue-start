<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    Linktag: Boolean,
    Imgposition: String,
    Imagesrc: String,
    CardHeader: Boolean,
    Title: String,
    CardFooter: [Boolean, String],
    Footertext: String
})
</script>

<template>
    <div class="card custom-card">
        <a href="javascript:void(0);" class="text-fixed-white" v-if="Linktag"></a>
        <div class="row g-0">
            <template v-if="Imgposition === 'before'">
                <div class="col-md-4">
                    <BaseImg :src="Imagesrc" class="img-fluid rounded-start h-100 w-100" alt="..."/>
                </div>
            </template>
            <div class="col-md-8">
                <template v-if="CardHeader">
                    <div class="card-header">
                        <div class="card-title">{{ Title }}</div>
                    </div>
                </template>
                <div class="card-body">
                    <slot name="cardContent" />
                </div>
                <template v-if="CardFooter">
                    <div class="card-footer">
                        <p class="card-text"><small class="text-muted">{{ Footertext }}</small></p>
                    </div>
                </template>
            </div>
            <template v-if="Imgposition === 'after'">
                <div class="col-md-4">
                    <BaseImg :src="Imagesrc" class="img-fluid rounded-end h-100 w-100" alt="..."/>
                </div>
            </template>
        </div>
    </div>
</template>
