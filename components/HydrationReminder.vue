<template>
  <div class="hydration-reminder">
    <h3>Hydration Reminder</h3>
    <div class="reminder-settings">
      <label>Remind me every:</label>
      <select v-model="interval">
        <option value="30">30 minutes</option>
        <option value="60">1 hour</option>
        <option value="120">2 hours</option>
      </select>
      <button @click="toggleReminder">
        {{ reminderActive ? 'Stop' : 'Start' }} Reminders
      </button>
    </div>
    <p v-if="reminderActive" class="status">
      ✅ Reminders active - Next in {{ timeUntilNext }} min
    </p>
  </div>
</template>

<script>
export default {
  name: 'HydrationReminder',
  data() {
    return {
      interval: 60,
      reminderActive: false,
      timeUntilNext: 0
    }
  },
  methods: {
    toggleReminder() {
      this.reminderActive = !this.reminderActive;
      if (this.reminderActive) {
        this.timeUntilNext = this.interval;
      }
    }
  }
}
</script>
