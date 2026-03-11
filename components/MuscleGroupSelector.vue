<template>
  <div class="muscle-selector">
    <h4>Target Muscle Groups</h4>
    <div class="muscle-grid">
      <button 
        v-for="muscle in muscleGroups" 
        :key="muscle"
        :class="['muscle-btn', { active: isSelected(muscle) }]"
        @click="toggleMuscle(muscle)"
      >
        {{ muscle }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MuscleGroupSelector',
  data() {
    return {
      muscleGroups: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core'],
      selectedMuscles: []
    }
  },
  methods: {
    toggleMuscle(muscle) {
      const index = this.selectedMuscles.indexOf(muscle);
      if (index > -1) {
        this.selectedMuscles.splice(index, 1);
      } else {
        this.selectedMuscles.push(muscle);
      }
      this.$emit('update', this.selectedMuscles);
    },
    isSelected(muscle) {
      return this.selectedMuscles.includes(muscle);
    }
  }
}
</script>
