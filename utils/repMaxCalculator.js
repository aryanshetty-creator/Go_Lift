// One rep max calculator

export const repMaxCalculator = {
    brzycki(weight, reps) {
        return weight * (36 / (37 - reps));
    },
    
    epley(weight, reps) {
        return weight * (1 + reps / 30);
    },
    
    lander(weight, reps) {
        return (100 * weight) / (101.3 - 2.67123 * reps);
    },
    
    calculate(weight, reps, formula = 'brzycki') {
        const formulas = {
            brzycki: this.brzycki,
            epley: this.epley,
            lander: this.lander
        };
        return Math.round(formulas[formula](weight, reps));
    }
};
