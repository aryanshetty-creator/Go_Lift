// Rest period calculator

export const restCalculator = {
    byIntensity(intensity) {
        if (intensity >= 90) return 180;
        if (intensity >= 80) return 120;
        if (intensity >= 70) return 90;
        return 60;
    },
    
    byGoal(goal) {
        const goals = {
            strength: 180,
            hypertrophy: 60,
            endurance: 30,
            power: 240
        };
        return goals[goal] || 90;
    }
};
