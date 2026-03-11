<template>
  <div class="goal-setter">
    <h3>Set Your Goals</h3>
    <div class="goal-form">
      <input 
        v-model="goalName" 
        placeholder="Goal name"
        class="goal-input"
      />
      <input 
        v-model.number="targetValue" 
        type="number"
        placeholder="Target"
        class="goal-input"
      />
      <button @click="addGoal" class="add-goal-btn">Add Goal</button>
    </div>
    <div class="goals-list">
      <div v-for="(goal, index) in goals" :key="index" class="goal-item">
        <span>{{ goal.name }}</span>
        <span class="goal-target">Target: {{ goal.target }}</span>
        <button @click="removeGoal(index)" class="remove-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalSetter',
  data() {
    return {
      goalName: '',
      targetValue: 0,
      goals: []
    }
  },
  methods: {
    addGoal() {
      if (this.goalName && this.targetValue > 0) {
        this.goals.push({
          name: this.goalName,
          target: this.targetValue
        });
        this.goalName = '';
        this.targetValue = 0;
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
}
</script>
