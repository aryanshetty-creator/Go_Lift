// Workout Planning and Scheduling
export const generateWeeklyPlan = (goals, daysPerWeek, experienceLevel) => {
  const plans = {
    3: ['Full Body A', 'Full Body B', 'Full Body C'],
    4: ['Upper Body', 'Lower Body', 'Upper Body', 'Lower Body'],
    5: ['Push', 'Pull', 'Legs', 'Upper Body', 'Lower Body'],
    6: ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs']
  };
  
  const selectedPlan = plans[daysPerWeek] || plans[4];
  
  return selectedPlan.map((focus, index) => ({
    day: index + 1,
    focus,
    exercises: getExercisesForFocus(focus, experienceLevel),
    duration: 60,
    intensity: 'moderate'
  }));
};

const getExercisesForFocus = (focus, level) => {
  const exerciseDatabase = {
    'Push': ['Bench Press', 'Overhead Press', 'Dips', 'Tricep Extensions'],
    'Pull': ['Deadlift', 'Pull-ups', 'Rows', 'Bicep Curls'],
    'Legs': ['Squat', 'Leg Press', 'Lunges', 'Leg Curls'],
    'Upper Body': ['Bench Press', 'Rows', 'Overhead Press', 'Pull-ups'],
    'Lower Body': ['Squat', 'Deadlift', 'Leg Press', 'Calf Raises'],
    'Full Body A': ['Squat', 'Bench Press', 'Rows'],
    'Full Body B': ['Deadlift', 'Overhead Press', 'Pull-ups'],
    'Full Body C': ['Leg Press', 'Dips', 'Lat Pulldown']
  };
  
  return exerciseDatabase[focus] || [];
};

export const optimizeWorkoutOrder = (exercises) => {
  // Prioritize compound movements first
  const compound = exercises.filter(e => e.type === 'compound');
  const isolation = exercises.filter(e => e.type === 'isolation');
  
  return [...compound, ...isolation];
};

export const calculateRestDays = (workoutDays) => {
  const totalDays = 7;
  const restDays = totalDays - workoutDays.length;
  
  const optimalRestDays = [];
  const daysBetween = Math.floor(totalDays / workoutDays.length);
  
  for (let i = 0; i < restDays; i++) {
    optimalRestDays.push((i + 1) * daysBetween);
  }
  
  return optimalRestDays;
};

export const adjustForRecovery = (plannedWorkout, recoveryScore) => {
  if (recoveryScore < 50) {
    return {
      ...plannedWorkout,
      intensity: 'light',
      volume: plannedWorkout.volume * 0.7,
      recommendation: 'Consider a deload or active recovery day'
    };
  }
  
  if (recoveryScore < 70) {
    return {
      ...plannedWorkout,
      intensity: 'moderate',
      volume: plannedWorkout.volume * 0.85,
      recommendation: 'Reduce volume slightly to aid recovery'
    };
  }
  
  return plannedWorkout;
};

export const scheduleDeload = (trainingWeeks) => {
  const weeksOfHardTraining = trainingWeeks.filter(w => w.intensity > 75).length;
  
  if (weeksOfHardTraining >= 3) {
    return {
      recommended: true,
      timing: 'This week',
      adjustments: {
        volume: 0.5,
        intensity: 0.6,
        duration: 'Reduce by 30-40%'
      }
    };
  }
  
  return { recommended: false };
};

export const createMesocycle = (duration, goal) => {
  const weeks = [];
  const totalWeeks = duration;
  
  for (let i = 1; i <= totalWeeks; i++) {
    let phase = 'accumulation';
    let intensity = 70;
    
    if (i <= totalWeeks * 0.6) {
      phase = 'accumulation';
      intensity = 70 + (i * 2);
    } else if (i <= totalWeeks * 0.9) {
      phase = 'intensification';
      intensity = 85;
    } else {
      phase = 'deload';
      intensity = 50;
    }
    
    weeks.push({
      week: i,
      phase,
      intensity,
      volumeMultiplier: phase === 'deload' ? 0.5 : 1.0
    });
  }
  
  return weeks;
};
