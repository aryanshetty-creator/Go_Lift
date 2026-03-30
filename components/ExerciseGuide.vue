<template>
  <div class="exercise-guide">
    <h3>Exercise Guide</h3>
    <select v-model="selected">
      <option v-for="ex in exercises" :key="ex.id" :value="ex">
        {{ ex.name }}
      </option>
    </select>
    <div v-if="selected">
      <p>{{ selected.instructions }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExerciseGuide',
  data() {
    return {
      selected: null,
      exercises: [
        { id: 1, name: 'Squat', instructions: 'Stand with feet shoulder-width apart...' }
      ]
    }
  }
}
</script>
