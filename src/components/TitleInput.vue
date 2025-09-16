<script setup>
import InputText from 'primevue/inputtext'

defineProps({
  modelValue: String,
  error: Boolean
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="title">Tutorial Title</label>
    <InputText
        id="title"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        placeholder="Enter tutorial title"
        :class="{ 'p-invalid': error }"
    />
    <small v-if="error" class="p-error">
      Title is required and must be at least 5 characters.
    </small>
  </div>
</template>
<style scoped>

</style>