<script setup>
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

import TitleInput from './components/TitleInput.vue'
import DescriptionTextarea from './components/DescriptionTextarea.vue'
import CategorySelect from './components/CategorySelect.vue'
import DifficultySelect from './components/DifficultySelect.vue'
import DurationInput from './components/DurationInput.vue'
import InstructorInput from './components/InstructorInput.vue'
import PublicationDatePicker from './components/PublicationDatePicker.vue'
import PublishedCheckbox from './components/PublishedCheckbox.vue'
import RatingStars from './components/RatingStars.vue'
import FormActions from './components/FormActions.vue'

const emit = defineEmits(['save', 'cancel'])

const formData = reactive({
  title: '',
  description: '',
  category: null,
  difficulty: null,
  duration: 0,
  instructor: '',
  publicationDate: null,
  published: false,
  rating: 0
})

const categories = ref(['Programming', 'Design', 'Marketing'])

const difficulties = ref([
  { name: 'Beginner', value: 'Beginner' },
  { name: 'Intermediate', value: 'Intermediate' },
  { name: 'Advanced', value: 'Advanced' }
])

const pending = ref(false)

const rules = {
  title: { required, minLength: minLength(5) },
  category: { required },
  difficulty: { required },
  duration: {
    required: helpers.withMessage('Duration is required', v => v !== null && v !== undefined),
    between: helpers.withMessage('Duration must be between 5 and 600 minutes', (value) => value >= 5 && value <= 600)
  },
  publicationDate: { required }
}

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) {
    console.error('Form validation failed')
    return
  }

  if (formData.description.length > 500) {
    console.error('Description too long')
    return
  }

  pending.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    emit('save', { ...formData })
    resetForm()
  } catch (error) {
    console.error('Save failed:', error)
  } finally {
    pending.value = false
  }
}

const resetForm = () => {
  Object.assign(formData, {
    title: '',
    description: '',
    category: null,
    difficulty: null,
    duration: 0,
    instructor: '',
    publicationDate: null,
    published: false,
    rating: 0
  })
  v$.value.$reset()
  emit('cancel')
}
</script>

<template>
  <div class="tutorial-form">
    <form @submit.prevent="handleSubmit" class="p-fluid">
      <TitleInput
          v-model="formData.title"
          :error="v$.title.$error"
          @blur="v$.title.$touch()"
      />

      <DescriptionTextarea
          v-model="formData.description"
      />

      <CategorySelect
          v-model="formData.category"
          :error="v$.category.$error"
          :categories="categories"
          @blur="v$.category.$touch()"
      />

      <DifficultySelect
          v-model="formData.difficulty"
          :error="v$.difficulty.$error"
          :options="difficulties"
          @blur="v$.difficulty.$touch()"
      />

      <DurationInput
          v-model="formData.duration"
          :error="v$.duration.$error"
          @blur="v$.duration.$touch()"
      />

      <InstructorInput
          v-model="formData.instructor"
      />

      <PublicationDatePicker
          v-model="formData.publicationDate"
          :error="v$.publicationDate.$error"
          @blur="v$.publicationDate.$touch()"
      />

      <PublishedCheckbox
          v-model="formData.published"
      />

      <RatingStars
          v-model="formData.rating"
      />

      <FormActions
          :pending="pending"
          @cancel="resetForm"
      />
    </form>
  </div>
</template>

<style scoped>
.tutorial-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
