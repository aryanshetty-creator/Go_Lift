// Hydration calculator

export const hydrationCalculator = {
    calculateDaily(weight, activityLevel) {
        const base = weight * 35; // ml per kg
        const multipliers = { low: 1.0, medium: 1.2, high: 1.5 };
        return Math.round(base * (multipliers[activityLevel] || 1.0));
    },
    
    duringWorkout(duration) {
        return Math.round(duration * 7); // 7ml per minute
    }
};
