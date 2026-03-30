// Nutrition Analysis and Recommendations
export const analyzeMacros = (meals) => {
  const totals = meals.reduce((acc, meal) => ({
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fats: acc.fats + meal.fats,
    calories: acc.calories + meal.calories
  }), { protein: 0, carbs: 0, fats: 0, calories: 0 });
  
  return totals;
};

export const calculateMacroRatios = (protein, carbs, fats) => {
  const total = protein * 4 + carbs * 4 + fats * 9;
  
  return {
    proteinPercent: Math.round((protein * 4 / total) * 100),
    carbsPercent: Math.round((carbs * 4 / total) * 100),
    fatsPercent: Math.round((fats * 9 / total) * 100)
  };
};

export const recommendMacros = (weight, goal, activityLevel) => {
  const baseProtein = weight * 2.2; // grams per kg
  
  let carbMultiplier = 3;
  let fatMultiplier = 0.8;
  
  if (goal === 'cutting') {
    carbMultiplier = 2;
    fatMultiplier = 0.6;
  } else if (goal === 'bulking') {
    carbMultiplier = 4;
    fatMultiplier = 1.0;
  }
  
  const activityMultipliers = {
    sedentary: 0.8,
    moderate: 1.0,
    active: 1.2,
    veryActive: 1.4
  };
  
  const multiplier = activityMultipliers[activityLevel] || 1.0;
  
  return {
    protein: Math.round(baseProtein),
    carbs: Math.round(weight * carbMultiplier * multiplier),
    fats: Math.round(weight * fatMultiplier * multiplier)
  };
};

export const trackWaterIntake = (amount) => {
  const today = new Date().toDateString();
  const waterLog = JSON.parse(localStorage.getItem('waterLog') || '{}');
  
  if (!waterLog[today]) {
    waterLog[today] = 0;
  }
  
  waterLog[today] += amount;
  localStorage.setItem('waterLog', JSON.stringify(waterLog));
  
  return waterLog[today];
};

export const calculateMealTiming = (workoutTime, goal) => {
  const preworkout = new Date(workoutTime);
  preworkout.setHours(preworkout.getHours() - 2);
  
  const postworkout = new Date(workoutTime);
  postworkout.setHours(postworkout.getHours() + 1);
  
  return {
    preworkout: preworkout.toLocaleTimeString(),
    postworkout: postworkout.toLocaleTimeString(),
    recommendations: {
      preworkout: 'Complex carbs + moderate protein',
      postworkout: 'Fast-digesting protein + simple carbs'
    }
  };
};
