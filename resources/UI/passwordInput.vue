<template>
  <input
    :type="inputType"
    v-model="inputValue"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    class="form-control form-control-lg"
    :required="required"
  />
  <a
    href="javascript:void(0);"
    @click="changeInputType"
    class="show-password-button text-muted"
    type="button"
    id="button-addon2"
  >
    <i class="align-middle" :class="inputType === 'text' ? 'ri-eye-line' : 'ri-eye-off-line'"></i>
  </a>
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
