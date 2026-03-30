// Reaction time calculator
export const reactionTime = {
    classify(milliseconds) {
        if (milliseconds < 200) return 'Excellent';
        if (milliseconds < 250) return 'Good';
        if (milliseconds < 300) return 'Average';
        return 'Below Average';
    }
};
