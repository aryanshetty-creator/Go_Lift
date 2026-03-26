<template>
  <div class="calorie-counter">
    <h3>Daily Calories</h3>
    <div class="counter">
      <p>{{ calories }} / {{ goal }}</p>
      <div class="progress-bar">
        <div class="fill" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
    <button @click="calories += 100">Add 100 cal</button>
  </div>
</template>
<script>
export default {
  name: 'CalorieCounter',
  data() {
    return { calories: 0, goal: 2000 }
  },
  computed: {
    percentage() {
      return Math.min((this.calories / this.goal) * 100, 100);
    }
  }
}
</script>
