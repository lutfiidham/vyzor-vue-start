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
  <div class="card custom-card" :class="[customCardClass]">
    <template v-if="showCardHeader">
      <div class="card-header" :class="[cardHeaderClass]">
        <div class="card-title" v-html="title" />
        <slot name="showheader" />
      </div>
    </template>
    <slot name="cardBodyUpperContent" />
    <div :id="cardBodyId" class="card-body" :class="[cardClassBody]">
      <slot />
    </div>
    <slot name="cardBodyDown" />

    <template v-if="showCardFooter">
      <div class="card-footer" :class="[cardFooterClass]">
        <slot name="cardFooter" />
      </div>
      <div v-if="cardFooter2" class="card-footer">
        <slot name="cardFooter2" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
