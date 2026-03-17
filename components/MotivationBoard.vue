<template>
  <div class="motivation-board">
    <h3>Motivation Board</h3>
    <div class="quote-of-day">
      <p>"{{ dailyQuote }}"</p>
    </div>
    <div class="goals-section">
      <h4>Your Goals</h4>
      <ul>
        <li v-for="(goal, index) in goals" :key="index">
          {{ goal }}
        </li>
      </ul>
    </div>
    <button @click="addGoal">Add New Goal</button>
  </div>
</template>

<script>
export default {
  name: 'MotivationBoard',
  data() {
    return {
      dailyQuote: 'The only bad workout is the one that didn\'t happen',
      goals: ['Lose 10kg', 'Run 5k', 'Bench 100kg']
    }
  },
  methods: {
    addGoal() {
      const goal = prompt('Enter your goal:');
      if (goal) this.goals.push(goal);
    }
  }
}
</script>
