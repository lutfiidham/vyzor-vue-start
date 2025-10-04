<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    CustomClass: String,
    Imgsrc: String,
    Overlayclass: String,
    CardHeader: {
        type: Boolean,
        default: true
    },
    Title: String,
    Custombodyclass: String,
    CustomTitleclass: String,
    Customfooterclass: String,
    CardFooter: {
        type: Boolean,
        default: true
    },
    Footertext: String
})

</script>
<template>
    <div :class="`card custom-card ${CustomClass}`">
        <BaseImg :src="Imgsrc" class="card-img" alt="..."/>
        <div :class="`card-img-overlay d-flex flex-column p-0 ${Overlayclass}`">
            <template v-if="CardHeader">
                <div class="card-header">
                    <div :class="`card-title ${CustomTitleclass}`">
                        {{ Title }}
                    </div>
                </div>
            </template>
            <div :class="`card-body ${Custombodyclass}`">
                <slot name="cardContent" />
            </div>
            <template v-if="CardFooter">
                <div :class="`card-footer ${Customfooterclass}`">{{ Footertext }}</div>
            </template>
        </div>
    </div>
</template>
