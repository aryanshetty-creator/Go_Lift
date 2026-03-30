<template>
  <div class="workout-challenge">
    <h3>Weekly Challenge</h3>
    <p>{{ challenge.name }}</p>
    <p>Progress: {{ progress }}%</p>
    <button @click="updateProgress">Update</button>
  </div>
</template>
<script>
export default {
  name: 'WorkoutChallenge',
  data() {
    return {
      challenge: { name: '100 Push-ups Challenge' },
      progress: 0
    }
  },
  methods: {
    updateProgress() {
      this.progress = Math.min(100, this.progress + 10);
    }
  }
}
</script>
