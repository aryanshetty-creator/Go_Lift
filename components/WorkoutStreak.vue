<template>
  <div class="workout-streak">
    <h3>Current Streak</h3>
    <div class="streak-display">
      <span class="streak-number">{{ streak }}</span>
      <span class="streak-label">days</span>
    </div>
    <p>Keep it up! 🔥</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutStreak',
  data() {
    return { streak: 7 }
  }
}
</script>
