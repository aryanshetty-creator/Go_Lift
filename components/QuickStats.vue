<template>
  <div class="quick-stats">
    <h3>Quick Stats</h3>
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-icon">🏋️</div>
        <div class="stat-info">
          <span class="stat-value">{{ totalWorkouts }}</span>
          <span class="stat-label">Total Workouts</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⏱️</div>
        <div class="stat-info">
          <span class="stat-value">{{ totalMinutes }}</span>
          <span class="stat-label">Minutes Trained</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔥</div>
        <div class="stat-info">
          <span class="stat-value">{{ caloriesBurned }}</span>
          <span class="stat-label">Calories Burned</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-info">
          <span class="stat-value">{{ currentStreak }}</span>
          <span class="stat-label">Day Streak</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickStats',
  data() {
    return {
      totalWorkouts: 0,
      totalMinutes: 0,
      caloriesBurned: 0,
      currentStreak: 0
    }
  },
  mounted() {
    this.loadStats();
  },
  methods: {
    loadStats() {
      // Load from localStorage or API
      this.totalWorkouts = 45;
      this.totalMinutes = 2250;
      this.caloriesBurned = 15000;
      this.currentStreak = 7;
    }
  }
}
</script>
