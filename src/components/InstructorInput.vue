<script setup>
import InputText from 'primevue/inputtext'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="instructor">Instructor</label>
    <InputText
        id="instructor"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        placeholder="Enter instructor name"
    />
  </div>
</template>

<style scoped>

</style>