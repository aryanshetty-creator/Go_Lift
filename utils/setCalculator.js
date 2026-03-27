// Set calculator for progressive overload
export const setCalculator = {
    calculateNextWeight(currentWeight, reps, targetReps) {
        if (reps > targetReps + 2) return currentWeight + 2.5;
        if (reps < targetReps - 2) return currentWeight - 2.5;
        return currentWeight;
    },
    pyramidSets(maxWeight) {
        return [
            { weight: maxWeight * 0.6, reps: 12 },
            { weight: maxWeight * 0.75, reps: 10 },
            { weight: maxWeight * 0.85, reps: 8 },
            { weight: maxWeight * 0.9, reps: 6 }
        ];
    }
};
