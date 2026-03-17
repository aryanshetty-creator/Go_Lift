<template>
  <div class="form-checker">
    <h3>Exercise Form Guide</h3>
    <select v-model="selectedExercise">
      <option value="">Select Exercise</option>
      <option v-for="ex in exercises" :key="ex.id" :value="ex.id">
        {{ ex.name }}
      </option>
    </select>
    <div v-if="selectedExercise" class="form-guide">
      <h4>{{ currentExercise.name }}</h4>
      <div class="form-points">
        <h5>Key Points:</h5>
        <ul>
          <li v-for="(point, index) in currentExercise.keyPoints" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
      <div class="common-mistakes">
        <h5>Common Mistakes:</h5>
        <ul>
          <li v-for="(mistake, index) in currentExercise.mistakes" :key="index">
            ❌ {{ mistake }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormChecker',
  data() {
    return {
      selectedExercise: '',
      exercises: [
        {
          id: 'squat',
          name: 'Squat',
          keyPoints: ['Feet shoulder-width', 'Knees track over toes', 'Chest up'],
          mistakes: ['Knees caving in', 'Rounding back', 'Not going deep enough']
        }
      ]
    }
  },
  computed: {
    currentExercise() {
      return this.exercises.find(ex => ex.id === this.selectedExercise);
    }
  }
}
</script>
