<template>
  <div class="input-group">
    <input
      :type="inputType"
      v-model="inputValue"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="form-control form-control-lg"
      :required="required"
    />
    <button
      type="button"
      @click="changeInputType"
      class="btn btn-outline-secondary"
      style="border-left: none;"
    >
      <i class="align-middle" :class="inputType === 'text' ? 'ri-eye-line' : 'ri-eye-off-line'"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  name: String,
  id: String,
  placeholder: String,
  required: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const inputType = ref('password')
const inputValue = ref(props.modelValue || '')

const changeInputType = () => {
  inputType.value = inputType.value === 'text' ? 'password' : 'text'
}

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue || ''
})
</script>
