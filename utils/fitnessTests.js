// Fitness assessment tests

export const fitnessTests = {
    benchmarkTests: {
        pushups: {
            name: 'Push-up Test',
            description: 'Max push-ups in 1 minute',
            ratings: {
                male: { excellent: 47, good: 35, average: 20, poor: 10 },
                female: { excellent: 36, good: 25, average: 15, poor: 5 }
            }
        },
        plank: {
            name: 'Plank Hold',
            description: 'Max plank hold time',
            ratings: {
                male: { excellent: 120, good: 90, average: 60, poor: 30 },
                female: { excellent: 90, good: 60, average: 45, poor: 20 }
            }
        },
        mile: {
            name: '1 Mile Run',
            description: 'Time to complete 1 mile',
            ratings: {
                male: { excellent: 480, good: 540, average: 600, poor: 720 },
                female: { excellent: 540, good: 600, average: 660, poor: 780 }
            }
        }
    },

    getRating(testName, score, gender) {
        const test = this.benchmarkTests[testName];
        if (!test) return 'Unknown';
        
        const ratings = test.ratings[gender];
        if (score >= ratings.excellent) return 'Excellent';
        if (score >= ratings.good) return 'Good';
        if (score >= ratings.average) return 'Average';
        return 'Needs Improvement';
    },

    calculateFitnessScore(tests) {
        const scores = Object.values(tests);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return Math.round(total / scores.length);
    },

    getRecommendations(weakAreas) {
        const recommendations = {
            pushups: 'Focus on chest and tricep exercises',
            plank: 'Work on core stability exercises',
            mile: 'Increase cardio training frequency'
        };
        
        return weakAreas.map(area => recommendations[area] || 'Keep training!');
    }
};
