<script setup>
import Button from 'primevue/button'

defineProps({
  pending: Boolean
})

defineEmits(['cancel'])
</script>

<template>
  <div class="p-field p-mt-4">
    <Button
        type="submit"
        label="Save"
        :disabled="pending"
        :loading="pending"
    />
    <Button
        type="button"
        label="Cancel"
        severity="secondary"
        class="p-ml-2"
        @click="$emit('cancel')"
    />
  </div>
</template>

<style scoped>

</style>