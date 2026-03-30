<template>
  <div class="workout-comparison">
    <h2>Workout Comparison</h2>
    <div class="comparison-selector">
      <select v-model="workout1" class="workout-select">
        <option value="">Select Workout 1</option>
        <option v-for="workout in workouts" :key="workout.id" :value="workout">
          {{ workout.name }} - {{ workout.date }}
        </option>
      </select>
      <span class="vs">VS</span>
      <select v-model="workout2" class="workout-select">
        <option value="">Select Workout 2</option>
        <option v-for="workout in workouts" :key="workout.id" :value="workout">
          {{ workout.name }} - {{ workout.date }}
        </option>
      </select>
    </div>
    <div v-if="workout1 && workout2" class="comparison-results">
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>{{ workout1.name }}</th>
            <th>{{ workout2.name }}</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Volume</td>
            <td>{{ workout1.volume }} kg</td>
            <td>{{ workout2.volume }} kg</td>
            <td :class="getDifferenceClass(workout1.volume, workout2.volume)">
              {{ calculateDifference(workout1.volume, workout2.volume) }}
            </td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{{ workout1.duration }} min</td>
            <td>{{ workout2.duration }} min</td>
            <td :class="getDifferenceClass(workout1.duration, workout2.duration)">
              {{ calculateDifference(workout1.duration, workout2.duration) }}
            </td>
          </tr>
          <tr>
            <td>Exercises</td>
            <td>{{ workout1.exercises }}</td>
            <td>{{ workout2.exercises }}</td>
            <td :class="getDifferenceClass(workout1.exercises, workout2.exercises)">
              {{ calculateDifference(workout1.exercises, workout2.exercises) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutComparison',
  data() {
    return {
      workout1: null,
      workout2: null,
      workouts: [
        { id: 1, name: 'Push Day', date: '2024-03-20', volume: 5000, duration: 60, exercises: 8 },
        { id: 2, name: 'Pull Day', date: '2024-03-22', volume: 4500, duration: 55, exercises: 7 },
        { id: 3, name: 'Leg Day', date: '2024-03-24', volume: 6000, duration: 70, exercises: 9 }
      ]
    }
  },
  methods: {
    calculateDifference(val1, val2) {
      const diff = val1 - val2;
      return diff > 0 ? `+${diff}` : diff;
    },
    getDifferenceClass(val1, val2) {
      return val1 > val2 ? 'positive' : val1 < val2 ? 'negative' : 'neutral';
    }
  }
}
</script>

<style scoped>
.workout-comparison {
  padding: 20px;
}
.comparison-selector {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}
.workout-select {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.vs {
  font-weight: bold;
  font-size: 1.5em;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.positive { color: #4CAF50; font-weight: bold; }
.negative { color: #F44336; font-weight: bold; }
.neutral { color: #999; }
</style>
