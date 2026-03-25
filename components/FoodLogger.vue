<template>
  <div class="food-logger">
    <h3>Food Logger</h3>
    <div class="log-food">
      <input v-model="foodName" placeholder="Food name" />
      <input v-model.number="calories" placeholder="Calories" />
      <input v-model.number="protein" placeholder="Protein (g)" />
      <button @click="logFood">Log Food</button>
    </div>
    <div class="daily-totals">
      <p>Calories: {{ totalCalories }}</p>
      <p>Protein: {{ totalProtein }}g</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodLogger',
  data() {
    return {
      foodName: '', calories: 0, protein: 0,
      foods: []
    }
  },
  computed: {
    totalCalories() {
      return this.foods.reduce((sum, f) => sum + f.calories, 0);
    },
    totalProtein() {
      return this.foods.reduce((sum, f) => sum + f.protein, 0);
    }
  },
  methods: {
    logFood() {
      this.foods.push({ name: this.foodName, calories: this.calories, protein: this.protein });
      this.foodName = ''; this.calories = 0; this.protein = 0;
    }
  }
}
</script>
