<template>
  <div class="workout-motivation">
    <h3>Stay Motivated!</h3>
    <p class="quote">"{{ quote }}"</p>
    <button @click="newQuote">New Quote</button>
  </div>
</template>
<script>
export default {
  name: 'WorkoutMotivation',
  data() {
    return {
      quoteIndex: 0,
      quotes: [
        'No pain, no gain',
        'Train insane or remain the same',
        'Your only limit is you'
      ]
    }
  },
  computed: {
    quote() {
      return this.quotes[this.quoteIndex];
    }
  },
  methods: {
    newQuote() {
      this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
    }
  }
}
</script>
