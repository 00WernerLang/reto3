<script setup>
import Rating from 'primevue/rating'

defineProps({
  modelValue: Number
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="rating">Rating</label>
    <Rating
        id="rating"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :stars="5"
        :cancel="false"
    />
  </div>
</template>

<style scoped>

</style>