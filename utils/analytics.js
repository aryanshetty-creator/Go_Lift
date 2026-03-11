// Analytics and tracking utilities

export const analytics = {
    calculateTotalWorkouts(history) {
        return history.length;
    },

    calculateWeeklyWorkouts(history) {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        return history.filter(entry => {
            return new Date(entry.date) >= weekAgo;
        }).length;
    },

    getMostFrequentWorkout(history) {
        if (history.length === 0) return null;
        
        const frequency = {};
        history.forEach(entry => {
            frequency[entry.workout] = (frequency[entry.workout] || 0) + 1;
        });
        
        return Object.keys(frequency).reduce((a, b) => 
            frequency[a] > frequency[b] ? a : b
        );
    },

    calculateAverageDuration(history) {
        if (history.length === 0) return 0;
        
        const total = history.reduce((sum, entry) => sum + entry.duration, 0);
        return Math.round(total / history.length);
    },

    getWorkoutStreak(history) {
        if (history.length === 0) return 0;
        
        const sortedDates = history
            .map(entry => new Date(entry.date).toDateString())
            .sort((a, b) => new Date(b) - new Date(a));
        
        let streak = 1;
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
    }
};
