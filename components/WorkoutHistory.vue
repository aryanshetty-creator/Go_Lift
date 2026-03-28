<template>
  <div class="workout-history">
    <h3>Workout History</h3>
    <div v-for="workout in history" :key="workout.id">
      <p>{{ workout.date }}: {{ workout.type }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutHistory',
  data() {
    return {
      history: [
        { id: 1, date: '2024-01-15', type: 'Upper Body' }
      ]
    }
  }
}
</script>
