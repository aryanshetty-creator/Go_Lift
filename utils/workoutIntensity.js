// Workout intensity calculations

export const workoutIntensity = {
    calculateRPE(weight, reps, repsInReserve) {
        // RPE = Rate of Perceived Exertion (1-10 scale)
        const maxReps = reps + repsInReserve;
        const intensity = (reps / maxReps) * 10;
        return Math.min(Math.round(intensity), 10);
    },

    calculateRIR(rpe) {
        // RIR = Reps in Reserve
        return Math.max(0, 10 - rpe);
    },

    getIntensityZone(percentage) {
        if (percentage < 60) return 'Light';
        if (percentage < 75) return 'Moderate';
        if (percentage < 85) return 'Heavy';
        if (percentage < 95) return 'Very Heavy';
        return 'Maximum';
    },

    calculateWorkingWeight(oneRepMax, targetReps) {
        const percentages = {
            1: 100, 2: 95, 3: 93, 4: 90, 5: 87,
            6: 85, 7: 83, 8: 80, 9: 77, 10: 75,
            12: 70, 15: 65, 20: 60
        };
        
        const percentage = percentages[targetReps] || 75;
        return Math.round(oneRepMax * (percentage / 100));
    },

    recommendRestTime(intensity) {
        if (intensity >= 90) return 180; // 3 minutes
        if (intensity >= 80) return 120; // 2 minutes
        if (intensity >= 70) return 90;  // 1.5 minutes
        return 60; // 1 minute
    },

    calculateTrainingVolume(sets, reps, weight) {
        return sets * reps * weight;
    }
};
