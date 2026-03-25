<template>
  <div class="heart-rate">
    <h3>Heart Rate Monitor</h3>
    <p>Current HR: {{ heartRate }} bpm</p>
    <p>Zone: {{ zone }}</p>
  </div>
</template>
<script>
export default {
  name: 'HeartRateMonitor',
  data() { return { heartRate: 75 } },
  computed: {
    zone() {
      if (this.heartRate < 100) return 'Rest';
      if (this.heartRate < 140) return 'Fat Burn';
      return 'Cardio';
    }
  }
}
</script>
