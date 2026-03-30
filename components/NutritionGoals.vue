<template>
  <div class="nutrition-goals">
    <h3>Nutrition Goals</h3>
    <div class="goals">
      <p>Calories: {{ calories }}/{{ calorieGoal }}</p>
      <p>Protein: {{ protein }}g/{{ proteinGoal }}g</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NutritionGoals',
  data() {
    return {
      calories: 1500,
      calorieGoal: 2000,
      protein: 80,
      proteinGoal: 150
    }
  }
}
</script>
