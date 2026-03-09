<template>
  <div class="progress-container">
    <div class="progress-label">
      <span>Weekly Progress</span>
      <span>{{ completed }}/{{ total }}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    completed: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 7
    }
  },
  computed: {
    progressPercent() {
      return Math.min((this.completed / this.total) * 100, 100);
    }
  }
}
</script>
