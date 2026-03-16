<template>
  <div class="sleep-tracker">
    <h3>Sleep Tracker</h3>
    <div class="sleep-input">
      <label>Hours Slept:</label>
      <input v-model.number="hoursSlept" type="number" step="0.5" min="0" max="24" />
      <label>Quality:</label>
      <select v-model="quality">
        <option value="poor">Poor</option>
        <option value="fair">Fair</option>
        <option value="good">Good</option>
        <option value="excellent">Excellent</option>
      </select>
      <button @click="logSleep">Log Sleep</button>
    </div>
    <div class="sleep-stats">
      <div class="stat">
        <span>Average Sleep</span>
        <strong>{{ averageSleep }} hrs</strong>
      </div>
      <div class="stat">
        <span>This Week</span>
        <strong>{{ weeklySleep }} hrs</strong>
      </div>
    </div>
    <ul class="sleep-history">
      <li v-for="(entry, index) in sleepLog" :key="index">
        <span>{{ entry.date }}</span>
        <span>{{ entry.hours }} hrs - {{ entry.quality }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SleepTracker',
  data() {
    return {
      hoursSlept: 8,
      quality: 'good',
      sleepLog: []
    }
  },
  computed: {
    averageSleep() {
      if (this.sleepLog.length === 0) return 0;
      const total = this.sleepLog.reduce((sum, entry) => sum + entry.hours, 0);
      return (total / this.sleepLog.length).toFixed(1);
    },
    weeklySleep() {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const weeklyEntries = this.sleepLog.filter(e => new Date(e.date) >= weekAgo);
      return weeklyEntries.reduce((sum, entry) => sum + entry.hours, 0);
    }
  },
  methods: {
    logSleep() {
      this.sleepLog.push({
        hours: this.hoursSlept,
        quality: this.quality,
        date: new Date().toISOString().split('T')[0]
      });
    }
  }
}
</script>
