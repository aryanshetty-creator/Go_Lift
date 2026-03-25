<template>
  <div class="workout-scheduler">
    <h3>Schedule Workouts</h3>
    <div class="schedule-form">
      <select v-model="day">
        <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
      </select>
      <input v-model="time" type="time" />
      <input v-model="workout" placeholder="Workout type" />
      <button @click="scheduleWorkout">Schedule</button>
    </div>
    <div class="scheduled-workouts">
      <div v-for="(w, index) in schedule" :key="index">
        {{ w.day }} at {{ w.time }}: {{ w.workout }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutScheduler',
  data() {
    return {
      day: 'Monday',
      time: '09:00',
      workout: '',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      schedule: []
    }
  },
  methods: {
    scheduleWorkout() {
      this.schedule.push({ day: this.day, time: this.time, workout: this.workout });
      this.workout = '';
    }
  }
}
</script>
