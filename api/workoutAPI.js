// Mock API for workout data

export const workoutAPI = {
    async fetchWorkoutTemplates() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'Push Day', exercises: ['Bench Press', 'Shoulder Press', 'Tricep Dips'] },
                    { id: 2, name: 'Pull Day', exercises: ['Pull-ups', 'Rows', 'Bicep Curls'] },
                    { id: 3, name: 'Leg Day', exercises: ['Squats', 'Deadlifts', 'Leg Press'] }
                ]);
            }, 500);
        });
    },

    async saveWorkout(workout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, id: Date.now() });
            }, 300);
        });
    },

    async deleteWorkout(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 300);
        });
    },

    async fetchExerciseLibrary() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: 'Bench Press', category: 'Chest', difficulty: 'Intermediate' },
                    { name: 'Squats', category: 'Legs', difficulty: 'Beginner' },
                    { name: 'Deadlifts', category: 'Back', difficulty: 'Advanced' },
                    { name: 'Pull-ups', category: 'Back', difficulty: 'Intermediate' }
                ]);
            }, 500);
        });
    }
};
