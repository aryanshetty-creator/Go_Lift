// Workout difficulty calculator

export const workoutDifficulty = {
    calculate(volume, intensity, duration) {
        const volumeScore = volume / 1000;
        const intensityScore = intensity / 10;
        const durationScore = duration / 60;
        
        return Math.round((volumeScore + intensityScore + durationScore) / 3 * 10);
    },
    
    getLevel(score) {
        if (score < 3) return 'Easy';
        if (score < 6) return 'Moderate';
        if (score < 8) return 'Hard';
        return 'Very Hard';
    }
};
