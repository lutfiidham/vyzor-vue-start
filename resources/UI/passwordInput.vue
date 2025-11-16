<script setup>
import { ref, watch } from 'vue'

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

function changeInputType() {
  inputType.value = inputType.value === 'text' ? 'password' : 'text'
}

watch(inputValue, newValue => {
  emit('update:modelValue', newValue)
})

watch(
  () => props.modelValue,
  newValue => {
    inputValue.value = newValue || ''
  },
)
</script>

<template>
  <div class="input-group">
    <input
      :id="id"
      v-model="inputValue"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      class="form-control form-control-lg"
      :required="required"
    >
    <button
      type="button"
      class="btn btn-outline-secondary password-toggle"
      style="border-left: none"
      :title="inputType === 'text' ? 'Sembunyikan password' : 'Tampilkan password'"
      @click="changeInputType"
    >
      <i
        class="align-middle transition-transform duration-200 ease-in-out"
        :class="inputType === 'text' ? 'ri-eye-line' : 'ri-eye-off-line'"
      />
    </button>
  </div>
</template>

<style scoped>
.password-toggle i {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;
  transform: scale(1);
}

.password-toggle:hover i {
  transform: scale(1.15);
  opacity: 1;
}

.password-toggle:active i {
  transform: scale(0.9);
  transition-duration: 0.15s;
}

/* Smooth transition for icon change */
.password-toggle i.ri-eye-line,
.password-toggle i.ri-eye-off-line {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
