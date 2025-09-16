<script setup>
import Calendar from 'primevue/calendar'

defineProps({
  modelValue: [Date, null],
  error: Boolean
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label for="pubDate">Publication Date</label>
    <Calendar
        id="pubDate"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        dateFormat="yy-mm-dd"
        :class="{ 'p-invalid': error }"
    />
    <small v-if="error" class="p-error">
      Publication date is required.
    </small>
  </div>
</template>

<style scoped>

</style>