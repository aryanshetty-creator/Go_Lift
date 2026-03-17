// Supplement guide

export const supplementGuide = {
    supplements: {
        protein: { timing: 'post-workout', dosage: '20-30g' },
        creatine: { timing: 'daily', dosage: '5g' },
        bcaa: { timing: 'intra-workout', dosage: '5-10g' },
        preworkout: { timing: 'pre-workout', dosage: '1 scoop' }
    },
    
    getRecommendations(goal) {
        if (goal === 'muscle_gain') {
            return ['protein', 'creatine'];
        }
        return ['protein'];
    }
};
