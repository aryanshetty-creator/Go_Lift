// Rest day activity suggestions

export const restDayActivities = {
    activities: [
        { name: 'Light Walking', intensity: 'low', duration: 30, benefits: 'Active recovery' },
        { name: 'Yoga', intensity: 'low', duration: 45, benefits: 'Flexibility' },
        { name: 'Swimming', intensity: 'low', duration: 30, benefits: 'Low impact cardio' },
        { name: 'Foam Rolling', intensity: 'low', duration: 20, benefits: 'Muscle recovery' },
        { name: 'Stretching', intensity: 'low', duration: 15, benefits: 'Mobility' }
    ],

    getRecommendation(soreness) {
        if (soreness === 'high') {
            return this.activities.filter(a => a.name === 'Foam Rolling' || a.name === 'Stretching');
        }
        return this.activities;
    }
};
