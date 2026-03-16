<template>
  <div class="personal-trainer">
    <h3>AI Personal Trainer</h3>
    <div class="trainer-chat">
      <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.type]">
        <p>{{ msg.text }}</p>
      </div>
    </div>
    <div class="trainer-input">
      <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Ask your trainer..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalTrainer',
  data() {
    return {
      userMessage: '',
      messages: [
        { type: 'trainer', text: 'Hello! I\'m your virtual trainer. How can I help you today?' }
      ]
    }
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim()) {
        this.messages.push({ type: 'user', text: this.userMessage });
        this.getTrainerResponse(this.userMessage);
        this.userMessage = '';
      }
    },
    getTrainerResponse(message) {
      const responses = {
        'workout': 'Great! Let\'s plan your workout. What muscle group do you want to focus on?',
        'diet': 'Nutrition is key! Are you looking to bulk, cut, or maintain?',
        'motivation': 'Remember: The only bad workout is the one that didn\'t happen!',
        'default': 'I\'m here to help! Ask me about workouts, diet, or motivation.'
      };
      
      const key = Object.keys(responses).find(k => message.toLowerCase().includes(k)) || 'default';
      setTimeout(() => {
        this.messages.push({ type: 'trainer', text: responses[key] });
      }, 500);
    }
  }
}
</script>
