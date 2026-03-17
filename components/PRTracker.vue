<template>
  <div class="pr-tracker">
    <h3>Personal Records</h3>
    <div class="add-pr">
      <select v-model="exercise">
        <option value="bench">Bench Press</option>
        <option value="squat">Squat</option>
        <option value="deadlift">Deadlift</option>
      </select>
      <input v-model.number="weight" type="number" placeholder="Weight" />
      <input v-model.number="reps" type="number" placeholder="Reps" />
      <button @click="addPR">Add PR</button>
    </div>
    <div class="pr-list">
      <div v-for="pr in prs" :key="pr.id" class="pr-card">
        <h4>{{ pr.exercise }}</h4>
        <p>{{ pr.weight }}kg x {{ pr.reps }}</p>
        <p>{{ pr.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PRTracker',
  data() {
    return {
      exercise: 'bench',
      weight: 0,
      reps: 0,
      prs: []
    }
  },
  methods: {
    addPR() {
      this.prs.push({
        id: Date.now(),
        exercise: this.exercise,
        weight: this.weight,
        reps: this.reps,
        date: new Date().toLocaleDateString()
      });
    }
  }
}
</script>
