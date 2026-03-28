<template>
  <div class="workout-recommendations">
    <h3>Recommended Workouts</h3>
    <div v-for="workout in recommendations" :key="workout.id">
      <h4>{{ workout.name }}</h4>
      <p>{{ workout.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutRecommendations',
  data() {
    return {
      recommendations: [
        { id: 1, name: 'Upper Body', description: 'Focus on chest and back' }
      ]
    }
  }
}
</script>
