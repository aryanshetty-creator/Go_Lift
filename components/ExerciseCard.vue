<template>
  <div class="exercise-card">
    <div class="exercise-header">
      <h4>{{ exercise.name }}</h4>
      <span class="exercise-type">{{ exercise.type }}</span>
    </div>
    <div class="exercise-details">
      <span>Sets: {{ exercise.sets }}</span>
      <span>Reps: {{ exercise.reps }}</span>
      <span>Weight: {{ exercise.weight }}kg</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: {
      type: Object,
      required: true
    }
  }
}
</script>
