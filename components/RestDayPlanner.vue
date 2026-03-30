<template>
  <div class="rest-day-planner">
    <h2>Rest Day Planner</h2>
    <div class="recovery-status">
      <h3>Recovery Status: {{ recoveryStatus }}</h3>
      <div class="progress-bar">
        <div class="progress" :style="{ width: recoveryPercentage + '%' }"></div>
      </div>
    </div>
    <div class="activities">
      <h3>Recommended Activities</h3>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          <input type="checkbox" :id="activity.id" v-model="activity.completed">
          <label :for="activity.id">{{ activity.name }}</label>
        </li>
      </ul>
    </div>
    <button @click="scheduleRestDay" class="btn-primary">Schedule Rest Day</button>
  </div>
</template>

<script>
export default {
  name: 'RestDayPlanner',
  data() {
    return {
      recoveryStatus: 'Good',
      recoveryPercentage: 75,
      activities: [
        { id: 'yoga', name: 'Light Yoga', completed: false },
        { id: 'walk', name: 'Walking', completed: false },
        { id: 'stretch', name: 'Stretching', completed: false },
        { id: 'foam', name: 'Foam Rolling', completed: false },
        { id: 'massage', name: 'Self Massage', completed: false }
      ]
    }
  },
  methods: {
    scheduleRestDay() {
      alert('Rest day scheduled!')
    }
  }
}
</script>

<style scoped>
.rest-day-planner {
  padding: 20px;
}
.recovery-status {
  margin: 20px 0;
}
.progress-bar {
  width: 100%;
  height: 30px;
  background: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s;
}
.activities ul {
  list-style: none;
  padding: 0;
}
.activities li {
  padding: 10px;
  margin: 5px 0;
  background: #f5f5f5;
  border-radius: 5px;
}
</style>
