// Meal timing optimizer

export const mealTiming = {
    preworkout: { timing: '-60 min', foods: ['Banana', 'Oats', 'Toast'] },
    postworkout: { timing: '+30 min', foods: ['Protein Shake', 'Chicken', 'Rice'] },
    
    getOptimalTiming(workoutTime) {
        return {
            breakfast: '7:00 AM',
            lunch: '12:00 PM',
            preworkout: workoutTime - 60,
            postworkout: workoutTime + 30,
            dinner: '7:00 PM'
        };
    }
};
