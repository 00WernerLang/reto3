<script setup>
import RadioButton from 'primevue/radiobutton'

const props = defineProps({
  modelValue: [String, null],
  error: Boolean,
  options: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-field">
    <label>Difficulty Level</label>
    <div class="p-formgrid p-grid">
      <div v-for="option in options" :key="option.value" class="p-field-radiobutton p-col-12 p-md-4">
        <RadioButton
            :id="option.value"
            name="difficulty"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :value="option.value"
            :inputClass="option.value"
        />
        <label :for="option.value">{{ option.name }}</label>
      </div>
    </div>
    <small v-if="error" class="p-error">
      Difficulty level is required.
    </small>
  </div>
</template>

<style scoped>

</style>