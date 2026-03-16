<template>
  <div class="challenge-board">
    <h3>Fitness Challenges</h3>
    <div class="challenges-list">
      <div v-for="challenge in challenges" :key="challenge.id" class="challenge-card">
        <h4>{{ challenge.name }}</h4>
        <p>{{ challenge.description }}</p>
        <div class="challenge-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: challenge.progress + '%' }"></div>
          </div>
          <span>{{ challenge.progress }}%</span>
        </div>
        <button @click="joinChallenge(challenge.id)">
          {{ challenge.joined ? 'Continue' : 'Join Challenge' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengeBoard',
  data() {
    return {
      challenges: [
        { id: 1, name: '30 Day Push-up Challenge', description: 'Build upper body strength', progress: 45, joined: true },
        { id: 2, name: '100 Squats Daily', description: 'Leg day every day', progress: 0, joined: false },
        { id: 3, name: 'Plank Master', description: 'Hold plank for 5 minutes', progress: 60, joined: true },
        { id: 4, name: 'Run 100 Miles', description: 'Monthly running goal', progress: 23, joined: false }
      ]
    }
  },
  methods: {
    joinChallenge(id) {
      const challenge = this.challenges.find(c => c.id === id);
      if (challenge) {
        challenge.joined = true;
        this.$emit('challenge-joined', challenge);
      }
    }
  }
}
</script>
