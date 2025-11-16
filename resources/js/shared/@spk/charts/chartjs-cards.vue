<script setup>
defineProps({
  customCardClass: String,
  cardHeaderClass: String,
  title: String,
  cardBodyClass: String,
  type: {
    type: Object,
    required: true,
  },
  data: {
    type: [Object, Array],
    required: true,
  },
})
</script>

<template>
  <div class="card custom-card" :class="[customCardClass]">
    <div class="card-header" :class="[cardHeaderClass]">
      <div class="card-title">
        {{ title }}
      </div>
    </div>
    <div class="card-body" :class="[cardBodyClass]">
      <component :is="type" :chart-data="data" style="height: 300px" />
    </div>
  </div>
</template>

<style scoped></style>
