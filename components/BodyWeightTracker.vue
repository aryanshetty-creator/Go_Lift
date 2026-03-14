<template>
  <div class="weight-tracker">
    <h3>Body Weight Tracker</h3>
    <div class="weight-input">
      <input 
        v-model.number="currentWeight" 
        type="number" 
        placeholder="Weight (kg)"
        step="0.1"
      />
      <input v-model="date" type="date" />
      <button @click="addWeight">Log Weight</button>
    </div>
    <div class="weight-stats">
      <div class="stat-box">
        <span class="label">Current</span>
        <span class="value">{{ latestWeight }} kg</span>
      </div>
      <div class="stat-box">
        <span class="label">Change</span>
        <span class="value">{{ weightChange }} kg</span>
      </div>
      <div class="stat-box">
        <span class="label">Goal</span>
        <span class="value">{{ goalWeight }} kg</span>
      </div>
    </div>
    <ul class="weight-history">
      <li v-for="(entry, index) in weightHistory" :key="index">
        <span>{{ entry.date }}</span>
        <span>{{ entry.weight }} kg</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BodyWeightTracker',
  data() {
    return {
      currentWeight: 0,
      date: new Date().toISOString().split('T')[0],
      goalWeight: 75,
      weightHistory: []
    }
  },
  computed: {
    latestWeight() {
      return this.weightHistory.length > 0 
        ? this.weightHistory[this.weightHistory.length - 1].weight 
        : 0;
    },
    weightChange() {
      if (this.weightHistory.length < 2) return 0;
      const first = this.weightHistory[0].weight;
      const latest = this.latestWeight;
      return (latest - first).toFixed(1);
    }
  },
  methods: {
    addWeight() {
      if (this.currentWeight > 0) {
        this.weightHistory.push({
          weight: this.currentWeight,
          date: this.date
        });
        this.currentWeight = 0;
      }
    }
  }
}
</script>
