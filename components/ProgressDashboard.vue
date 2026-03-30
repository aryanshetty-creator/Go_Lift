<template>
  <div class="progress-dashboard">
    <h2>Progress Dashboard</h2>
    <div class="dashboard-grid">
      <div class="stat-widget">
        <h3>Total Workouts</h3>
        <div class="stat-value">{{ stats.totalWorkouts }}</div>
        <div class="stat-change positive">+12 this month</div>
      </div>
      <div class="stat-widget">
        <h3>Total Volume</h3>
        <div class="stat-value">{{ formatNumber(stats.totalVolume) }} kg</div>
        <div class="stat-change positive">+15% vs last month</div>
      </div>
      <div class="stat-widget">
        <h3>Personal Records</h3>
        <div class="stat-value">{{ stats.personalRecords }}</div>
        <div class="stat-change positive">+3 this month</div>
      </div>
      <div class="stat-widget">
        <h3>Current Streak</h3>
        <div class="stat-value">{{ stats.streak }} days</div>
        <div class="stat-change neutral">Keep it up!</div>
      </div>
    </div>
    <div class="charts-section">
      <div class="chart-card">
        <h3>Volume Over Time</h3>
        <canvas ref="volumeChart"></canvas>
      </div>
      <div class="chart-card">
        <h3>Strength Progress</h3>
        <canvas ref="strengthChart"></canvas>
      </div>
    </div>
    <div class="recent-prs">
      <h3>Recent Personal Records</h3>
      <div v-for="pr in recentPRs" :key="pr.id" class="pr-item">
        <span class="pr-exercise">{{ pr.exercise }}</span>
        <span class="pr-weight">{{ pr.weight }} kg</span>
        <span class="pr-date">{{ pr.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressDashboard',
  data() {
    return {
      stats: {
        totalWorkouts: 156,
        totalVolume: 425000,
        personalRecords: 23,
        streak: 14
      },
      recentPRs: [
        { id: 1, exercise: 'Bench Press', weight: 100, date: '2024-03-25' },
        { id: 2, exercise: 'Squat', weight: 140, date: '2024-03-22' },
        { id: 3, exercise: 'Deadlift', weight: 180, date: '2024-03-20' }
      ]
    }
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    }
  }
}
</script>

<style scoped>
.progress-dashboard {
  padding: 20px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
.stat-widget {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.stat-value {
  font-size: 2.5em;
  font-weight: bold;
  color: #4CAF50;
  margin: 10px 0;
}
.stat-change {
  font-size: 0.9em;
}
.stat-change.positive { color: #4CAF50; }
.stat-change.negative { color: #F44336; }
.stat-change.neutral { color: #999; }
.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.chart-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.pr-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  background: #f5f5f5;
  border-radius: 5px;
}
.pr-exercise {
  font-weight: bold;
}
.pr-weight {
  color: #4CAF50;
  font-weight: bold;
}
</style>
