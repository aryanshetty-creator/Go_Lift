// Training age calculator

export const trainingAge = {
    calculate(startDate) {
        const start = new Date(startDate);
        const now = new Date();
        const years = (now - start) / (1000 * 60 * 60 * 24 * 365);
        return Math.floor(years * 10) / 10;
    },
    
    getLevel(years) {
        if (years < 1) return 'Beginner';
        if (years < 3) return 'Intermediate';
        if (years < 5) return 'Advanced';
        return 'Elite';
    }
};
