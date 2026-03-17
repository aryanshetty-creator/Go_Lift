// Warmup routine generator

export const warmupGenerator = {
    generate(workoutType, duration = 10) {
        const routines = {
            strength: ['Dynamic Stretching', 'Light Cardio', 'Activation Exercises'],
            cardio: ['Walking', 'Light Jogging', 'Dynamic Stretches'],
            flexibility: ['Gentle Stretches', 'Breathing Exercises', 'Joint Rotations']
        };
        
        return routines[workoutType] || routines.strength;
    }
};
