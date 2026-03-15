<template>
  <div class="workout-reminder">
    <h3>Set Workout Reminders</h3>
    <div class="reminder-form">
      <select v-model="selectedDay">
        <option value="">Select Day</option>
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>
      <input v-model="reminderTime" type="time" />
      <button @click="addReminder">Add Reminder</button>
    </div>
    <ul class="reminders-list">
      <li v-for="(reminder, index) in reminders" :key="index">
        <span>{{ reminder.day }} at {{ reminder.time }}</span>
        <button @click="removeReminder(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkoutReminder',
  data() {
    return {
      selectedDay: '',
      reminderTime: '09:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      reminders: []
    }
  },
  methods: {
    addReminder() {
      if (this.selectedDay && this.reminderTime) {
        this.reminders.push({
          day: this.selectedDay,
          time: this.reminderTime
        });
        this.selectedDay = '';
        this.reminderTime = '09:00';
      }
    },
    removeReminder(index) {
      this.reminders.splice(index, 1);
    }
  }
}
</script>
