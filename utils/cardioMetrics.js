// Cardio performance metrics

export const cardioMetrics = {
    calculatePace(distance, time) {
        // distance in km, time in minutes
        return time / distance;
    },

    calculateSpeed(distance, time) {
        // distance in km, time in hours
        return distance / time;
    },

    estimateVO2Max(age, restingHR, maxHR) {
        // Cooper formula
        return 15.3 * (maxHR / restingHR);
    },

    calculateTargetHeartRate(age, intensity) {
        const maxHR = 220 - age;
        const zones = {
            warmup: { min: 0.5, max: 0.6 },
            fatBurn: { min: 0.6, max: 0.7 },
            cardio: { min: 0.7, max: 0.8 },
            peak: { min: 0.8, max: 0.9 }
        };
        
        const zone = zones[intensity] || zones.cardio;
        return {
            min: Math.round(maxHR * zone.min),
            max: Math.round(maxHR * zone.max)
        };
    },

    calculateCaloriesBurned(activity, duration, weight) {
        const metValues = {
            walking: 3.5,
            jogging: 7.0,
            running: 9.8,
            cycling: 8.0,
            swimming: 8.0,
            rowing: 7.0,
            elliptical: 5.0
        };
        
        const met = metValues[activity.toLowerCase()] || 5.0;
        return Math.round(met * weight * (duration / 60));
    },

    estimateFinishTime(distance, pace) {
        return distance * pace;
    }
};
