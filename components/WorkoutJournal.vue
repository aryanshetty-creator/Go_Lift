<template>
  <div class="workout-journal">
    <h3>Workout Journal</h3>
    <div class="journal-entry">
      <textarea 
        v-model="journalText" 
        placeholder="How did today's workout feel? Any notes or observations..."
        rows="5"
      ></textarea>
      <div class="entry-meta">
        <select v-model="mood">
          <option value="great">😄 Great</option>
          <option value="good">🙂 Good</option>
          <option value="okay">😐 Okay</option>
          <option value="tired">😴 Tired</option>
          <option value="sore">😣 Sore</option>
        </select>
        <button @click="saveEntry">Save Entry</button>
      </div>
    </div>
    <div class="journal-history">
      <h4>Previous Entries</h4>
      <div v-for="(entry, index) in entries" :key="index" class="entry-card">
        <div class="entry-header">
          <span class="entry-date">{{ entry.date }}</span>
          <span class="entry-mood">{{ getMoodEmoji(entry.mood) }}</span>
        </div>
        <p>{{ entry.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutJournal',
  data() {
    return {
      journalText: '',
      mood: 'good',
      entries: []
    }
  },
  methods: {
    saveEntry() {
      if (this.journalText.trim()) {
        this.entries.unshift({
          text: this.journalText,
          mood: this.mood,
          date: new Date().toLocaleDateString()
        });
        this.journalText = '';
        localStorage.setItem('workout_journal', JSON.stringify(this.entries));
      }
    },
    getMoodEmoji(mood) {
      const emojis = { great: '😄', good: '🙂', okay: '😐', tired: '😴', sore: '😣' };
      return emojis[mood] || '🙂';
    }
  },
  mounted() {
    const saved = localStorage.getItem('workout_journal');
    if (saved) this.entries = JSON.parse(saved);
  }
}
</script>
