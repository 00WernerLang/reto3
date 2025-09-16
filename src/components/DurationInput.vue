<script setup>
import InputNumber from 'primevue/inputnumber'

defineProps({
  modelValue: Number,
  error: Boolean
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="duration">Duration (Minutes)</label>
    <InputNumber
        id="duration"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :min="5"
        :max="600"
        showButtons
        placeholder="Enter duration in minutes"
        :class="{ 'p-invalid': error }"
    />
    <small v-if="error" class="p-error">
      Duration must be between 5 and 600 minutes.
    </small>
  </div>
</template>

<style scoped>

</style>