// Form validation utilities

export const formValidation = {
    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    validatePassword(password) {
        return {
            isValid: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*]/.test(password)
        };
    },

    validateAge(age) {
        return age >= 13 && age <= 120;
    },

    validateWeight(weight) {
        return weight > 0 && weight < 500;
    },

    validateHeight(height) {
        return height > 0 && height < 300;
    },

    validateWorkoutName(name) {
        return name && name.trim().length >= 2 && name.length <= 50;
    },

    validateSets(sets) {
        return Number.isInteger(sets) && sets > 0 && sets <= 20;
    },

    validateReps(reps) {
        return Number.isInteger(reps) && reps > 0 && reps <= 100;
    },

    sanitizeInput(input) {
        return input.trim().replace(/[<>]/g, '');
    }
};
