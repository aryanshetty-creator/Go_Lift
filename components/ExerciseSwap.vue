<template>
  <div class="exercise-swap">
    <h3>Exercise Alternatives</h3>
    <select v-model="exercise">
      <option value="bench">Bench Press</option>
      <option value="squat">Squat</option>
    </select>
    <div v-if="alternatives">
      <p v-for="alt in alternatives" :key="alt">{{ alt }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExerciseSwap',
  data() { return { exercise: 'bench' } },
  computed: {
    alternatives() {
      const swaps = {
        bench: ['Dumbbell Press', 'Push-ups'],
        squat: ['Leg Press', 'Lunges']
      };
      return swaps[this.exercise];
    }
  }
}
</script>
