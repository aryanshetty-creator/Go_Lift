// Workout Consistency Calculator
export const calculateConsistency = (workouts) => {
  if (!workouts || workouts.length === 0) return 0;
  
  const totalDays = 30;
  const workoutDays = new Set(workouts.map(w => w.date)).size;
  return Math.round((workoutDays / totalDays) * 100);
};

export const getConsistencyRating = (percentage) => {
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 75) return 'Great';
  if (percentage >= 60) return 'Good';
  if (percentage >= 40) return 'Fair';
  return 'Needs Improvement';
};

export const calculateStreak = (workouts) => {
  if (!workouts || workouts.length === 0) return 0;
  
  const sortedDates = workouts.map(w => new Date(w.date)).sort((a, b) => b - a);
  let streak = 1;
  
  for (let i = 0; i < sortedDates.length - 1; i++) {
    const diff = Math.abs(sortedDates[i] - sortedDates[i + 1]) / (1000 * 60 * 60 * 24);
    if (diff <= 1) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
};

export const predictNextWorkout = (workouts) => {
  if (!workouts || workouts.length < 2) return null;
  
  const intervals = [];
  for (let i = 0; i < workouts.length - 1; i++) {
    const diff = Math.abs(new Date(workouts[i].date) - new Date(workouts[i + 1].date)) / (1000 * 60 * 60 * 24);
    intervals.push(diff);
  }
  
  const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  const lastWorkout = new Date(workouts[0].date);
  const nextWorkout = new Date(lastWorkout.getTime() + avgInterval * 24 * 60 * 60 * 1000);
  
  return nextWorkout;
};
