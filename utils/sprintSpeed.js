// Sprint speed calculator
export const sprintSpeed = {
    calculate(distance, time) {
        return (distance / time).toFixed(2);
    },
    classify(speed) {
        if (speed > 10) return 'Elite';
        if (speed > 8) return 'Advanced';
        return 'Intermediate';
    }
};
