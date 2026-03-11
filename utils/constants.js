// Application constants

export const WORKOUT_TYPES = [
  'Strength',
  'Cardio',
  'Flexibility',
  'Balance',
  'HIIT',
  'Yoga',
  'Pilates',
  'CrossFit'
];

export const MUSCLE_GROUPS = [
  'Chest',
  'Back',
  'Shoulders',
  'Arms',
  'Legs',
  'Core',
  'Full Body'
];

export const DIFFICULTY_LEVELS = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
];

export const STORAGE_KEYS = {
  WORKOUTS: 'go_lift_workouts',
  GOALS: 'go_lift_goals',
  HISTORY: 'go_lift_history',
  SETTINGS: 'go_lift_settings'
};

export const DEFAULT_SETTINGS = {
  theme: 'light',
  notifications: true,
  weeklyGoal: 7,
  restDayReminder: true
};
