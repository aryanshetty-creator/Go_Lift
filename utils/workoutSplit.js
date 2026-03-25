// Workout split recommender
export const workoutSplit = {
    recommend(daysPerWeek) {
        if (daysPerWeek <= 3) return 'Full Body';
        if (daysPerWeek <= 4) return 'Upper/Lower';
        return 'Push/Pull/Legs';
    }
};
