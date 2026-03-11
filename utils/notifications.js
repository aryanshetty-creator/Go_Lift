// Notification utilities

export const notifications = {
    requestPermission() {
        if ('Notification' in window) {
            return Notification.requestPermission();
        }
        return Promise.resolve('denied');
    },

    send(title, options = {}) {
        if ('Notification' in window && Notification.permission === 'granted') {
            return new Notification(title, {
                icon: '💪',
                badge: '💪',
                ...options
            });
        }
        return null;
    },

    workoutReminder(workoutName) {
        return this.send('Workout Reminder', {
            body: `Time for your ${workoutName} workout!`,
            tag: 'workout-reminder'
        });
    },

    goalAchieved(goalName) {
        return this.send('Goal Achieved! 🎉', {
            body: `Congratulations! You've achieved: ${goalName}`,
            tag: 'goal-achieved'
        });
    },

    restDayReminder() {
        return this.send('Rest Day Reminder', {
            body: 'Remember to take rest days for recovery!',
            tag: 'rest-reminder'
        });
    }
};
