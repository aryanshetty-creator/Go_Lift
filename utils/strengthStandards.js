// Strength standards calculator
export const strengthStandards = {
    classify(exercise, weight, bodyweight, gender) {
        const ratio = weight / bodyweight;
        if (exercise === 'bench' && gender === 'male') {
            if (ratio < 0.5) return 'Beginner';
            if (ratio < 1.0) return 'Novice';
            if (ratio < 1.5) return 'Intermediate';
            return 'Advanced';
        }
        return 'Intermediate';
    }
};
