// Coordination test
export const coordinationTest = {
    ballThrow(catches, attempts) {
        return ((catches / attempts) * 100).toFixed(1);
    }
};
