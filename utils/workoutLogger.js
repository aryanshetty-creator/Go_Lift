// Workout logging utilities

export const workoutLogger = {
    log(workout) {
        const logs = this.getLogs();
        const entry = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...workout
        };
        logs.push(entry);
        localStorage.setItem('workout_logs', JSON.stringify(logs));
        return entry;
    },

    getLogs() {
        const logs = localStorage.getItem('workout_logs');
        return logs ? JSON.parse(logs) : [];
    },

    getLogById(id) {
        const logs = this.getLogs();
        return logs.find(log => log.id === id);
    },

    updateLog(id, updates) {
        const logs = this.getLogs();
        const index = logs.findIndex(log => log.id === id);
        if (index !== -1) {
            logs[index] = { ...logs[index], ...updates };
            localStorage.setItem('workout_logs', JSON.stringify(logs));
            return logs[index];
        }
        return null;
    },

    deleteLog(id) {
        const logs = this.getLogs();
        const filtered = logs.filter(log => log.id !== id);
        localStorage.setItem('workout_logs', JSON.stringify(filtered));
        return true;
    },

    getLogsByDateRange(startDate, endDate) {
        const logs = this.getLogs();
        return logs.filter(log => {
            const logDate = new Date(log.timestamp);
            return logDate >= startDate && logDate <= endDate;
        });
    },

    getTodayLogs() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return this.getLogsByDateRange(today, tomorrow);
    },

    clearAllLogs() {
        localStorage.removeItem('workout_logs');
        return true;
    }
};
