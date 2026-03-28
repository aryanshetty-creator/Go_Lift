<template>
  <div class="body-metrics">
    <h3>Body Metrics</h3>
    <div class="metrics">
      <p>BMI: {{ bmi }}</p>
      <p>Body Fat: {{ bodyFat }}%</p>
      <p>Lean Mass: {{ leanMass }}kg</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BodyMetrics',
  data() {
    return { bmi: 22.5, bodyFat: 15, leanMass: 65 }
  }
}
</script>
