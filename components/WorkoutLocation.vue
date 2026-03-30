<template>
  <div class="workout-location">
    <h3>Workout Location</h3>
    <select v-model="location">
      <option value="gym">Gym</option>
      <option value="home">Home</option>
      <option value="outdoor">Outdoor</option>
    </select>
    <p>Selected: {{ location }}</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutLocation',
  data() {
    return { location: 'gym' }
  }
}
</script>
