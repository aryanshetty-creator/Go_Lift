// Exercise complexity rating
export const exerciseComplexity = {
    rate(exercise) {
        const complex = ['Snatch', 'Clean', 'Deadlift'];
        const moderate = ['Squat', 'Bench Press', 'Row'];
        if (complex.includes(exercise)) return 'Complex';
        if (moderate.includes(exercise)) return 'Moderate';
        return 'Simple';
    }
};
