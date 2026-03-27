// Cardio heart rate zones
export const cardioZones = {
    calculate(age) {
        const maxHR = 220 - age;
        return {
            zone1: { min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.6), name: 'Recovery' },
            zone2: { min: Math.round(maxHR * 0.6), max: Math.round(maxHR * 0.7), name: 'Fat Burn' },
            zone3: { min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.8), name: 'Aerobic' },
            zone4: { min: Math.round(maxHR * 0.8), max: Math.round(maxHR * 0.9), name: 'Anaerobic' },
            zone5: { min: Math.round(maxHR * 0.9), max: maxHR, name: 'Max Effort' }
        };
    }
};
