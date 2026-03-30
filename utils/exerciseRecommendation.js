// Exercise Recommendation Engine
export const recommendExercises = (userProfile, goals) => {
  const recommendations = [];
  
  if (goals.includes('strength')) {
    recommendations.push(
      { name: 'Deadlift', sets: 4, reps: 6, priority: 'high' },
      { name: 'Squat', sets: 4, reps: 6, priority: 'high' },
      { name: 'Bench Press', sets: 4, reps: 6, priority: 'high' }
    );
  }
  
  if (goals.includes('hypertrophy')) {
    recommendations.push(
      { name: 'Dumbbell Press', sets: 4, reps: 10, priority: 'medium' },
      { name: 'Lat Pulldown', sets: 4, reps: 12, priority: 'medium' },
      { name: 'Leg Press', sets: 4, reps: 12, priority: 'medium' }
    );
  }
  
  if (goals.includes('endurance')) {
    recommendations.push(
      { name: 'Running', duration: 30, intensity: 'moderate', priority: 'high' },
      { name: 'Cycling', duration: 45, intensity: 'moderate', priority: 'medium' },
      { name: 'Swimming', duration: 30, intensity: 'moderate', priority: 'medium' }
    );
  }
  
  return recommendations;
};

export const getAlternativeExercises = (exercise) => {
  const alternatives = {
    'Bench Press': ['Dumbbell Press', 'Push-ups', 'Chest Fly'],
    'Squat': ['Leg Press', 'Lunges', 'Bulgarian Split Squat'],
    'Deadlift': ['Romanian Deadlift', 'Trap Bar Deadlift', 'Good Mornings'],
    'Pull-up': ['Lat Pulldown', 'Assisted Pull-up', 'Inverted Row']
  };
  
  return alternatives[exercise] || [];
};

export const adjustForExperience = (exercise, experienceLevel) => {
  const multipliers = {
    beginner: 0.6,
    intermediate: 0.8,
    advanced: 1.0
  };
  
  const multiplier = multipliers[experienceLevel] || 0.8;
  
  return {
    ...exercise,
    sets: Math.ceil(exercise.sets * multiplier),
    reps: Math.ceil(exercise.reps * multiplier)
  };
};
