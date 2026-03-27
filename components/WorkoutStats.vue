<template>
  <div class="workout-stats">
    <h3>Your Stats</h3>
    <div class="stats-grid">
      <div class="stat">
        <span class="label">Total Workouts</span>
        <span class="value">{{ totalWorkouts }}</span>
      </div>
      <div class="stat">
        <span class="label">This Month</span>
        <span class="value">{{ monthlyWorkouts }}</span>
      </div>
      <div class="stat">
        <span class="label">Avg Duration</span>
        <span class="value">{{ avgDuration }} min</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutStats',
  data() {
    return {
      totalWorkouts: 150,
      monthlyWorkouts: 20,
      avgDuration: 55
    }
  }
}
</script>
