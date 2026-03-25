<template>
  <div class="intensity-meter">
    <h3>Workout Intensity</h3>
    <div class="meter">
      <div class="meter-fill" :style="{ width: intensity + '%' }"></div>
    </div>
    <p>Current Intensity: {{ intensity }}%</p>
    <div class="controls">
      <button @click="adjustIntensity(-10)">-</button>
      <button @click="adjustIntensity(10)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutIntensityMeter',
  data() {
    return { intensity: 50 }
  },
  methods: {
    adjustIntensity(amount) {
      this.intensity = Math.max(0, Math.min(100, this.intensity + amount));
    }
  }
}
</script>
