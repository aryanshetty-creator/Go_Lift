// Cycling power calculator
export const cyclingPower = {
    calculateFTP(power20min) {
        return Math.round(power20min * 0.95);
    },
    getZone(power, ftp) {
        const ratio = power / ftp;
        if (ratio < 0.55) return 'Recovery';
        if (ratio < 0.75) return 'Endurance';
        if (ratio < 0.9) return 'Tempo';
        return 'Threshold';
    }
};
