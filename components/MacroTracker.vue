<template>
  <div class="macro-tracker">
    <h2>Macro Tracker</h2>
    <div class="daily-summary">
      <div class="macro-ring">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" stroke-width="10"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#4CAF50" stroke-width="10"
                  :stroke-dasharray="calculateProgress(currentMacros.protein, targetMacros.protein)"
                  stroke-dashoffset="25"/>
        </svg>
        <div class="ring-label">
          <span class="value">{{ currentMacros.protein }}g</span>
          <span class="label">Protein</span>
        </div>
      </div>
      <div class="macro-ring">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" stroke-width="10"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2196F3" stroke-width="10"
                  :stroke-dasharray="calculateProgress(currentMacros.carbs, targetMacros.carbs)"
                  stroke-dashoffset="25"/>
        </svg>
        <div class="ring-label">
          <span class="value">{{ currentMacros.carbs }}g</span>
          <span class="label">Carbs</span>
        </div>
      </div>
      <div class="macro-ring">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" stroke-width="10"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC107" stroke-width="10"
                  :stroke-dasharray="calculateProgress(currentMacros.fats, targetMacros.fats)"
                  stroke-dashoffset="25"/>
        </svg>
        <div class="ring-label">
          <span class="value">{{ currentMacros.fats }}g</span>
          <span class="label">Fats</span>
        </div>
      </div>
    </div>
    <div class="add-meal">
      <button @click="showMealForm = true" class="btn-primary">+ Add Meal</button>
    </div>
    <div v-if="showMealForm" class="meal-form">
      <input v-model="newMeal.name" placeholder="Meal name" />
      <input v-model.number="newMeal.protein" type="number" placeholder="Protein (g)" />
      <input v-model.number="newMeal.carbs" type="number" placeholder="Carbs (g)" />
      <input v-model.number="newMeal.fats" type="number" placeholder="Fats (g)" />
      <button @click="addMeal" class="btn-success">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacroTracker',
  data() {
    return {
      currentMacros: { protein: 120, carbs: 250, fats: 60 },
      targetMacros: { protein: 180, carbs: 300, fats: 70 },
      showMealForm: false,
      newMeal: { name: '', protein: 0, carbs: 0, fats: 0 }
    }
  },
  methods: {
    calculateProgress(current, target) {
      const percentage = (current / target) * 100;
      const circumference = 2 * Math.PI * 40;
      return `${(percentage / 100) * circumference} ${circumference}`;
    },
    addMeal() {
      this.currentMacros.protein += this.newMeal.protein;
      this.currentMacros.carbs += this.newMeal.carbs;
      this.currentMacros.fats += this.newMeal.fats;
      this.showMealForm = false;
      this.newMeal = { name: '', protein: 0, carbs: 0, fats: 0 };
    }
  }
}
</script>

<style scoped>
.macro-tracker {
  padding: 20px;
}
.daily-summary {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}
.macro-ring {
  position: relative;
  width: 120px;
  height: 120px;
}
.macro-ring svg {
  transform: rotate(-90deg);
}
.ring-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.ring-label .value {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
}
.ring-label .label {
  font-size: 0.9em;
  color: #666;
}
.meal-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.meal-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
