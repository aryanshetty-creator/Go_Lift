const { createApp } = Vue;

createApp({
    data() {
        return {
            appName: 'Go Lift 💪'
        }
    }
}).component('workout-tracker', {
    template: `
        <div class="workout-container">
            <h2>Track Your Workouts</h2>
            <div class="workout-form">
                <input v-model="newWorkout" placeholder="Enter exercise name" />
                <button @click="addWorkout">Add Workout</button>
            </div>
            <ul class="workout-list">
                <li v-for="(workout, index) in workouts" :key="index">
                    {{ workout }}
                    <button @click="removeWorkout(index)" class="delete-btn">✕</button>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            newWorkout: '',
            workouts: [],
            workoutCount: 0
        }
    },
    methods: {
        addWorkout() {
            if (this.newWorkout.trim()) {
                this.workouts.push(this.newWorkout);
                this.newWorkout = '';
            }
        },
        removeWorkout(index) {
            this.workouts.splice(index, 1);
        }
    }
}).mount('#app');
