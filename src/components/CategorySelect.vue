<script setup>
import Dropdown from 'primevue/dropdown'

const props = defineProps({
  modelValue: [String, null],
  error: Boolean,
  categories: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="category">Category</label>
    <Dropdown
        id="category"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :options="categories"
        placeholder="Select a category"
        :class="{ 'p-invalid': error }"
    />
    <small v-if="error" class="p-error">
      Category is required.
    </small>
  </div>
</template>

<style scoped>

</style>