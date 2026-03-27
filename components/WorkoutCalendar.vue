<template>
  <div class="workout-calendar">
    <h3>Workout Calendar</h3>
    <div class="calendar">
      <div v-for="day in days" :key="day" 
           :class="['day', { workout: day.hasWorkout }]">
        {{ day.date }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutCalendar',
  data() {
    return {
      days: Array.from({length: 30}, (_, i) => ({
        date: i + 1,
        hasWorkout: Math.random() > 0.5
      }))
    }
  }
}
</script>
