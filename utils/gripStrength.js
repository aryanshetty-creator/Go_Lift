// Grip strength calculator
export const gripStrength = {
    classify(weight, gender) {
        if (gender === 'male') {
            if (weight < 40) return 'Below Average';
            if (weight < 50) return 'Average';
            if (weight < 60) return 'Above Average';
            return 'Excellent';
        }
        if (weight < 25) return 'Below Average';
        if (weight < 35) return 'Average';
        return 'Above Average';
    }
};
