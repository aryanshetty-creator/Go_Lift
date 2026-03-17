// Cooldown routines

export const cooldownRoutines = {
    basic: ['Walking', 'Static Stretching', 'Deep Breathing'],
    advanced: ['Foam Rolling', 'Static Stretching', 'Yoga Poses', 'Meditation'],
    
    getDuration(intensity) {
        return intensity === 'high' ? 15 : 10;
    }
};
