// Gamification System
export const calculateXP = (workout) => {
  let xp = 0;
  
  // Base XP for completing workout
  xp += 50;
  
  // Volume bonus
  xp += Math.floor(workout.volume / 100);
  
  // Duration bonus
  xp += Math.floor(workout.duration / 5);
  
  // Intensity bonus
  if (workout.intensity >= 80) xp += 30;
  else if (workout.intensity >= 60) xp += 15;
  
  // PR bonus
  if (workout.hasPersonalRecord) xp += 100;
  
  return xp;
};

export const getLevelFromXP = (totalXP) => {
  const level = Math.floor(Math.sqrt(totalXP / 100)) + 1;
  const xpForCurrentLevel = Math.pow(level - 1, 2) * 100;
  const xpForNextLevel = Math.pow(level, 2) * 100;
  const xpProgress = totalXP - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - xpForCurrentLevel;
  
  return {
    level,
    currentXP: totalXP,
    xpProgress,
    xpNeeded,
    progressPercentage: (xpProgress / xpNeeded) * 100
  };
};

export const unlockAchievement = (achievementId) => {
  const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
  
  if (!achievements.includes(achievementId)) {
    achievements.push(achievementId);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    return true;
  }
  
  return false;
};

export const checkAchievements = (userStats) => {
  const newAchievements = [];
  
  const achievementConditions = [
    { id: 'first_workout', condition: userStats.totalWorkouts >= 1, name: 'First Steps' },
    { id: 'week_warrior', condition: userStats.streak >= 7, name: 'Week Warrior' },
    { id: 'month_master', condition: userStats.streak >= 30, name: 'Month Master' },
    { id: 'volume_king', condition: userStats.totalVolume >= 100000, name: 'Volume King' },
    { id: 'pr_hunter', condition: userStats.personalRecords >= 10, name: 'PR Hunter' },
    { id: 'consistency_champion', condition: userStats.totalWorkouts >= 100, name: 'Consistency Champion' }
  ];
  
  achievementConditions.forEach(achievement => {
    if (achievement.condition && unlockAchievement(achievement.id)) {
      newAchievements.push(achievement);
    }
  });
  
  return newAchievements;
};

export const getDailyQuest = () => {
  const quests = [
    { id: 1, title: 'Complete a leg workout', xp: 100, difficulty: 'medium' },
    { id: 2, title: 'Hit 5000kg total volume', xp: 150, difficulty: 'hard' },
    { id: 3, title: 'Try a new exercise', xp: 75, difficulty: 'easy' },
    { id: 4, title: 'Beat your bench press PR', xp: 200, difficulty: 'hard' },
    { id: 5, title: 'Complete workout in under 60 minutes', xp: 80, difficulty: 'medium' }
  ];
  
  const today = new Date().getDate();
  return quests[today % quests.length];
};

export const calculateRank = (totalXP, allUsers) => {
  const sortedUsers = allUsers.sort((a, b) => b.xp - a.xp);
  const userRank = sortedUsers.findIndex(u => u.xp <= totalXP) + 1;
  
  return {
    rank: userRank,
    totalUsers: allUsers.length,
    percentile: Math.round((1 - userRank / allUsers.length) * 100)
  };
};
