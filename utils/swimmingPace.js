// Swimming pace calculator
export const swimmingPace = {
    calculate(distance, time) {
        return (time / distance * 100).toFixed(2);
    }
};
