<template>
  <div class="workout-mood">
    <h3>How are you feeling?</h3>
    <div class="mood-selector">
      <button v-for="mood in moods" :key="mood.emoji" 
              @click="selectMood(mood)">
        {{ mood.emoji }}
      </button>
    </div>
    <p v-if="selected">You're feeling {{ selected.name }}</p>
  </div>
</template>
<script>
export default {
  name: 'WorkoutMood',
  data() {
    return {
      selected: null,
      moods: [
        { emoji: '😄', name: 'Great' },
        { emoji: '🙂', name: 'Good' },
        { emoji: '😐', name: 'Okay' },
        { emoji: '😴', name: 'Tired' }
      ]
    }
  },
  methods: {
    selectMood(mood) {
      this.selected = mood;
    }
  }
}
</script>
