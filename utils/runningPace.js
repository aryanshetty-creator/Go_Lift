// Running pace calculator
export const runningPace = {
    calculatePace(distance, time) {
        return (time / distance).toFixed(2);
    },
    predictTime(distance, pace) {
        return Math.round(distance * pace);
    }
};
