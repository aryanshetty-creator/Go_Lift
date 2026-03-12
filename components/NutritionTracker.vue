<template>
  <div class="nutrition-tracker">
    <h3>Nutrition Tracker</h3>
    <div class="nutrition-form">
      <input v-model="mealName" placeholder="Meal name" />
      <input v-model.number="calories" type="number" placeholder="Calories" />
      <input v-model.number="protein" type="number" placeholder="Protein (g)" />
      <button @click="addMeal">Add Meal</button>
    </div>
    <div class="daily-totals">
      <div class="total-item">
        <span>Total Calories</span>
        <span class="total-value">{{ totalCalories }}</span>
      </div>
      <div class="total-item">
        <span>Total Protein</span>
        <span class="total-value">{{ totalProtein }}g</span>
      </div>
    </div>
    <ul class="meals-list">
      <li v-for="(meal, index) in meals" :key="index">
        <span>{{ meal.name }}</span>
        <span>{{ meal.calories }} cal | {{ meal.protein }}g protein</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NutritionTracker',
  data() {
    return {
      mealName: '',
      calories: 0,
      protein: 0,
      meals: []
    }
  },
  computed: {
    totalCalories() {
      return this.meals.reduce((sum, meal) => sum + meal.calories, 0);
    },
    totalProtein() {
      return this.meals.reduce((sum, meal) => sum + meal.protein, 0);
    }
  },
  methods: {
    addMeal() {
      if (this.mealName && this.calories > 0) {
        this.meals.push({
          name: this.mealName,
          calories: this.calories,
          protein: this.protein
        });
        this.mealName = '';
        this.calories = 0;
        this.protein = 0;
      }
    }
  }
}
</script>
