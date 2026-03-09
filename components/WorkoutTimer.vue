<template>
  <div class="timer-container">
    <h3>Workout Timer</h3>
    <div class="timer-display">
      <span class="time">{{ formattedTime }}</span>
    </div>
    <div class="timer-controls">
      <button @click="startTimer" :disabled="isRunning">Start</button>
      <button @click="pauseTimer" :disabled="!isRunning">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutTimer',
  data() {
    return {
      seconds: 0,
      isRunning: false,
      interval: null
    }
  },
  computed: {
    formattedTime() {
      const mins = Math.floor(this.seconds / 60);
      const secs = this.seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  },
  methods: {
    startTimer() {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    pauseTimer() {
      this.isRunning = false;
      clearInterval(this.interval);
    },
    resetTimer() {
      this.isRunning = false;
      clearInterval(this.interval);
      this.seconds = 0;
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>
