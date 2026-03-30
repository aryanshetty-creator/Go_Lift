<template>
  <div class="form-analyzer">
    <h2>Exercise Form Analyzer</h2>
    <div class="video-section">
      <div class="video-placeholder">
        <p>📹 Upload or record your exercise video</p>
        <button @click="uploadVideo" class="btn-primary">Upload Video</button>
      </div>
    </div>
    <div v-if="analysisResults" class="analysis-results">
      <h3>Form Analysis Results</h3>
      <div class="score-display">
        <div class="score-circle" :class="getScoreClass(analysisResults.overallScore)">
          <span class="score-value">{{ analysisResults.overallScore }}</span>
          <span class="score-label">/100</span>
        </div>
      </div>
      <div class="feedback-list">
        <div v-for="feedback in analysisResults.feedback" :key="feedback.id" class="feedback-item">
          <span class="feedback-icon" :class="feedback.type">{{ getFeedbackIcon(feedback.type) }}</span>
          <p>{{ feedback.message }}</p>
        </div>
      </div>
      <div class="recommendations">
        <h4>Recommendations</h4>
        <ul>
          <li v-for="rec in analysisResults.recommendations" :key="rec">{{ rec }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAnalyzer',
  data() {
    return {
      analysisResults: null
    }
  },
  methods: {
    uploadVideo() {
      // Simulate analysis
      this.analysisResults = {
        overallScore: 78,
        feedback: [
          { id: 1, type: 'good', message: 'Good depth on squats' },
          { id: 2, type: 'warning', message: 'Knees slightly caving inward' },
          { id: 3, type: 'error', message: 'Lower back rounding detected' }
        ],
        recommendations: [
          'Focus on keeping knees aligned with toes',
          'Engage core throughout the movement',
          'Consider reducing weight to improve form'
        ]
      };
    },
    getScoreClass(score) {
      if (score >= 80) return 'excellent';
      if (score >= 60) return 'good';
      return 'needs-work';
    },
    getFeedbackIcon(type) {
      const icons = { good: '✓', warning: '⚠', error: '✗' };
      return icons[type];
    }
  }
}
</script>

<style scoped>
.form-analyzer {
  padding: 20px;
}
.video-placeholder {
  background: #f5f5f5;
  padding: 60px;
  text-align: center;
  border-radius: 10px;
  border: 2px dashed #ddd;
}
.score-display {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.score-circle.excellent { background: #4CAF50; color: white; }
.score-circle.good { background: #FFC107; color: black; }
.score-circle.needs-work { background: #F44336; color: white; }
.score-value { font-size: 3em; }
.feedback-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 10px 0;
  background: #f9f9f9;
  border-radius: 5px;
}
.feedback-icon {
  font-size: 1.5em;
  font-weight: bold;
}
.feedback-icon.good { color: #4CAF50; }
.feedback-icon.warning { color: #FFC107; }
.feedback-icon.error { color: #F44336; }
</style>
