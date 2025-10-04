<template>
  <input
    :type="inputType"
    v-model="inputValue"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    class="form-control form-control-lg"
    :required="required"
  >
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
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialValue: String,
  name: String,
  id: String,
  placeholder: String,
  required: Boolean,
});

const emit = defineEmits(['input']);

const inputType = ref('password');
const inputValue = ref(props.initialValue || '');

const changeInputType = () => {
  inputType.value = inputType.value === 'text' ? 'password' : 'text';
};

watch(inputValue, () => {
  emit('input', inputValue.value);
});
</script>
