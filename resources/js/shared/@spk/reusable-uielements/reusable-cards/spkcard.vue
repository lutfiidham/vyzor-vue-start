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
    <BaseImg :src="imgSrcA" alt="" :class="imgClassA" v-if="imgSrcA" />
    <a href="javascript:void(0);" class="card-anchor" v-if="linkTag"></a>
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
    <BaseImg :src="imgSrc" alt="" v-if="imgSrc" :class="imgClass" />
    <template v-if="bodyText">
      <div :class="`card-body ${bodyClass}`">
        <h6 :class="`card-title ${titleClass}`" v-if="title">{{ title }}</h6>
        <p class="card-subtitle mb-3 text-muted" v-if="subTitle">{{ subTitle }}</p>
        <slot name="bodyText" />
      </div>
    </template>
    <slot name="outBodyText"></slot>
    <BaseImg :src="imgSrcB" alt="" :class="imgClassB" v-if="imgSrcB" />
    <template v-if="footer">
      <div :class="`card-footer ${cardFooter}`">
        <template v-if="typeof footer === 'string'">
          <span v-html="footer"></span>
        </template>
        <template v-else>
          <slot name="footer" />
        </template>
      </div>
    </template>
    <BaseImg :src="imgSrcC" alt="" v-if="imgSrcC" :class="imgClassC" />
    <template v-if="singleImg == 'bottom'">
      <a href="javascript:void(0);" class="p-3 pt-0 rounded-5">
        <BaseImg :src="imgSingleSrc" alt="" class="rounded-2 card-img-bottom" />
      </a>
    </template>
  </div>
</template>
