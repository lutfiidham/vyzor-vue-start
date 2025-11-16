<template>
  <div :class="mainClass">
    <div class="toggle" :class="[customClass, { on: isActive }, `toggle-${title || 'md'}`]" @click="toggleState">
      <span></span>
    </div>
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
  background-color: rgba(148, 163, 184, 0.3);
  border: 1px solid rgba(148, 163, 184, 0.2);
  transition: all 0.3s ease;
}

.toggle:hover {
  background-color: rgba(148, 163, 184, 0.4);
}

.toggle.on {
  background-color: var(--success-rgb) !important;
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.1);
}

.toggle.on span {
  inset-inline-start: 2.313rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle span {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Custom sizes for better visibility */
.toggle-md {
  height: 1.563rem;
  width: 3.75rem;
}

.toggle-md span {
  inset-inline-start: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
}

.toggle-md.on span {
  inset-inline-start: 2.313rem;
}

.toggle-sm {
  height: 1.25rem !important;
  width: 2.25rem !important;
}

.toggle-sm span {
  inset-inline-start: 0.125rem !important;
  width: 0.875rem !important;
  height: 0.875rem !important;
}

.toggle-sm.on span {
  inset-inline-start: 1.25rem !important;
}

.toggle-lg {
  height: 2rem !important;
  width: 3.5rem !important;
}

.toggle-lg span {
  inset-inline-start: 0.25rem !important;
  width: 1.5rem !important;
  height: 1.5rem !important;
}

.toggle-lg.on span {
  inset-inline-start: 1.75rem !important;
}

/* Special color variants */
.toggle-primary.on {
  background-color: var(--primary-rgb) !important;
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
}

.toggle-secondary.on {
  background-color: var(--secondary-rgb) !important;
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1);
}

.toggle-warning.on {
  background-color: var(--warning-rgb) !important;
  border-color: rgba(251, 146, 60, 0.5);
  box-shadow: 0 0 0 2px rgba(251, 146, 60, 0.1);
}

.toggle-info.on {
  background-color: var(--info-rgb) !important;
  border-color: rgba(14, 165, 233, 0.5);
  box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.1);
}

.toggle-danger.on {
  background-color: var(--danger-rgb) !important;
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}
</style>
