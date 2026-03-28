// Power output calculator
export const powerOutput = {
    calculate(force, velocity) {
        return force * velocity;
    },
    wattsPerKg(power, bodyweight) {
        return (power / bodyweight).toFixed(2);
    }
};
