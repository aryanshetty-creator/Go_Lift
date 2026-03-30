<template>
  <div class="muscle-recovery-tracker">
    <h2>Muscle Recovery Tracker</h2>
    <div class="muscle-groups">
      <div v-for="muscle in muscleGroups" :key="muscle.name" class="muscle-card">
        <h3>{{ muscle.name }}</h3>
        <div class="recovery-indicator" :class="getRecoveryClass(muscle.recovery)">
          <span>{{ muscle.recovery }}% Recovered</span>
        </div>
        <p class="last-trained">Last trained: {{ muscle.lastTrained }}</p>
        <button @click="markAsTrained(muscle)" class="btn-small">Mark as Trained</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MuscleRecoveryTracker',
  data() {
    return {
      muscleGroups: [
        { name: 'Chest', recovery: 100, lastTrained: '2 days ago' },
        { name: 'Back', recovery: 85, lastTrained: '1 day ago' },
        { name: 'Legs', recovery: 60, lastTrained: 'Today' },
        { name: 'Shoulders', recovery: 100, lastTrained: '3 days ago' },
        { name: 'Arms', recovery: 90, lastTrained: '2 days ago' },
        { name: 'Core', recovery: 100, lastTrained: '2 days ago' }
      ]
    }
  },
  methods: {
    getRecoveryClass(recovery) {
      if (recovery >= 90) return 'fully-recovered';
      if (recovery >= 70) return 'mostly-recovered';
      if (recovery >= 50) return 'partially-recovered';
      return 'not-recovered';
    },
    markAsTrained(muscle) {
      muscle.recovery = 0;
      muscle.lastTrained = 'Today';
    }
  }
}
</script>

<style scoped>
.muscle-recovery-tracker {
  padding: 20px;
}
.muscle-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.muscle-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.recovery-indicator {
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
}
.fully-recovered { background: #4CAF50; color: white; }
.mostly-recovered { background: #8BC34A; color: white; }
.partially-recovered { background: #FFC107; color: black; }
.not-recovered { background: #F44336; color: white; }
</style>
