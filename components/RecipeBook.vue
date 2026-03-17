<template>
  <div class="recipe-book">
    <h3>Healthy Recipes</h3>
    <div class="recipe-filters">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">All</button>
      <button @click="filter = 'breakfast'" :class="{ active: filter === 'breakfast' }">Breakfast</button>
      <button @click="filter = 'lunch'" :class="{ active: filter === 'lunch' }">Lunch</button>
      <button @click="filter = 'dinner'" :class="{ active: filter === 'dinner' }">Dinner</button>
    </div>
    <div class="recipes-grid">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
        <h4>{{ recipe.name }}</h4>
        <p>{{ recipe.calories }} cal | {{ recipe.protein }}g protein</p>
        <p>Prep: {{ recipe.prepTime }} min</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeBook',
  data() {
    return {
      filter: 'all',
      recipes: [
        { id: 1, name: 'Protein Pancakes', type: 'breakfast', calories: 350, protein: 25, prepTime: 15 },
        { id: 2, name: 'Chicken Bowl', type: 'lunch', calories: 450, protein: 40, prepTime: 20 }
      ]
    }
  },
  computed: {
    filteredRecipes() {
      return this.filter === 'all' 
        ? this.recipes 
        : this.recipes.filter(r => r.type === this.filter);
    }
  }
}
</script>
