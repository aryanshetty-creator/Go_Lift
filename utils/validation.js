// Input validation utilities

export const validation = {
    isValidWorkoutName(name) {
        return name && name.trim().length > 0 && name.length <= 50;
    },

    isValidNumber(value, min = 0, max = 1000) {
        const num = Number(value);
        return !isNaN(num) && num >= min && num <= max;
    },

    sanitizeInput(input) {
        return input.trim().replace(/[<>]/g, '');
    },

    validateWorkout(workout) {
        const errors = [];
        
        if (!this.isValidWorkoutName(workout.name)) {
            errors.push('Invalid workout name');
        }
        
        if (workout.sets && !this.isValidNumber(workout.sets, 1, 20)) {
            errors.push('Sets must be between 1 and 20');
        }
        
        if (workout.reps && !this.isValidNumber(workout.reps, 1, 100)) {
            errors.push('Reps must be between 1 and 100');
        }
        
        return {
            isValid: errors.length === 0,
            errors
        };
    }
};
