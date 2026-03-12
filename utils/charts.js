// Chart data preparation utilities

export const charts = {
    prepareWeeklyData(workouts) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const counts = new Array(7).fill(0);
        
        workouts.forEach(workout => {
            const day = new Date(workout.date).getDay();
            counts[day]++;
        });
        
        return {
            labels: days,
            data: counts
        };
    },

    prepareMonthlyData(workouts) {
        const monthCounts = {};
        
        workouts.forEach(workout => {
            const month = new Date(workout.date).toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric' 
            });
            monthCounts[month] = (monthCounts[month] || 0) + 1;
        });
        
        return {
            labels: Object.keys(monthCounts),
            data: Object.values(monthCounts)
        };
    },

    prepareMuscleGroupData(workouts) {
        const muscleGroups = {};
        
        workouts.forEach(workout => {
            if (workout.muscleGroup) {
                muscleGroups[workout.muscleGroup] = 
                    (muscleGroups[workout.muscleGroup] || 0) + 1;
            }
        });
        
        return {
            labels: Object.keys(muscleGroups),
            data: Object.values(muscleGroups)
        };
    }
};
