<template>
  <div class="meal-prep">
    <h3>Meal Prep Planner</h3>
    <div class="meal-list">
      <div v-for="meal in meals" :key="meal.id">
        <h4>{{ meal.name }}</h4>
        <p>Prep time: {{ meal.prepTime }} min</p>
        <p>Servings: {{ meal.servings }}</p>
      </div>
    </div>
    <button @click="addMeal">Add Meal</button>
  </div>
</template>
<script>
export default {
  name: 'MealPrep',
  data() {
    return {
      meals: [
        { id: 1, name: 'Chicken & Rice', prepTime: 30, servings: 4 }
      ]
    }
  },
  methods: {
    addMeal() {
      console.log('Add meal');
    }
  }
}
</script>
