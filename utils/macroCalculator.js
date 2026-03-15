// Macro nutrient calculator

export const macroCalculator = {
    calculateTDEE(weight, height, age, gender, activityLevel) {
        let bmr;
        
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9
        };
        
        return Math.round(bmr * (activityMultipliers[activityLevel] || 1.2));
    },

    calculateMacros(tdee, goal) {
        let calories = tdee;
        
        if (goal === 'cut') {
            calories = tdee - 500;
        } else if (goal === 'bulk') {
            calories = tdee + 300;
        }
        
        return {
            calories: Math.round(calories),
            protein: Math.round(calories * 0.3 / 4),
            carbs: Math.round(calories * 0.4 / 4),
            fats: Math.round(calories * 0.3 / 9)
        };
    },

    adjustForGoal(macros, goal) {
        const adjusted = { ...macros };
        
        if (goal === 'muscle_gain') {
            adjusted.protein = Math.round(adjusted.protein * 1.2);
        } else if (goal === 'fat_loss') {
            adjusted.carbs = Math.round(adjusted.carbs * 0.8);
            adjusted.protein = Math.round(adjusted.protein * 1.1);
        }
        
        return adjusted;
    }
};
