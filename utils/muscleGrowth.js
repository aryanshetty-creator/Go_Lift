// Muscle growth calculator
export const muscleGrowth = {
    estimateGain(months, experience) {
        const rates = { beginner: 1.5, intermediate: 0.75, advanced: 0.25 };
        return months * (rates[experience] || 0.75);
    },
    proteinNeeds(weight, goal) {
        return goal === 'bulk' ? weight * 2.2 : weight * 1.8;
    }
};
