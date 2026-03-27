<template>
  <div class="exercise-video">
    <h3>Exercise Videos</h3>
    <select v-model="selectedExercise">
      <option v-for="ex in exercises" :key="ex" :value="ex">{{ ex }}</option>
    </select>
    <div class="video-placeholder">
      <p>Video tutorial for {{ selectedExercise }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExerciseVideo',
  data() {
    return {
      selectedExercise: 'Squat',
      exercises: ['Squat', 'Bench Press', 'Deadlift', 'Pull-up']
    }
  }
}
</script>
