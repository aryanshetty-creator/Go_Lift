// Mobility score calculator
export const mobilityScore = {
    calculate(tests) {
        const total = tests.reduce((sum, score) => sum + score, 0);
        return Math.round((total / tests.length) * 10);
    }
};
