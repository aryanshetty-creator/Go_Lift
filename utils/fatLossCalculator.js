// Fat loss calculator
export const fatLossCalculator = {
    weeksToGoal(currentWeight, goalWeight, weeklyLoss = 0.5) {
        return Math.ceil((currentWeight - goalWeight) / weeklyLoss);
    },
    dailyDeficit(weeklyLoss) {
        return weeklyLoss * 7700 / 7; // 7700 cal per kg
    }
};
