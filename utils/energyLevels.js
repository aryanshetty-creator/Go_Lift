// Energy level tracker
export const energyLevels = {
    assess(sleep, nutrition, stress) {
        const score = (sleep * 0.4) + (nutrition * 0.3) + ((10 - stress) * 0.3);
        return Math.round(score);
    },
    recommend(level) {
        if (level < 5) return 'Light workout or rest';
        if (level < 7) return 'Moderate intensity';
        return 'High intensity workout';
    }
};
