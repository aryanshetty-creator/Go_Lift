// Deload week calculator
export const deloadWeek = {
    isNeeded(weeksTraining) {
        return weeksTraining % 4 === 0;
    },
    adjustVolume(normalVolume) {
        return normalVolume * 0.6;
    }
};
