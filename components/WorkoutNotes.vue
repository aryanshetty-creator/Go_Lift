<template>
  <div class="workout-notes">
    <h3>Workout Notes</h3>
    <textarea v-model="notes" placeholder="Add notes..."></textarea>
    <button @click="save">Save</button>
  </div>
</template>
<script>
export default {
  name: 'WorkoutNotes',
  data() { return { notes: '' } },
  methods: { save() { localStorage.setItem('notes', this.notes); } }
}
</script>
