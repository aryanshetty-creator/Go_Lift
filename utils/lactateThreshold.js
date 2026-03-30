// Lactate threshold calculator
export const lactateThreshold = {
    estimate(maxHR) {
        return Math.round(maxHR * 0.85);
    }
};
