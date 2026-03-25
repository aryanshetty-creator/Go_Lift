// Protein timing optimizer
export const proteinTiming = {
    distribute(dailyProtein, meals) {
        return Math.round(dailyProtein / meals);
    },
    postWorkout() {
        return { amount: 30, timing: 'within 2 hours' };
    }
};
