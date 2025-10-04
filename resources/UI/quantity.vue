<template>
  <button type="button" aria-label="button" :class="decClass" @click="decrementValue">
    <i class="ri-subtract-line"></i>
  </button>
  <input
    type="text"
    :class="inputClass"
    aria-label="quantity"
    :placeholder="placeholder"
    :name="name"
    v-model="inputValue"
  />
  <button type="button" aria-label="button" :class="incClass" @click="incrementValue">
    <i class="ri-add-line"></i>
  </button>
</template>

<script setup>
import { ref, watch } from 'vue'

// Define props
const props = defineProps({
  decClass: String,
  inputClass: String,
  incClass: String,
  initialValue: Number,
  name: String,
  placeholder: String,
})

// Define emits
const emit = defineEmits(['input'])
// Initialize reactive value
const inputValue = ref(props.initialValue ?? 1)

// Increment function
const incrementValue = () => {
  if (isNaN(inputValue.value)) {
    inputValue.value = 1
  }
  inputValue.value = Number(inputValue.value) + 1
}

// Decrement function
const decrementValue = () => {
  if (isNaN(inputValue.value)) {
    inputValue.value = 1
  } else if (inputValue.value > 1) {
    inputValue.value = Number(inputValue.value) - 1
  }
}

// Emit value to parent on change
watch(inputValue, () => {
  emit('input', inputValue.value)
})
</script>
