// Recovery score calculator
export const recoveryScore = {
    calculate(sleep, nutrition, stress, soreness) {
        const sleepScore = (sleep / 8) * 25;
        const nutritionScore = (nutrition / 10) * 25;
        const stressScore = ((10 - stress) / 10) * 25;
        const sorenessScore = ((10 - soreness) / 10) * 25;
        return Math.round(sleepScore + nutritionScore + stressScore + sorenessScore);
    },
    getStatus(score) {
        if (score >= 80) return 'Fully Recovered';
        if (score >= 60) return 'Good Recovery';
        if (score >= 40) return 'Moderate Recovery';
        return 'Poor Recovery';
    }
};
