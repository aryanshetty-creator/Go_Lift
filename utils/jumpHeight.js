// Jump height calculator
export const jumpHeight = {
    calculate(hangTime) {
        return Math.round((9.81 * Math.pow(hangTime / 2, 2)) * 100);
    }
};
