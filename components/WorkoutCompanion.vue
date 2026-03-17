<template>
  <div class="workout-companion">
    <h3>Workout Companion</h3>
    <div class="companion-status">
      <p>Current Exercise: {{ currentExercise }}</p>
      <p>Set {{ currentSet }} of {{ totalSets }}</p>
      <div class="timer">{{ timer }}s</div>
    </div>
    <div class="companion-controls">
      <button @click="startSet">Start Set</button>
      <button @click="completeSet">Complete Set</button>
      <button @click="skipExercise">Skip</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutCompanion',
  data() {
    return {
      currentExercise: 'Bench Press',
      currentSet: 1,
      totalSets: 4,
      timer: 0
    }
  },
  methods: {
    startSet() {
      console.log('Set started');
    },
    completeSet() {
      this.currentSet++;
    },
    skipExercise() {
      this.currentSet = 1;
    }
  }
}
</script>
