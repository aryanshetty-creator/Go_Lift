<template>
  <div class="stretching-routine">
    <h3>Stretching Routines</h3>
    <div class="routine-selector">
      <button 
        v-for="routine in routines" 
        :key="routine.id"
        @click="selectRoutine(routine)"
        :class="{ active: selectedRoutine?.id === routine.id }"
      >
        {{ routine.name }}
      </button>
    </div>
    <div v-if="selectedRoutine" class="routine-details">
      <h4>{{ selectedRoutine.name }}</h4>
      <p>Duration: {{ selectedRoutine.duration }} minutes</p>
      <ul class="stretch-list">
        <li v-for="(stretch, index) in selectedRoutine.stretches" :key="index">
          <strong>{{ stretch.name }}</strong>
          <span>{{ stretch.duration }}s each side</span>
        </li>
      </ul>
      <button @click="startRoutine" class="start-btn">Start Routine</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StretchingRoutine',
  data() {
    return {
      selectedRoutine: null,
      routines: [
        {
          id: 1,
          name: 'Morning Stretch',
          duration: 10,
          stretches: [
            { name: 'Cat-Cow', duration: 30 },
            { name: 'Child\'s Pose', duration: 30 },
            { name: 'Downward Dog', duration: 30 },
            { name: 'Hip Flexor Stretch', duration: 30 }
          ]
        },
        {
          id: 2,
          name: 'Post-Workout',
          duration: 15,
          stretches: [
            { name: 'Quad Stretch', duration: 30 },
            { name: 'Hamstring Stretch', duration: 30 },
            { name: 'Calf Stretch', duration: 30 },
            { name: 'Shoulder Stretch', duration: 30 }
          ]
        }
      ]
    }
  },
  methods: {
    selectRoutine(routine) {
      this.selectedRoutine = routine;
    },
    startRoutine() {
      this.$emit('routine-started', this.selectedRoutine);
    }
  }
}
</script>
