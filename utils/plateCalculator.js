// Barbell plate calculator

export const plateCalculator = {
    plates: [25, 20, 15, 10, 5, 2.5, 1.25],
    barWeight: 20,
    
    calculate(targetWeight) {
        const weightPerSide = (targetWeight - this.barWeight) / 2;
        const platesNeeded = [];
        let remaining = weightPerSide;
        
        for (const plate of this.plates) {
            while (remaining >= plate) {
                platesNeeded.push(plate);
                remaining -= plate;
            }
        }
        
        return platesNeeded;
    }
};
