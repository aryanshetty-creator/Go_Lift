<template>
  <div class="exercise-library">
    <h3>Exercise Library</h3>
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        placeholder="Search exercises..."
        @input="filterExercises"
      />
      <select v-model="filterCategory" @change="filterExercises">
        <option value="">All Categories</option>
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="legs">Legs</option>
        <option value="shoulders">Shoulders</option>
        <option value="arms">Arms</option>
      </select>
    </div>
    <div class="exercise-grid">
      <div 
        v-for="exercise in filteredExercises" 
        :key="exercise.id"
        class="exercise-item"
      >
        <h4>{{ exercise.name }}</h4>
        <span class="category">{{ exercise.category }}</span>
        <span class="difficulty">{{ exercise.difficulty }}</span>
        <p>{{ exercise.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseLibrary',
  data() {
    return {
      searchQuery: '',
      filterCategory: '',
      exercises: [
        { id: 1, name: 'Bench Press', category: 'Chest', difficulty: 'Intermediate', description: 'Classic chest exercise' },
        { id: 2, name: 'Squats', category: 'Legs', difficulty: 'Beginner', description: 'Fundamental leg exercise' },
        { id: 3, name: 'Deadlifts', category: 'Back', difficulty: 'Advanced', description: 'Full body compound movement' }
      ],
      filteredExercises: []
    }
  },
  methods: {
    filterExercises() {
      this.filteredExercises = this.exercises.filter(ex => {
        const matchesSearch = ex.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = !this.filterCategory || ex.category.toLowerCase() === this.filterCategory;
        return matchesSearch && matchesCategory;
      });
    }
  },
  mounted() {
    this.filteredExercises = this.exercises;
  }
}
</script>
