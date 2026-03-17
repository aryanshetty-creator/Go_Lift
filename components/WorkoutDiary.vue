<template>
  <div class="workout-diary">
    <h3>Workout Diary</h3>
    <div class="diary-entry">
      <input v-model="title" placeholder="Workout title" />
      <textarea v-model="notes" placeholder="Notes..."></textarea>
      <button @click="saveEntry">Save Entry</button>
    </div>
    <div class="entries">
      <div v-for="entry in entries" :key="entry.id" class="entry">
        <h4>{{ entry.title }}</h4>
        <p>{{ entry.notes }}</p>
        <small>{{ entry.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutDiary',
  data() {
    return {
      title: '',
      notes: '',
      entries: []
    }
  },
  methods: {
    saveEntry() {
      this.entries.push({
        id: Date.now(),
        title: this.title,
        notes: this.notes,
        date: new Date().toLocaleDateString()
      });
      this.title = '';
      this.notes = '';
    }
  }
}
</script>
