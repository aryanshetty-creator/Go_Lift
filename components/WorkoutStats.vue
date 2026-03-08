<template>
  <div class="stats-container">
    <h3>Workout Statistics</h3>
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">{{ totalWorkouts }}</span>
        <span class="stat-label">Total Workouts</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">{{ weeklyGoal }}</span>
        <span class="stat-label">Weekly Goal</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutStats',
  props: {
    totalWorkouts: {
      type: Number,
      default: 0
    }
  },
  computed: {
    weeklyGoal() {
      return Math.max(0, 7 - this.totalWorkouts);
    }
  }
}
</script>
