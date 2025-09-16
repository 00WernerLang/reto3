<script setup>
import Textarea from 'primevue/textarea'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="description">Description</label>
    <Textarea
        id="description"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        rows="5"
        cols="30"
        placeholder="Describe the tutorial content"
        :maxLength="500"
    />
    <small v-if="modelValue && modelValue.length > 500" class="p-error">
      Description must not exceed 500 characters.
    </small>
  </div>
</template>

<style scoped>

</style>