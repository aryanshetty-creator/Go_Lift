// Workout pacing calculator
export const workoutPacing = {
    calculateTempo(duration, exercises) {
        return Math.round(duration / exercises);
    },
    recommendRest(intensity) {
        return intensity > 80 ? 120 : intensity > 60 ? 90 : 60;
    }
};
