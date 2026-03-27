<template>
  <div class="quick-workout">
    <h3>Quick Workout</h3>
    <p>{{ currentExercise }}</p>
    <button @click="nextExercise">Next Exercise</button>
    <p>{{ exerciseIndex + 1 }} / {{ exercises.length }}</p>
  </div>
</template>
<script>
export default {
  name: 'QuickWorkout',
  data() {
    return {
      exerciseIndex: 0,
      exercises: ['Push-ups', 'Squats', 'Plank', 'Lunges']
    }
  },
  computed: {
    currentExercise() {
      return this.exercises[this.exerciseIndex];
    }
  },
  methods: {
    nextExercise() {
      this.exerciseIndex = (this.exerciseIndex + 1) % this.exercises.length;
    }
  }
}
</script>
