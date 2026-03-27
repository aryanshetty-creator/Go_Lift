// Workout efficiency calculator
export const workoutEfficiency = {
    calculate(volume, duration) {
        return Math.round(volume / duration);
    },
    getRating(efficiency) {
        if (efficiency > 100) return 'Excellent';
        if (efficiency > 70) return 'Good';
        if (efficiency > 40) return 'Average';
        return 'Low';
    }
};
