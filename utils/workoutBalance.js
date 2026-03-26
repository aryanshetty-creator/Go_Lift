// Workout balance analyzer
export const workoutBalance = {
    analyze(workouts) {
        const groups = {};
        workouts.forEach(w => {
            groups[w.muscleGroup] = (groups[w.muscleGroup] || 0) + 1;
        });
        return groups;
    },
    isBalanced(groups) {
        const values = Object.values(groups);
        const max = Math.max(...values);
        const min = Math.min(...values);
        return (max - min) <= 2;
    }
};
