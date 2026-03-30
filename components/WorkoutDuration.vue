<template>
  <div class="workout-duration">
    <h3>Workout Duration</h3>
    <p>{{ hours }}h {{ minutes }}m</p>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
  </div>
</template>
<script>
export default {
  name: 'WorkoutDuration',
  data() {
    return { hours: 0, minutes: 0 }
  },
  methods: {
    start() {
      console.log('Started');
    },
    stop() {
      console.log('Stopped');
    }
  }
}
</script>
