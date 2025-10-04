<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';

defineProps({
    Customclass: String,
    Imagetag: {
        type: Boolean,
        default: false
    },
    Imgsrc: String,
    Anchortagbefore: {
        type: Boolean,
        default: false
    },
    AnchortagNavigate: {
        type: [URL, String],
    },
    CustomHeaderclass: String,
    Title: String,
    Linktag: Boolean,
    Navigate: [URL, String],
    OnclickFunc: {
        type: Function,
    },
    LinkClass: String,
    Icontag: {
        type: Boolean,
        default: false
    },
    Icon: String,
    CustomBodyclass: String,
    condition: Boolean,
    Customfooterclass: String,
    ButtonTag: Boolean,
    Cardheader: Boolean
})

</script>

<template>
    <div :class="`card ${Customclass}`">
        <template v-if="Imagetag">
            <BaseImg :src="Imgsrc" class="card-img-top" alt="..."/>
        </template>
        <template v-if="Anchortagbefore">
            <a :href="AnchortagNavigate" class="card-anchor"></a>
        </template>
        <template v-if="Cardheader">
            <div :class="`card-header ${CustomHeaderclass}`">
                <div class="card-title">
                    {{ Title }}
                </div>
                <template v-if="Linktag">
                    <a :href="Navigate" data-bs-toggle="card-remove" @click="OnclickFunc" :class="LinkClass"></a>
                </template>
                <template v-if="Icontag">
                    <i :class="Icon"></i>
                </template>
            </div>
        </template>
        <div :class="`card-body ${CustomBodyclass} `">
            <slot />
        </div>
        <template v-if="Cardfooter">
            <div :class="`card-footer ${Customfooterclass}`">
                <template v-if="ButtonTag">
                    <button class="btn btn-primary">Read More</button>
                </template>
            </div>
        </template>
    </div>
</template>
