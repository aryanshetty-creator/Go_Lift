<template>
  <div class="workout-reminders">
    <h3>Workout Reminders</h3>
    <div class="reminder-setup">
      <input v-model="time" type="time" />
      <button @click="setReminder">Set Reminder</button>
    </div>
    <p v-if="reminderSet">Reminder set for {{ time }}</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutReminders',
  data() {
    return { time: '09:00', reminderSet: false }
  },
  methods: {
    setReminder() {
      this.reminderSet = true;
    }
  }
}
</script>
