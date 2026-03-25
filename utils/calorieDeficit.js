// Calorie deficit calculator
export const calorieDeficit = {
    calculate(tdee, goal) {
        if (goal === 'cut') return tdee - 500;
        if (goal === 'bulk') return tdee + 300;
        return tdee;
    }
};
