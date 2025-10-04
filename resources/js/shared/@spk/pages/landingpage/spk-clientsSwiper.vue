<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>
<template>
  <div class="card custom-card trusted-clients-container mb-0 border border-dashed">
    <div class="card-body">
      <BaseImg :src="card.imgsrc" alt="" class="img-fluid" />
    </div>
  </div>
</template>

<style scoped></style>
