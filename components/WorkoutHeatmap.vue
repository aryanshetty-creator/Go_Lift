<template>
  <div class="workout-heatmap">
    <h2>Workout Heatmap</h2>
    <div class="heatmap-container">
      <div class="month-grid">
        <div v-for="week in weeks" :key="week.id" class="week-row">
          <div 
            v-for="day in week.days" 
            :key="day.date" 
            class="day-cell"
            :class="getIntensityClass(day.intensity)"
            :title="getDayTitle(day)"
          ></div>
        </div>
      </div>
      <div class="legend">
        <span>Less</span>
        <div class="legend-cell level-0"></div>
        <div class="legend-cell level-1"></div>
        <div class="legend-cell level-2"></div>
        <div class="legend-cell level-3"></div>
        <div class="legend-cell level-4"></div>
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutHeatmap',
  data() {
    return {
      weeks: this.generateWeeks()
    }
  },
  methods: {
    generateWeeks() {
      const weeks = [];
      for (let i = 0; i < 12; i++) {
        const days = [];
        for (let j = 0; j < 7; j++) {
          days.push({
            date: `2024-03-${i * 7 + j + 1}`,
            intensity: Math.floor(Math.random() * 5)
          });
        }
        weeks.push({ id: i, days });
      }
      return weeks;
    },
    getIntensityClass(intensity) {
      return `level-${intensity}`;
    },
    getDayTitle(day) {
      return `${day.date}: ${day.intensity} workouts`;
    }
  }
}
</script>

<style scoped>
.workout-heatmap {
  padding: 20px;
}
.month-grid {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.week-row {
  display: flex;
  gap: 3px;
}
.day-cell {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  cursor: pointer;
}
.level-0 { background: #ebedf0; }
.level-1 { background: #c6e48b; }
.level-2 { background: #7bc96f; }
.level-3 { background: #239a3b; }
.level-4 { background: #196127; }
.legend {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}
.legend-cell {
  width: 15px;
  height: 15px;
  border-radius: 2px;
}
</style>
