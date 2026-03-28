// Agility test calculator
export const agility = {
    tTest(time) {
        if (time < 9) return 'Excellent';
        if (time < 10) return 'Good';
        if (time < 11) return 'Average';
        return 'Below Average';
    }
};
