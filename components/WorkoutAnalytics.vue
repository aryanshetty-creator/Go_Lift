<template>
  <div class="workout-analytics">
    <h2>Workout Analytics</h2>
    <div class="analytics-grid">
      <div class="stat-card">
        <h3>Total Volume</h3>
        <p class="stat-value">{{ totalVolume }} kg</p>
      </div>
      <div class="stat-card">
        <h3>Average Intensity</h3>
        <p class="stat-value">{{ averageIntensity }}%</p>
      </div>
      <div class="stat-card">
        <h3>Workout Frequency</h3>
        <p class="stat-value">{{ workoutFrequency }} days/week</p>
      </div>
      <div class="stat-card">
        <h3>Total Time</h3>
        <p class="stat-value">{{ totalTime }} hours</p>
      </div>
    </div>
    <div class="chart-container">
      <canvas ref="analyticsChart"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutAnalytics',
  data() {
    return {
      totalVolume: 0,
      averageIntensity: 0,
      workoutFrequency: 0,
      totalTime: 0
    }
  },
  mounted() {
    this.calculateAnalytics()
    this.renderChart()
  },
  methods: {
    calculateAnalytics() {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]')
      this.totalVolume = workouts.reduce((sum, w) => sum + (w.volume || 0), 0)
      this.averageIntensity = workouts.reduce((sum, w) => sum + (w.intensity || 0), 0) / workouts.length || 0
      this.workoutFrequency = workouts.length / 4
      this.totalTime = workouts.reduce((sum, w) => sum + (w.duration || 0), 0) / 60
    },
    renderChart() {
      // Chart rendering logic
    }
  }
}
</script>

<style scoped>
.workout-analytics {
  padding: 20px;
}
.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
.stat-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.stat-value {
  font-size: 2em;
  font-weight: bold;
  color: #4CAF50;
}
</style>
