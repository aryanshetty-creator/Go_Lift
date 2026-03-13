// Achievement system utilities

export const achievements = {
    badges: [
        { id: 'first_workout', name: 'First Step', description: 'Complete your first workout', requirement: 1 },
        { id: 'week_streak', name: 'Week Warrior', description: '7 day workout streak', requirement: 7 },
        { id: 'month_streak', name: 'Monthly Master', description: '30 day workout streak', requirement: 30 },
        { id: 'hundred_workouts', name: 'Century Club', description: 'Complete 100 workouts', requirement: 100 },
        { id: 'early_bird', name: 'Early Bird', description: 'Workout before 7 AM', requirement: 1 },
        { id: 'night_owl', name: 'Night Owl', description: 'Workout after 9 PM', requirement: 1 }
    ],

    checkAchievements(userStats) {
        const earned = [];
        
        this.badges.forEach(badge => {
            if (this.isAchieved(badge, userStats)) {
                earned.push(badge);
            }
        });
        
        return earned;
    },

    isAchieved(badge, stats) {
        switch(badge.id) {
            case 'first_workout':
                return stats.totalWorkouts >= 1;
            case 'week_streak':
                return stats.currentStreak >= 7;
            case 'month_streak':
                return stats.currentStreak >= 30;
            case 'hundred_workouts':
                return stats.totalWorkouts >= 100;
            default:
                return false;
        }
    },

    getProgress(badge, stats) {
        const current = stats.totalWorkouts || 0;
        return Math.min((current / badge.requirement) * 100, 100);
    }
};
