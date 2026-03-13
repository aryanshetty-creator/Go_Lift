<template>
  <div class="rest-timer">
    <h4>Rest Timer</h4>
    <div class="rest-display">{{ timeRemaining }}s</div>
    <div class="rest-controls">
      <button @click="startRest(60)">1 min</button>
      <button @click="startRest(90)">1.5 min</button>
      <button @click="startRest(120)">2 min</button>
      <button @click="stopRest">Stop</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestTimer',
  data() {
    return {
      timeRemaining: 0,
      interval: null
    }
  },
  methods: {
    startRest(seconds) {
      this.stopRest();
      this.timeRemaining = seconds;
      this.interval = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          this.stopRest();
          this.$emit('rest-complete');
        }
      }, 1000);
    },
    stopRest() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.timeRemaining = 0;
    }
  },
  beforeUnmount() {
    this.stopRest();
  }
}
</script>
