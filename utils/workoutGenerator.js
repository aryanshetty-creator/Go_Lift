// Workout plan generator

export const workoutGenerator = {
    generatePlan(goal, level, daysPerWeek) {
        const plans = {
            'strength': this.strengthPlan(level, daysPerWeek),
            'hypertrophy': this.hypertrophyPlan(level, daysPerWeek),
            'endurance': this.endurancePlan(level, daysPerWeek),
            'weight_loss': this.weightLossPlan(level, daysPerWeek)
        };
        
        return plans[goal] || plans['strength'];
    },

    strengthPlan(level, days) {
        const exercises = {
            beginner: ['Squats', 'Push-ups', 'Rows', 'Planks'],
            intermediate: ['Squats', 'Bench Press', 'Deadlifts', 'Pull-ups'],
            advanced: ['Back Squats', 'Bench Press', 'Deadlifts', 'Overhead Press', 'Pull-ups']
        };
        
        return {
            name: 'Strength Training',
            exercises: exercises[level] || exercises['beginner'],
            sets: level === 'beginner' ? 3 : level === 'intermediate' ? 4 : 5,
            reps: '5-8',
            rest: '2-3 minutes'
        };
    },

    hypertrophyPlan(level, days) {
        return {
            name: 'Muscle Building',
            exercises: ['Bench Press', 'Squats', 'Rows', 'Shoulder Press', 'Curls', 'Tricep Extensions'],
            sets: 4,
            reps: '8-12',
            rest: '60-90 seconds'
        };
    },

    endurancePlan(level, days) {
        return {
            name: 'Endurance Training',
            exercises: ['Running', 'Cycling', 'Jump Rope', 'Burpees', 'Mountain Climbers'],
            sets: 3,
            reps: '15-20 or 30-60 seconds',
            rest: '30-45 seconds'
        };
    },

    weightLossPlan(level, days) {
        return {
            name: 'Weight Loss Circuit',
            exercises: ['Burpees', 'Jump Squats', 'Push-ups', 'Mountain Climbers', 'High Knees'],
            sets: 3,
            reps: '45 seconds work, 15 seconds rest',
            rest: '1 minute between circuits'
        };
    }
};
