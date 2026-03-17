<template>
  <div class="cardio-tracker">
    <h3>Cardio Tracker</h3>
    <div class="cardio-form">
      <select v-model="activity">
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
        <option value="rowing">Rowing</option>
        <option value="walking">Walking</option>
      </select>
      <input v-model.number="distance" type="number" placeholder="Distance (km)" step="0.1" />
      <input v-model.number="duration" type="number" placeholder="Duration (min)" />
      <input v-model.number="avgHeartRate" type="number" placeholder="Avg HR" />
      <button @click="logCardio">Log Activity</button>
    </div>
    <div class="cardio-stats">
      <div class="stat">
        <span>Total Distance</span>
        <strong>{{ totalDistance }} km</strong>
      </div>
      <div class="stat">
        <span>Total Time</span>
        <strong>{{ totalTime }} min</strong>
      </div>
      <div class="stat">
        <span>Avg Pace</span>
        <strong>{{ avgPace }} min/km</strong>
      </div>
    </div>
    <ul class="cardio-history">
      <li v-for="(entry, index) in cardioLog" :key="index">
        <span>{{ entry.activity }}</span>
        <span>{{ entry.distance }}km in {{ entry.duration }}min</span>
        <span>HR: {{ entry.avgHeartRate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardioTracker',
  data() {
    return {
      activity: 'running',
      distance: 0,
      duration: 0,
      avgHeartRate: 0,
      cardioLog: []
    }
  },
  computed: {
    totalDistance() {
      return this.cardioLog.reduce((sum, entry) => sum + entry.distance, 0).toFixed(1);
    },
    totalTime() {
      return this.cardioLog.reduce((sum, entry) => sum + entry.duration, 0);
    },
    avgPace() {
      if (this.totalDistance === 0) return 0;
      return (this.totalTime / this.totalDistance).toFixed(2);
    }
  },
  methods: {
    logCardio() {
      if (this.distance > 0 && this.duration > 0) {
        this.cardioLog.push({
          activity: this.activity,
          distance: this.distance,
          duration: this.duration,
          avgHeartRate: this.avgHeartRate,
          date: new Date().toISOString()
        });
        this.distance = 0;
        this.duration = 0;
        this.avgHeartRate = 0;
      }
    }
  }
}
</script>
