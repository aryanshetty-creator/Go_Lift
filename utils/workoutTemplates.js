// Pre-built workout templates

export const workoutTemplates = {
    beginner: {
        fullBody: {
            name: 'Beginner Full Body',
            duration: 45,
            exercises: [
                { name: 'Bodyweight Squats', sets: 3, reps: 12 },
                { name: 'Push-ups', sets: 3, reps: 10 },
                { name: 'Dumbbell Rows', sets: 3, reps: 12 },
                { name: 'Planks', sets: 3, duration: '30 seconds' },
                { name: 'Lunges', sets: 3, reps: 10 }
            ]
        },
        cardio: {
            name: 'Beginner Cardio',
            duration: 30,
            exercises: [
                { name: 'Walking', duration: '10 minutes' },
                { name: 'Jumping Jacks', sets: 3, reps: 20 },
                { name: 'High Knees', sets: 3, duration: '30 seconds' },
                { name: 'Cool Down Walk', duration: '5 minutes' }
            ]
        }
    },

    intermediate: {
        pushPull: {
            name: 'Push/Pull Split',
            duration: 60,
            exercises: [
                { name: 'Bench Press', sets: 4, reps: 8 },
                { name: 'Overhead Press', sets: 4, reps: 8 },
                { name: 'Pull-ups', sets: 4, reps: 8 },
                { name: 'Barbell Rows', sets: 4, reps: 8 },
                { name: 'Dips', sets: 3, reps: 10 }
            ]
        }
    },

    advanced: {
        powerlifting: {
            name: 'Powerlifting Routine',
            duration: 90,
            exercises: [
                { name: 'Squats', sets: 5, reps: 5 },
                { name: 'Bench Press', sets: 5, reps: 5 },
                { name: 'Deadlifts', sets: 5, reps: 5 },
                { name: 'Overhead Press', sets: 4, reps: 6 }
            ]
        }
    },

    getTemplate(level, type) {
        return this[level]?.[type] || null;
    },

    getAllTemplates() {
        const templates = [];
        Object.keys(this).forEach(level => {
            if (typeof this[level] === 'object') {
                Object.keys(this[level]).forEach(type => {
                    templates.push({
                        level,
                        type,
                        ...this[level][type]
                    });
                });
            }
        });
        return templates;
    }
};
