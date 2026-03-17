<template>
  <div class="exercise-database">
    <h3>Exercise Database</h3>
    <input v-model="search" placeholder="Search exercises..." />
    <div class="exercises">
      <div v-for="ex in filteredExercises" :key="ex.id" class="exercise">
        <h4>{{ ex.name }}</h4>
        <p>{{ ex.muscleGroup }}</p>
        <p>{{ ex.equipment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseDatabase',
  data() {
    return {
      search: '',
      exercises: [
        { id: 1, name: 'Bench Press', muscleGroup: 'Chest', equipment: 'Barbell' },
        { id: 2, name: 'Squats', muscleGroup: 'Legs', equipment: 'Barbell' }
      ]
    }
  },
  computed: {
    filteredExercises() {
      return this.exercises.filter(ex => 
        ex.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
</script>
