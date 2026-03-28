<template>
  <div class="fitness-goals">
    <h3>Fitness Goals</h3>
    <input v-model="newGoal" placeholder="Enter goal" />
    <button @click="addGoal">Add Goal</button>
    <ul>
      <li v-for="goal in goals" :key="goal">{{ goal }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FitnessGoals',
  data() {
    return { newGoal: '', goals: [] }
  },
  methods: {
    addGoal() {
      if (this.newGoal) {
        this.goals.push(this.newGoal);
        this.newGoal = '';
      }
    }
  }
}
</script>
