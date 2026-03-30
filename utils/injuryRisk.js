// Injury Risk Assessment
export const assessInjuryRisk = (workoutData) => {
  let riskScore = 0;
  const factors = [];
  
  // Check for sudden volume increase
  if (workoutData.volumeIncrease > 20) {
    riskScore += 30;
    factors.push('Sudden volume increase detected');
  }
  
  // Check for insufficient recovery
  if (workoutData.daysSinceLastWorkout < 1) {
    riskScore += 25;
    factors.push('Insufficient recovery time');
  }
  
  // Check for muscle imbalance
  if (workoutData.muscleImbalance > 15) {
    riskScore += 20;
    factors.push('Muscle imbalance detected');
  }
  
  // Check for poor form indicators
  if (workoutData.formScore < 70) {
    riskScore += 25;
    factors.push('Form needs improvement');
  }
  
  return {
    score: riskScore,
    level: getRiskLevel(riskScore),
    factors: factors,
    recommendations: getRecommendations(riskScore, factors)
  };
};

const getRiskLevel = (score) => {
  if (score >= 70) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
};

const getRecommendations = (score, factors) => {
  const recommendations = [];
  
  if (factors.includes('Sudden volume increase detected')) {
    recommendations.push('Reduce training volume by 20-30%');
  }
  
  if (factors.includes('Insufficient recovery time')) {
    recommendations.push('Add an extra rest day this week');
  }
  
  if (factors.includes('Muscle imbalance detected')) {
    recommendations.push('Focus on unilateral exercises');
  }
  
  if (factors.includes('Form needs improvement')) {
    recommendations.push('Reduce weight and focus on technique');
  }
  
  return recommendations;
};

export const calculateMuscleImbalance = (leftSide, rightSide) => {
  const difference = Math.abs(leftSide - rightSide);
  const average = (leftSide + rightSide) / 2;
  return (difference / average) * 100;
};

export const trackPainPoints = (bodyPart, intensity) => {
  const painLog = JSON.parse(localStorage.getItem('painLog') || '[]');
  painLog.push({
    bodyPart,
    intensity,
    date: new Date().toISOString()
  });
  localStorage.setItem('painLog', JSON.stringify(painLog));
  
  return painLog;
};
