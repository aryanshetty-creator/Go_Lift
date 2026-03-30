<template>
  <div class="workout-intensity">
    <h3>Workout Intensity</h3>
    <input type="range" v-model="intensity" min="0" max="100" />
    <p>{{ intensity }}%</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutIntensity',
  data() {
    return { intensity: 50 }
  }
}
</script>
