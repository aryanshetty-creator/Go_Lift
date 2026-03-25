// Muscle recovery tracker
export const muscleRecovery = {
    getStatus(lastWorkout, muscleGroup) {
        const hours = (Date.now() - new Date(lastWorkout)) / 3600000;
        const recoveryTime = { chest: 48, legs: 72, back: 48, arms: 36 };
        return hours >= (recoveryTime[muscleGroup] || 48);
    }
};
