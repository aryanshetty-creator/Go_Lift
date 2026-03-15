<template>
  <div class="badge-display">
    <h3>Your Achievements</h3>
    <div class="badges-grid">
      <div 
        v-for="badge in badges" 
        :key="badge.id"
        :class="['badge-item', { earned: badge.earned }]"
      >
        <div class="badge-icon">{{ badge.icon }}</div>
        <div class="badge-name">{{ badge.name }}</div>
        <div class="badge-description">{{ badge.description }}</div>
        <div v-if="!badge.earned" class="badge-progress">
          {{ badge.progress }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeDisplay',
  data() {
    return {
      badges: [
        { id: 1, name: 'First Step', icon: '🎯', description: 'Complete first workout', earned: true, progress: 100 },
        { id: 2, name: 'Week Warrior', icon: '🔥', description: '7 day streak', earned: false, progress: 57 },
        { id: 3, name: 'Century Club', icon: '💯', description: '100 workouts', earned: false, progress: 45 },
        { id: 4, name: 'Early Bird', icon: '🌅', description: 'Workout before 7 AM', earned: true, progress: 100 },
        { id: 5, name: 'Iron Will', icon: '💪', description: '30 day streak', earned: false, progress: 23 },
        { id: 6, name: 'Consistency King', icon: '👑', description: '365 day streak', earned: false, progress: 8 }
      ]
    }
  }
}
</script>
