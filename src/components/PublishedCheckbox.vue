<script setup>
import Checkbox from 'primevue/checkbox'

defineProps({
  modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field-checkbox">
    <Checkbox
        id="published"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :binary="true"
    />
    <label for="published">Published</label>
  </div>
</template>

<style scoped>

</style>