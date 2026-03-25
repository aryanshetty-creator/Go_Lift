<template>
  <div class="workout-feedback">
    <h3>How was your workout?</h3>
    <div class="rating">
      <button v-for="n in 5" :key="n" @click="rate(n)">{{ n }}⭐</button>
    </div>
    <p v-if="rating">You rated: {{ rating }}/5</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutFeedback',
  data() { return { rating: 0 } },
  methods: { rate(n) { this.rating = n; } }
}
</script>
