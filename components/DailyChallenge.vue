<template>
  <div class="daily-challenge">
    <h3>Daily Challenge</h3>
    <div class="challenge">
      <h4>{{ challenge.name }}</h4>
      <p>{{ challenge.description }}</p>
      <button @click="complete">Complete Challenge</button>
    </div>
    <p v-if="completed">✅ Challenge completed!</p>
  </div>
</template>
<script>
export default {
  name: 'DailyChallenge',
  data() {
    return {
      completed: false,
      challenge: {
        name: '100 Push-ups',
        description: 'Complete 100 push-ups today'
      }
    }
  },
  methods: {
    complete() {
      this.completed = true;
    }
  }
}
</script>
