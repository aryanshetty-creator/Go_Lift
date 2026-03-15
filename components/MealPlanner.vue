<template>
  <div class="meal-planner">
    <h3>Weekly Meal Planner</h3>
    <div class="meal-grid">
      <div v-for="day in weekDays" :key="day" class="day-meals">
        <h4>{{ day }}</h4>
        <div class="meal-slot">
          <label>Breakfast</label>
          <input v-model="meals[day].breakfast" placeholder="Enter meal" />
        </div>
        <div class="meal-slot">
          <label>Lunch</label>
          <input v-model="meals[day].lunch" placeholder="Enter meal" />
        </div>
        <div class="meal-slot">
          <label>Dinner</label>
          <input v-model="meals[day].dinner" placeholder="Enter meal" />
        </div>
      </div>
    </div>
    <button @click="saveMealPlan" class="save-btn">Save Meal Plan</button>
  </div>
</template>

<script>
export default {
  name: 'MealPlanner',
  data() {
    return {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      meals: {}
    }
  },
  created() {
    this.initializeMeals();
  },
  methods: {
    initializeMeals() {
      this.weekDays.forEach(day => {
        this.meals[day] = {
          breakfast: '',
          lunch: '',
          dinner: ''
        };
      });
    },
    saveMealPlan() {
      localStorage.setItem('meal_plan', JSON.stringify(this.meals));
      this.$emit('saved');
    }
  }
}
</script>
