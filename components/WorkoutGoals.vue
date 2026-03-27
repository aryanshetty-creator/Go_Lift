<template>
  <div class="workout-goals">
    <h3>Set Your Goals</h3>
    <select v-model="goalType">
      <option value="strength">Build Strength</option>
      <option value="muscle">Build Muscle</option>
      <option value="endurance">Improve Endurance</option>
      <option value="weight">Lose Weight</option>
    </select>
    <input v-model="targetDate" type="date" />
    <button @click="saveGoal">Save Goal</button>
  </div>
</template>
<script>
export default {
  name: 'WorkoutGoals',
  data() {
    return { goalType: 'strength', targetDate: '' }
  },
  methods: {
    saveGoal() {
      console.log('Goal saved:', this.goalType, this.targetDate);
    }
  }
}
</script>
