<template>
  <div class="fitness-quiz">
    <h3>Fitness Assessment Quiz</h3>
    <div v-if="!completed" class="quiz-questions">
      <div class="question">
        <p>{{ currentQuestion.text }}</p>
        <div class="options">
          <button 
            v-for="option in currentQuestion.options" 
            :key="option"
            @click="answer(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>
    <div v-else class="results">
      <h4>Your Fitness Level: {{ fitnessLevel }}</h4>
      <p>{{ recommendation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FitnessQuiz',
  data() {
    return {
      completed: false,
      fitnessLevel: '',
      recommendation: '',
      currentQuestion: {
        text: 'How many days per week do you exercise?',
        options: ['0-1', '2-3', '4-5', '6-7']
      }
    }
  },
  methods: {
    answer(option) {
      this.completed = true;
      this.fitnessLevel = 'Intermediate';
      this.recommendation = 'You\'re doing great! Keep it up!';
    }
  }
}
</script>
