<template>
  <div class="workout-summary">
    <h3>Today's Summary</h3>
    <div class="summary-stats">
      <p>Exercises: {{ exerciseCount }}</p>
      <p>Total Sets: {{ totalSets }}</p>
      <p>Duration: {{ duration }} min</p>
      <p>Calories: {{ calories }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutSummary',
  data() {
    return { exerciseCount: 5, totalSets: 20, duration: 60, calories: 400 }
  }
}
</script>
