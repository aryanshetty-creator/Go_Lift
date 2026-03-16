<template>
  <div class="mobility-tracker">
    <h3>Mobility & Flexibility</h3>
    <div class="mobility-tests">
      <div v-for="test in tests" :key="test.id" class="test-card">
        <h4>{{ test.name }}</h4>
        <p>{{ test.description }}</p>
        <div class="test-score">
          <label>Score (1-10):</label>
          <input v-model.number="test.score" type="range" min="1" max="10" />
          <span>{{ test.score }}</span>
        </div>
        <button @click="saveTest(test)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobilityTracker',
  data() {
    return {
      tests: [
        { id: 1, name: 'Shoulder Mobility', description: 'Can you touch your hands behind your back?', score: 5 },
        { id: 2, name: 'Hip Flexibility', description: 'Deep squat test', score: 5 },
        { id: 3, name: 'Hamstring Flexibility', description: 'Toe touch test', score: 5 },
        { id: 4, name: 'Ankle Mobility', description: 'Knee to wall test', score: 5 }
      ]
    }
  },
  methods: {
    saveTest(test) {
      const history = JSON.parse(localStorage.getItem('mobility_history') || '[]');
      history.push({
        testId: test.id,
        score: test.score,
        date: new Date().toISOString()
      });
      localStorage.setItem('mobility_history', JSON.stringify(history));
      this.$emit('test-saved', test);
    }
  }
}
</script>
