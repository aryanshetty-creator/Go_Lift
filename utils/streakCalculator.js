// Streak calculation utilities

export const streakCalculator = {
    calculateStreak(workoutDates) {
        if (!workoutDates || workoutDates.length === 0) return 0;
        
        const sortedDates = workoutDates
            .map(d => new Date(d).toDateString())
            .sort((a, b) => new Date(b) - new Date(a));
        
        let streak = 1;
        const today = new Date().toDateString();
        
        if (sortedDates[0] !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (sortedDates[0] !== yesterday.toDateString()) {
                return 0;
            }
        }
        
        for (let i = 0; i < sortedDates.length - 1; i++) {
            const current = new Date(sortedDates[i]);
            const next = new Date(sortedDates[i + 1]);
            const diffDays = Math.floor((current - next) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                streak++;
            } else if (diffDays > 1) {
                break;
            }
        }
        
        return streak;
    },

    getLongestStreak(workoutDates) {
        if (!workoutDates || workoutDates.length === 0) return 0;
        
        const sortedDates = workoutDates
            .map(d => new Date(d).toDateString())
            .sort((a, b) => new Date(a) - new Date(b));
        
        let maxStreak = 1;
        let currentStreak = 1;
        
        for (let i = 0; i < sortedDates.length - 1; i++) {
            const current = new Date(sortedDates[i]);
            const next = new Date(sortedDates[i + 1]);
            const diffDays = Math.floor((next - current) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else if (diffDays > 1) {
                currentStreak = 1;
            }
        }
        
        return maxStreak;
    }
};
