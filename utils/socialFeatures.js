// Social Features and Community
export const shareWorkout = (workout) => {
  const shareText = `Just completed ${workout.name}! 💪\n` +
                   `Volume: ${workout.volume}kg\n` +
                   `Duration: ${workout.duration} minutes\n` +
                   `#GoLift #FitnessJourney`;
  
  return {
    text: shareText,
    url: `https://golift.app/workout/${workout.id}`,
    hashtags: ['GoLift', 'Fitness', 'Workout']
  };
};

export const createChallenge = (challengeData) => {
  const challenge = {
    id: Date.now(),
    name: challengeData.name,
    description: challengeData.description,
    goal: challengeData.goal,
    duration: challengeData.duration,
    participants: [],
    createdAt: new Date().toISOString()
  };
  
  const challenges = JSON.parse(localStorage.getItem('challenges') || '[]');
  challenges.push(challenge);
  localStorage.setItem('challenges', JSON.stringify(challenges));
  
  return challenge;
};

export const joinChallenge = (challengeId, userId) => {
  const challenges = JSON.parse(localStorage.getItem('challenges') || '[]');
  const challenge = challenges.find(c => c.id === challengeId);
  
  if (challenge && !challenge.participants.includes(userId)) {
    challenge.participants.push(userId);
    localStorage.setItem('challenges', JSON.stringify(challenges));
    return true;
  }
  
  return false;
};

export const getChallengeLeaderboard = (challengeId) => {
  // Mock leaderboard data
  return [
    { rank: 1, username: 'FitWarrior', score: 1250, avatar: '💪' },
    { rank: 2, username: 'GymRat', score: 1180, avatar: '🏋️' },
    { rank: 3, username: 'IronLifter', score: 1050, avatar: '⚡' },
    { rank: 4, username: 'StrengthSeeker', score: 980, avatar: '🔥' },
    { rank: 5, username: 'MuscleBuilder', score: 920, avatar: '💯' }
  ];
};

export const sendWorkoutKudos = (workoutId, fromUser, toUser) => {
  const kudos = {
    id: Date.now(),
    workoutId,
    from: fromUser,
    to: toUser,
    timestamp: new Date().toISOString()
  };
  
  const allKudos = JSON.parse(localStorage.getItem('kudos') || '[]');
  allKudos.push(kudos);
  localStorage.setItem('kudos', JSON.stringify(allKudos));
  
  return kudos;
};

export const findWorkoutBuddy = (preferences) => {
  // Mock workout buddy matching
  return [
    {
      id: 1,
      name: 'Alex Johnson',
      goals: ['strength', 'hypertrophy'],
      schedule: ['Monday', 'Wednesday', 'Friday'],
      location: 'Downtown Gym',
      matchScore: 95
    },
    {
      id: 2,
      name: 'Sarah Williams',
      goals: ['endurance', 'weight-loss'],
      schedule: ['Tuesday', 'Thursday', 'Saturday'],
      location: 'City Fitness Center',
      matchScore: 87
    }
  ];
};

export const postToFeed = (content) => {
  const post = {
    id: Date.now(),
    content,
    author: 'CurrentUser',
    timestamp: new Date().toISOString(),
    likes: 0,
    comments: []
  };
  
  const feed = JSON.parse(localStorage.getItem('socialFeed') || '[]');
  feed.unshift(post);
  localStorage.setItem('socialFeed', JSON.stringify(feed));
  
  return post;
};
