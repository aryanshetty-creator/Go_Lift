<template>
  <div class="workout-recommender">
    <h2>Workout Recommender</h2>
    <div class="quiz-section">
      <h3>Tell us about your goals</h3>
      <div class="question">
        <label>Primary Goal:</label>
        <select v-model="userGoal">
          <option value="strength">Build Strength</option>
          <option value="hypertrophy">Build Muscle</option>
          <option value="endurance">Improve Endurance</option>
          <option value="weight-loss">Lose Weight</option>
        </select>
      </div>
      <div class="question">
        <label>Experience Level:</label>
        <select v-model="experienceLevel">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div class="question">
        <label>Days per week:</label>
        <select v-model="daysPerWeek">
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5">5 days</option>
          <option value="6">6 days</option>
        </select>
      </div>
      <button @click="generateRecommendation" class="btn-primary">Get Recommendation</button>
    </div>
    <div v-if="recommendation" class="recommendation">
      <h3>Recommended Program: {{ recommendation.name }}</h3>
      <p>{{ recommendation.description }}</p>
      <div class="program-details">
        <h4>Weekly Split:</h4>
        <ul>
          <li v-for="day in recommendation.split" :key="day.day">
            <strong>{{ day.day }}:</strong> {{ day.focus }}
          </li>
        </ul>
      </div>
      <button @click="startProgram" class="btn-success">Start This Program</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutRecommender',
  data() {
    return {
      userGoal: 'strength',
      experienceLevel: 'intermediate',
      daysPerWeek: 4,
      recommendation: null
    }
  },
  methods: {
    generateRecommendation() {
      const programs = {
        strength: {
          name: '5x5 Strength Program',
          description: 'Focus on compound movements with progressive overload',
          split: [
            { day: 'Monday', focus: 'Squat, Bench Press, Rows' },
            { day: 'Wednesday', focus: 'Squat, Overhead Press, Deadlift' },
            { day: 'Friday', focus: 'Squat, Bench Press, Rows' }
          ]
        },
        hypertrophy: {
          name: 'PPL Hypertrophy',
          description: 'Push/Pull/Legs split for maximum muscle growth',
          split: [
            { day: 'Monday', focus: 'Push (Chest, Shoulders, Triceps)' },
            { day: 'Tuesday', focus: 'Pull (Back, Biceps)' },
            { day: 'Wednesday', focus: 'Legs' },
            { day: 'Thursday', focus: 'Push' }
          ]
        }
      };
      
      this.recommendation = programs[this.userGoal] || programs.strength;
    },
    startProgram() {
      alert('Program started! Check your workout calendar.');
    }
  }
}
</script>

<style scoped>
.workout-recommender {
  padding: 20px;
}
.quiz-section {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}
.question {
  margin: 15px 0;
}
.question label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.question select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.recommendation {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
}
.program-details ul {
  list-style: none;
  padding: 0;
}
.program-details li {
  padding: 10px;
  margin: 5px 0;
  background: #f9f9f9;
  border-radius: 5px;
}
</style>
