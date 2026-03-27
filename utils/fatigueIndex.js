// Fatigue index calculator
export const fatigueIndex = {
    calculate(workoutDays, intensity, sleep) {
        const workloadScore = workoutDays * intensity;
        const recoveryScore = sleep * 10;
        return Math.max(0, Math.min(100, workloadScore - recoveryScore));
    },
    getStatus(index) {
        if (index < 30) return 'Well Rested';
        if (index < 60) return 'Moderate Fatigue';
        return 'High Fatigue - Rest Needed';
    }
};
