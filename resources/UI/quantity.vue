<template>
    <button type="button" aria-label="button" :class="decClass" @click="decrementValue"><i
            class="ri-subtract-line"></i></button>
    <input type="text" :class="inputClass" aria-label="quantity" :placeholder="placeholder" :name="name"
        v-model="inputValue">
    <button type="button" aria-label="button" :class="incClass" @click="incrementValue"><i
            class="ri-add-line"></i></button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Define props
const props = defineProps<{
    decClass?: string
    inputClass?: string
    incClass?: string
    initialValue?: number
    name?: string
    placeholder?: string
}>()

const emit = defineEmits<{
    (e: 'input', value: number): void
}>()

// Initialize reactive value
const inputValue = ref<number>(props.initialValue ?? 1)

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
