// Recovery time calculator

export const recoveryCalculator = {
    calculateRecoveryTime(muscleGroup, intensity) {
        const baseTimes = {
            'chest': 48,
            'back': 48,
            'legs': 72,
            'shoulders': 48,
            'arms': 36,
            'core': 24
        };
        
        const intensityMultipliers = {
            'low': 0.7,
            'medium': 1.0,
            'high': 1.3,
            'max': 1.5
        };
        
        const baseTime = baseTimes[muscleGroup.toLowerCase()] || 48;
        const multiplier = intensityMultipliers[intensity] || 1.0;
        
        return Math.round(baseTime * multiplier);
    },

    isRecovered(lastWorkoutDate, muscleGroup, intensity) {
        const recoveryTime = this.calculateRecoveryTime(muscleGroup, intensity);
        const hoursSince = (Date.now() - new Date(lastWorkoutDate)) / (1000 * 60 * 60);
        return hoursSince >= recoveryTime;
    },

    getRecoveryStatus(lastWorkoutDate, muscleGroup, intensity) {
        const recoveryTime = this.calculateRecoveryTime(muscleGroup, intensity);
        const hoursSince = (Date.now() - new Date(lastWorkoutDate)) / (1000 * 60 * 60);
        const percentage = Math.min((hoursSince / recoveryTime) * 100, 100);
        
        return {
            percentage: Math.round(percentage),
            isRecovered: percentage >= 100,
            hoursRemaining: Math.max(0, Math.round(recoveryTime - hoursSince))
        };
    },

    recommendRestDay(workoutHistory, daysBack = 7) {
        const recentWorkouts = workoutHistory.slice(-daysBack);
        const workoutDays = recentWorkouts.length;
        
        if (workoutDays >= 6) {
            return { recommend: true, reason: 'You\'ve worked out 6+ days. Rest is important!' };
        }
        
        return { recommend: false, reason: 'Keep up the good work!' };
    }
};
