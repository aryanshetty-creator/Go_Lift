<template>
  <div class="achievements">
    <h3>Achievements</h3>
    <div class="achievement-grid">
      <div v-for="achievement in achievements" :key="achievement.id"
           :class="['achievement', { unlocked: achievement.unlocked }]">
        <span class="icon">{{ achievement.icon }}</span>
        <p>{{ achievement.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutAchievements',
  data() {
    return {
      achievements: [
        { id: 1, name: 'First Workout', icon: '🎯', unlocked: true },
        { id: 2, name: '7 Day Streak', icon: '🔥', unlocked: false },
        { id: 3, name: '100 Workouts', icon: '💯', unlocked: false }
      ]
    }
  }
}
</script>
