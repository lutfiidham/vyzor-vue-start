<template>
  <div :class="mainClass">
    <div class="toggle" :class="[customClass, { on: isActive }]" @click="toggleState">
      <span></span>
    </div>
    <template v-if="title">
      {{ title }}
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Define props
const props = defineProps({
  customClass: String,
  isOn: Boolean,
  title: String,
  mainClass: String,
})

// Define emit
const emit = defineEmits(['toggle'])

// Create reactive state
const isActive = ref(props.isOn ?? false)

// Watch for prop change (optional, if you want reactivity on prop update)
watch(
  () => props.isOn,
  (newVal) => {
    isActive.value = newVal ?? false
  }
)

// Toggle function
const toggleState = () => {
  isActive.value = !isActive.value
  emit('toggle', isActive.value)
}
</script>

<style scoped>
.toggle {
  cursor: pointer;
}

.toggle.on {
  background-color: var(--bs-primary) !important;
}

.toggle.on span {
  inset-inline-start: 2.313rem;
}
</style>
