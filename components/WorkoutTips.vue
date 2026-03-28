<template>
  <div class="workout-tips">
    <h3>Workout Tips</h3>
    <div class="tip">
      <p>{{ currentTip }}</p>
      <button @click="nextTip">Next Tip</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutTips',
  data() {
    return {
      tipIndex: 0,
      tips: [
        'Stay hydrated during workouts',
        'Warm up before exercising',
        'Focus on form over weight'
      ]
    }
  },
  computed: {
    currentTip() {
      return this.tips[this.tipIndex];
    }
  },
  methods: {
    nextTip() {
      this.tipIndex = (this.tipIndex + 1) % this.tips.length;
    }
  }
}
</script>
