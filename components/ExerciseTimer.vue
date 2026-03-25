<template>
  <div class="exercise-timer">
    <h3>Exercise Timer</h3>
    <div class="timer-display">{{ formattedTime }}</div>
    <div class="timer-controls">
      <button @click="start">Start</button>
      <button @click="pause">Pause</button>
      <button @click="reset">Reset</button>
    </div>
    <div class="presets">
      <button @click="setTimer(30)">30s</button>
      <button @click="setTimer(60)">1min</button>
      <button @click="setTimer(90)">90s</button>
      <button @click="setTimer(120)">2min</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseTimer',
  data() {
    return {
      seconds: 0,
      interval: null,
      running: false
    }
  },
  computed: {
    formattedTime() {
      const mins = Math.floor(this.seconds / 60);
      const secs = this.seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
  },
  methods: {
    start() {
      if (!this.running) {
        this.running = true;
        this.interval = setInterval(() => this.seconds++, 1000);
      }
    },
    pause() {
      this.running = false;
      clearInterval(this.interval);
    },
    reset() {
      this.pause();
      this.seconds = 0;
    },
    setTimer(secs) {
      this.seconds = secs;
    }
  }
}
</script>
