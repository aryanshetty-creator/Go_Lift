<template>
  <div class="history-container">
    <h3>Workout History</h3>
    <div v-if="history.length === 0" class="empty-state">
      <p>No workout history yet. Start tracking!</p>
    </div>
    <ul v-else class="history-list">
      <li v-for="(entry, index) in history" :key="index" class="history-item">
        <div class="history-date">{{ formatDate(entry.date) }}</div>
        <div class="history-workout">{{ entry.workout }}</div>
        <div class="history-duration">{{ entry.duration }} min</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkoutHistory',
  props: {
    history: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  }
}
</script>
