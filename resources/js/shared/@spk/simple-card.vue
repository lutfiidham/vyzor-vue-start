<script setup>
defineProps({
  customCardClass: String,
  cardHeaderClass: String,
  showCardHeader: { type: Boolean, default: true },
  title: String,
  cardClassBody: String,
  showCardFooter: { type: Boolean, default: false },
  cardFooterClass: String,
  cardFooter2: { type: Boolean, default: false },
  cardBodyId: String,

})
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <template v-if="showCardHeader">
      <div :class="['card-header', cardHeaderClass]">
        <div class="card-title" v-html="title"> </div>
        <slot name="showheader" />
      </div>
    </template>
    <slot name="cardBodyUpperContent" />
    <div :class="['card-body', cardClassBody]" :id="cardBodyId">
      <slot />
    </div>
    <slot name="cardBodyDown" />

    <template v-if="showCardFooter">
      <div :class="['card-footer', cardFooterClass]">
        <slot name="cardFooter" />
      </div>
      <div class="card-footer" v-if="cardFooter2">
        <slot name="cardFooter2" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
