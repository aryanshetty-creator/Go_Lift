<template>
  <div class="water-tracker">
    <h3>Water Intake Tracker</h3>
    <div class="water-visual">
      <div class="water-bottle">
        <div class="water-fill" :style="{ height: fillPercentage + '%' }"></div>
      </div>
    </div>
    <div class="water-stats">
      <p>{{ currentIntake }} / {{ dailyGoal }} ml</p>
      <p>{{ fillPercentage }}% of daily goal</p>
    </div>
    <div class="water-controls">
      <button @click="addWater(250)">+250ml</button>
      <button @click="addWater(500)">+500ml</button>
      <button @click="addWater(1000)">+1L</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaterIntakeTracker',
  data() {
    return {
      currentIntake: 0,
      dailyGoal: 2000
    }
  },
  computed: {
    fillPercentage() {
      return Math.min((this.currentIntake / this.dailyGoal) * 100, 100);
    }
  },
  methods: {
    addWater(amount) {
      this.currentIntake += amount;
      if (this.currentIntake >= this.dailyGoal) {
        this.$emit('goal-reached');
      }
    },
    reset() {
      this.currentIntake = 0;
    }
  }
}
</script>
