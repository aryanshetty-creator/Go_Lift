// Anaerobic capacity test
export const anaerobicCapacity = {
    wingate(peakPower, bodyweight) {
        return (peakPower / bodyweight).toFixed(2);
    }
};
