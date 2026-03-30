// Explosiveness calculator
export const explosiveness = {
    reactiveStrength(jumpHeight, contactTime) {
        return (jumpHeight / contactTime).toFixed(2);
    }
};
