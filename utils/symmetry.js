// Muscle symmetry calculator
export const symmetry = {
    calculate(leftSide, rightSide) {
        const diff = Math.abs(leftSide - rightSide);
        const avg = (leftSide + rightSide) / 2;
        return ((diff / avg) * 100).toFixed(1);
    }
};
