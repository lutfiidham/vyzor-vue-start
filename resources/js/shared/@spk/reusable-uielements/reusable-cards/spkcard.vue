<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  header: [Boolean],
  headerText: String,
  footer: [Boolean, String],
  bodyText: {
    type: Boolean,
    default: true,
  },
  imgSrc: String,
  title: String,
  titleClass: String,
  subTitle: String,
  imgClass: String,
  cardClass: String,
  bodyClass: String,
  cardFooter: String,
  cardHeader: String,
  useDivHeader: {
    type: Boolean,
    default: false,
  },
  imgSrcA: String,
  imgClassA: String,
  imgSrcB: String,
  imgClassB: String,
  linkTag: {
    type: [Boolean, String],
    default: false,
  },
  singleImg: String,
  imgSingleSrc: String,
  imgSrcC: String,
  imgClassC: String,
})
</script>

<template>
  <div :class="`card custom-card ${cardClass}`">
    <BaseImg v-if="imgSrcA" :src="imgSrcA" alt="" :class="imgClassA" />
    <a v-if="linkTag" href="javascript:void(0);" class="card-anchor" />
    <template v-if="singleImg === 'top'">
      <a href="javascript:void(0);" class="p-3 pb-0 rounded-5">
        <BaseImg :src="imgSingleSrc" alt="" class="rounded-2 card-img-top" />
      </a>
    </template>
    <template v-if="header">
      <template v-if="useDivHeader">
        <div :class="`card-header ${cardHeader}`">
          {{ headerText }}
          <slot name="header" />
        </div>
      </template>
      <template v-else>
        <div :class="`card-header ${cardHeader}`">
          <h5 :class="`card-title ${!imgSrcC ? 'fw-medium' : ''} `">
            {{ headerText }}
          </h5>
        </div>
      </template>
    </template>
    <BaseImg v-if="imgSrc" :src="imgSrc" alt="" :class="imgClass" />
    <template v-if="bodyText">
      <div :class="`card-body ${bodyClass}`">
        <h6 v-if="title" :class="`card-title ${titleClass}`">
          {{ title }}
        </h6>
        <p v-if="subTitle" class="card-subtitle mb-3 text-muted">
          {{ subTitle }}
        </p>
        <slot name="bodyText" />
      </div>
    </template>
    <slot name="outBodyText" />
    <BaseImg v-if="imgSrcB" :src="imgSrcB" alt="" :class="imgClassB" />
    <template v-if="footer">
      <div :class="`card-footer ${cardFooter}`">
        <template v-if="typeof footer === 'string'">
          <span v-html="footer" />
        </template>
        <template v-else>
          <slot name="footer" />
        </template>
      </div>
    </template>
    <BaseImg v-if="imgSrcC" :src="imgSrcC" alt="" :class="imgClassC" />
    <template v-if="singleImg == 'bottom'">
      <a href="javascript:void(0);" class="p-3 pt-0 rounded-5">
        <BaseImg :src="imgSingleSrc" alt="" class="rounded-2 card-img-bottom" />
      </a>
    </template>
  </div>
</template>
