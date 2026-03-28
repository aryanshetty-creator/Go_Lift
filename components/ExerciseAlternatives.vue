<template>
  <div class="exercise-alternatives">
    <h3>Exercise Alternatives</h3>
    <input v-model="exercise" placeholder="Enter exercise" />
    <div v-if="alternatives">
      <p v-for="alt in alternatives" :key="alt">{{ alt }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExerciseAlternatives',
  data() {
    return { exercise: '', alternatives: [] }
  }
}
</script>
