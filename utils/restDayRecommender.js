// Rest day recommender
export const restDayRecommender = {
    shouldRest(consecutiveDays, soreness, sleep) {
        if (consecutiveDays >= 6) return true;
        if (soreness > 7 && sleep < 6) return true;
        return false;
    },
    getAdvice(shouldRest) {
        return shouldRest ? 'Take a rest day for recovery' : 'You\'re good to train!';
    }
};
