// Performance tracking metrics

export const performanceMetrics = {
    calculateVolume(sets, reps, weight) {
        return sets * reps * weight;
    },

    calculateIntensity(weight, oneRepMax) {
        return (weight / oneRepMax) * 100;
    },

    trackPersonalRecord(exercise, weight, reps) {
        const prs = this.getPersonalRecords();
        const key = exercise.toLowerCase();
        
        if (!prs[key] || weight > prs[key].weight) {
            prs[key] = {
                weight,
                reps,
                date: new Date().toISOString()
            };
            localStorage.setItem('personal_records', JSON.stringify(prs));
            return true;
        }
        return false;
    },

    getPersonalRecords() {
        const prs = localStorage.getItem('personal_records');
        return prs ? JSON.parse(prs) : {};
    },

    calculateWorkoutDensity(totalVolume, duration) {
        return totalVolume / duration;
    },

    trackProgressOverTime(exercise, period = 30) {
        const logs = JSON.parse(localStorage.getItem('workout_logs') || '[]');
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - period);
        
        return logs
            .filter(log => 
                log.exercise === exercise && 
                new Date(log.timestamp) >= cutoffDate
            )
            .map(log => ({
                date: log.timestamp,
                weight: log.weight,
                reps: log.reps
            }));
    }
};
