// Fitness calculation utilities

export const calculator = {
    calculateBMI(weight, height) {
        // weight in kg, height in cm
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    },

    calculateCaloriesBurned(activity, duration, weight) {
        // MET values for different activities
        const metValues = {
            'walking': 3.5,
            'running': 8.0,
            'cycling': 6.0,
            'swimming': 7.0,
            'weightlifting': 6.0,
            'yoga': 2.5,
            'hiit': 8.0
        };
        
        const met = metValues[activity.toLowerCase()] || 5.0;
        return Math.round(met * weight * (duration / 60));
    },

    calculateOneRepMax(weight, reps) {
        // Brzycki formula
        return Math.round(weight * (36 / (37 - reps)));
    },

    calculateRestTime(intensity) {
        const restTimes = {
            'low': 60,
            'medium': 90,
            'high': 120,
            'max': 180
        };
        return restTimes[intensity] || 90;
    },

    calculateProteinNeeds(weight, activityLevel) {
        const multipliers = {
            'sedentary': 0.8,
            'light': 1.2,
            'moderate': 1.6,
            'intense': 2.0
        };
        return Math.round(weight * (multipliers[activityLevel] || 1.2));
    }
};
