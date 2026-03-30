// Workout Prediction and Forecasting
export const predictNextPR = (exerciseHistory) => {
  if (!exerciseHistory || exerciseHistory.length < 3) return null;
  
  const weights = exerciseHistory.map(e => e.weight);
  const avgIncrease = (weights[weights.length - 1] - weights[0]) / (weights.length - 1);
  const nextPR = weights[weights.length - 1] + avgIncrease;
  
  return Math.round(nextPR * 10) / 10;
};

export const estimateTimeToGoal = (currentWeight, goalWeight, progressRate) => {
  const difference = goalWeight - currentWeight;
  const weeksNeeded = Math.ceil(difference / progressRate);
  
  return {
    weeks: weeksNeeded,
    months: Math.ceil(weeksNeeded / 4),
    estimatedDate: new Date(Date.now() + weeksNeeded * 7 * 24 * 60 * 60 * 1000)
  };
};

export const predictPlateauRisk = (recentWorkouts) => {
  if (recentWorkouts.length < 5) return 'low';
  
  const volumes = recentWorkouts.map(w => w.volume);
  const variance = calculateVariance(volumes);
  
  if (variance < 100) return 'high';
  if (variance < 500) return 'medium';
  return 'low';
};

const calculateVariance = (values) => {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const squaredDiffs = values.map(v => Math.pow(v - mean, 2));
  return squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
};

export const suggestDeloadWeek = (trainingWeeks) => {
  const consecutiveHardWeeks = trainingWeeks.filter(w => w.intensity > 80).length;
  return consecutiveHardWeeks >= 3;
};

export const forecastRecoveryTime = (workoutIntensity, muscleGroup) => {
  const baseRecovery = {
    'Legs': 72,
    'Back': 48,
    'Chest': 48,
    'Shoulders': 36,
    'Arms': 36,
    'Core': 24
  };
  
  const intensityMultiplier = workoutIntensity / 100;
  const recoveryHours = baseRecovery[muscleGroup] * intensityMultiplier;
  
  return Math.round(recoveryHours);
};
