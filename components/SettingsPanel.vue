<template>
  <div class="settings-panel">
    <h3>Settings</h3>
    <div class="settings-group">
      <label>
        <input type="checkbox" v-model="settings.notifications" />
        Enable Notifications
      </label>
      <label>
        <input type="checkbox" v-model="settings.restDayReminder" />
        Rest Day Reminders
      </label>
      <label>
        Weekly Goal:
        <input 
          type="number" 
          v-model.number="settings.weeklyGoal" 
          min="1" 
          max="14"
        />
      </label>
      <label>
        Theme:
        <select v-model="settings.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
    <button @click="saveSettings" class="save-btn">Save Settings</button>
  </div>
</template>

<script>
export default {
  name: 'SettingsPanel',
  data() {
    return {
      settings: {
        notifications: true,
        restDayReminder: true,
        weeklyGoal: 7,
        theme: 'light'
      }
    }
  },
  methods: {
    saveSettings() {
      localStorage.setItem('go_lift_settings', JSON.stringify(this.settings));
      this.$emit('settings-saved', this.settings);
    },
    loadSettings() {
      const saved = localStorage.getItem('go_lift_settings');
      if (saved) {
        this.settings = JSON.parse(saved);
      }
    }
  },
  mounted() {
    this.loadSettings();
  }
}
</script>
