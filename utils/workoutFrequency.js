// Workout frequency optimizer
export const workoutFrequency = {
    recommend(goal, experience) {
        if (goal === 'strength' && experience === 'beginner') return 3;
        if (goal === 'hypertrophy') return 4;
        if (goal === 'endurance') return 5;
        return 4;
    }
};
