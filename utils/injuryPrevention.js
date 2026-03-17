// Injury prevention utilities

export const injuryPrevention = {
    warmupRoutines: {
        upper: ['Arm Circles', 'Shoulder Rolls', 'Wrist Rotations'],
        lower: ['Leg Swings', 'Hip Circles', 'Ankle Rolls'],
        core: ['Cat-Cow', 'Bird Dog', 'Dead Bug']
    },

    getWarmup(muscleGroup) {
        return this.warmupRoutines[muscleGroup] || this.warmupRoutines.upper;
    },

    checkFormRisks(exercise, weight, reps) {
        const risks = [];
        
        if (weight > 0 && reps > 15) {
            risks.push('High reps with weight - risk of fatigue-related injury');
        }
        
        return risks;
    },

    recommendRestDays(workoutFrequency) {
        if (workoutFrequency >= 6) {
            return 'Take at least 1 rest day per week';
        }
        return 'Current frequency is safe';
    }
};
