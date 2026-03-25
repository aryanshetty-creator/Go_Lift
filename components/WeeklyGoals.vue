<template>
  <div class="weekly-goals">
    <h3>Weekly Goals</h3>
    <input v-model="goal" placeholder="Enter goal" />
    <button @click="addGoal">Add</button>
    <ul>
      <li v-for="(g, i) in goals" :key="i">{{ g }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'WeeklyGoals',
  data() { return { goal: '', goals: [] } },
  methods: { addGoal() { this.goals.push(this.goal); this.goal = ''; } }
}
</script>
