// Warmup time calculator
export const warmupTime = {
    calculate(workoutIntensity, duration) {
        if (workoutIntensity === 'high') return Math.min(duration * 0.2, 15);
        if (workoutIntensity === 'medium') return Math.min(duration * 0.15, 10);
        return 5;
    }
};
