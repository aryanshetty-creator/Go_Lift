// Progress Tracking Utilities
export const calculateProgressRate = (startValue, currentValue, weeks) => {
  const totalChange = currentValue - startValue;
  const weeklyRate = totalChange / weeks;
  const percentageChange = ((currentValue - startValue) / startValue) * 100;
  
  return {
    totalChange,
    weeklyRate,
    percentageChange: Math.round(percentageChange * 10) / 10
  };
};

export const trackBodyMeasurements = (measurements) => {
  const history = JSON.parse(localStorage.getItem('measurementHistory') || '[]');
  
  history.push({
    date: new Date().toISOString(),
    ...measurements
  });
  
  localStorage.setItem('measurementHistory', JSON.stringify(history));
  return history;
};

export const calculateBodyFatChange = (measurements) => {
  if (measurements.length < 2) return null;
  
  const latest = measurements[measurements.length - 1];
  const previous = measurements[measurements.length - 2];
  
  return {
    change: latest.bodyFat - previous.bodyFat,
    trend: latest.bodyFat < previous.bodyFat ? 'decreasing' : 'increasing'
  };
};

export const generateProgressReport = (workouts, measurements) => {
  const report = {
    totalWorkouts: workouts.length,
    totalVolume: workouts.reduce((sum, w) => sum + w.volume, 0),
    averageIntensity: workouts.reduce((sum, w) => sum + w.intensity, 0) / workouts.length,
    personalRecords: findPersonalRecords(workouts),
    bodyComposition: calculateBodyFatChange(measurements)
  };
  
  return report;
};

const findPersonalRecords = (workouts) => {
  const prs = {};
  
  workouts.forEach(workout => {
    workout.exercises?.forEach(exercise => {
      if (!prs[exercise.name] || exercise.weight > prs[exercise.name].weight) {
        prs[exercise.name] = {
          weight: exercise.weight,
          date: workout.date
        };
      }
    });
  });
  
  return prs;
};

export const compareTimeframes = (data, timeframe1, timeframe2) => {
  const period1 = data.filter(d => isInTimeframe(d.date, timeframe1));
  const period2 = data.filter(d => isInTimeframe(d.date, timeframe2));
  
  return {
    period1: calculateStats(period1),
    period2: calculateStats(period2),
    improvement: calculateImprovement(period1, period2)
  };
};

const isInTimeframe = (date, timeframe) => {
  const d = new Date(date);
  const now = new Date();
  const daysAgo = (now - d) / (1000 * 60 * 60 * 24);
  
  return daysAgo >= timeframe.start && daysAgo <= timeframe.end;
};

const calculateStats = (data) => {
  return {
    count: data.length,
    avgVolume: data.reduce((sum, d) => sum + d.volume, 0) / data.length
  };
};

const calculateImprovement = (period1, period2) => {
  const stats1 = calculateStats(period1);
  const stats2 = calculateStats(period2);
  
  return {
    volumeChange: stats2.avgVolume - stats1.avgVolume,
    frequencyChange: stats2.count - stats1.count
  };
};
