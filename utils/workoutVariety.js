// Workout variety analyzer
export const workoutVariety = {
    calculateScore(exercises) {
        const unique = new Set(exercises.map(e => e.name));
        return (unique.size / exercises.length) * 100;
    },
    needsVariety(score) {
        return score < 50;
    }
};
