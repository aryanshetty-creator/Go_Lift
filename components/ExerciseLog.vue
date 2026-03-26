<template>
  <div class="exercise-log">
    <h3>Exercise Log</h3>
    <div class="log-entry">
      <input v-model="exercise" placeholder="Exercise" />
      <input v-model.number="sets" type="number" placeholder="Sets" />
      <input v-model.number="reps" type="number" placeholder="Reps" />
      <input v-model.number="weight" type="number" placeholder="Weight" />
      <button @click="logExercise">Log</button>
    </div>
    <div class="log-history">
      <div v-for="(log, i) in logs" :key="i">
        {{ log.exercise }}: {{ log.sets }}x{{ log.reps }} @ {{ log.weight }}kg
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExerciseLog',
  data() {
    return {
      exercise: '', sets: 0, reps: 0, weight: 0, logs: []
    }
  },
  methods: {
    logExercise() {
      this.logs.push({
        exercise: this.exercise,
        sets: this.sets,
        reps: this.reps,
        weight: this.weight
      });
      this.exercise = ''; this.sets = 0; this.reps = 0; this.weight = 0;
    }
  }
}
</script>
