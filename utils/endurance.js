// Endurance calculator
export const endurance = {
    cooperTest(distance) {
        if (distance > 2800) return 'Excellent';
        if (distance > 2400) return 'Good';
        if (distance > 2000) return 'Average';
        return 'Below Average';
    }
};
