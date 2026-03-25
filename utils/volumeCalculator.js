// Training volume calculator
export const volumeCalculator = {
    calculate(sets, reps, weight) {
        return sets * reps * weight;
    },
    weekly(workouts) {
        return workouts.reduce((sum, w) => sum + this.calculate(w.sets, w.reps, w.weight), 0);
    }
};
