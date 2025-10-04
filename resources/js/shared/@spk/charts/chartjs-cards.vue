<script  setup>

defineProps({
  customCardClass: String,
  cardHeaderClass: String,
  title: String,
  cardBodyClass: String,
  type: {
    type: Object,
    required: true
  },
  data: {
    type: [Object, Array],
    required: true
  }
})
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-header', cardHeaderClass]">
      <div class="card-title">{{ title }}</div>
    </div>
    <div :class="['card-body', cardBodyClass]">
      <component :is="type" :chartData="data" style="height:300px" />
    </div>
  </div>
</template>

<style scoped></style>
