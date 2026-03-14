<template>
  <div class="profile-card">
    <div class="profile-header">
      <div class="avatar">{{ initials }}</div>
      <h3>{{ userName }}</h3>
    </div>
    <div class="profile-stats">
      <div class="stat">
        <span class="stat-value">{{ totalWorkouts }}</span>
        <span class="stat-label">Workouts</span>
      </div>
      <div class="stat">
        <span class="stat-value">{{ currentStreak }}</span>
        <span class="stat-label">Day Streak</span>
      </div>
      <div class="stat">
        <span class="stat-value">{{ badges }}</span>
        <span class="stat-label">Badges</span>
      </div>
    </div>
    <div class="profile-info">
      <p>Member since: {{ memberSince }}</p>
      <p>Fitness Goal: {{ fitnessGoal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  data() {
    return {
      userName: 'Fitness Enthusiast',
      totalWorkouts: 0,
      currentStreak: 0,
      badges: 0,
      memberSince: new Date().toLocaleDateString(),
      fitnessGoal: 'Build Strength'
    }
  },
  computed: {
    initials() {
      return this.userName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    }
  }
}
</script>
