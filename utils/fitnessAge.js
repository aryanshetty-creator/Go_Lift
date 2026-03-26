// Fitness age calculator
export const fitnessAge = {
    calculate(vo2max, age) {
        const expected = 50 - (age * 0.5);
        const difference = vo2max - expected;
        return Math.round(age - (difference * 2));
    }
};
