<template>
  <div class="calendar-view">
    <h3>Workout Calendar</h3>
    <div class="calendar-header">
      <button @click="previousMonth">←</button>
      <span class="month-year">{{ currentMonthYear }}</span>
      <button @click="nextMonth">→</button>
    </div>
    <div class="calendar-grid">
      <div class="day-header" v-for="day in weekDays" :key="day">{{ day }}</div>
      <div 
        v-for="date in calendarDates" 
        :key="date.key"
        :class="['calendar-day', { 'has-workout': date.hasWorkout, 'today': date.isToday }]"
      >
        {{ date.day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarView',
  data() {
    return {
      currentDate: new Date(),
      weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      workoutDates: []
    }
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
    },
    calendarDates() {
      // Generate calendar dates logic here
      return [];
    }
  },
  methods: {
    previousMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
  }
}
</script>
