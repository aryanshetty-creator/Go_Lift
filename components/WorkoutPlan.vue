<template>
  <div class="workout-plan">
    <h3>Weekly Workout Plan</h3>
    <div class="plan-grid">
      <div v-for="(day, index) in weekPlan" :key="index" class="day-plan">
        <div class="day-name">{{ day.name }}</div>
        <div class="day-focus">{{ day.focus }}</div>
        <ul class="exercises">
          <li v-for="(exercise, idx) in day.exercises" :key="idx">
            {{ exercise }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutPlan',
  data() {
    return {
      weekPlan: [
        { name: 'Monday', focus: 'Chest & Triceps', exercises: ['Bench Press', 'Dips', 'Push-ups'] },
        { name: 'Tuesday', focus: 'Back & Biceps', exercises: ['Pull-ups', 'Rows', 'Curls'] },
        { name: 'Wednesday', focus: 'Legs', exercises: ['Squats', 'Lunges', 'Leg Press'] },
        { name: 'Thursday', focus: 'Shoulders', exercises: ['Military Press', 'Lateral Raises'] },
        { name: 'Friday', focus: 'Full Body', exercises: ['Deadlifts', 'Clean & Press'] },
        { name: 'Saturday', focus: 'Cardio', exercises: ['Running', 'Cycling'] },
        { name: 'Sunday', focus: 'Rest', exercises: ['Recovery', 'Stretching'] }
      ]
    }
  }
}
</script>
