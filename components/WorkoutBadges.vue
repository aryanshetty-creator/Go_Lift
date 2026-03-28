<template>
  <div class="workout-badges">
    <h3>Your Badges</h3>
    <div class="badges">
      <div v-for="badge in badges" :key="badge.id" class="badge">
        {{ badge.icon }} {{ badge.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutBadges',
  data() {
    return {
      badges: [
        { id: 1, icon: '🏆', name: 'Champion' },
        { id: 2, icon: '🔥', name: 'On Fire' }
      ]
    }
  }
}
</script>
