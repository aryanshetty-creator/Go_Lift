// Training periodization

export const periodization = {
    phases: {
        hypertrophy: { sets: 4, reps: '8-12', rest: 60, weeks: 4 },
        strength: { sets: 5, reps: '3-5', rest: 180, weeks: 4 },
        power: { sets: 5, reps: '1-3', rest: 240, weeks: 3 },
        deload: { sets: 3, reps: '8-10', rest: 90, weeks: 1 }
    },

    generateProgram(goal, weeks) {
        const program = [];
        let currentWeek = 0;
        
        while (currentWeek < weeks) {
            if (goal === 'strength') {
                program.push({ phase: 'hypertrophy', weeks: 4 });
                program.push({ phase: 'strength', weeks: 4 });
                program.push({ phase: 'deload', weeks: 1 });
                currentWeek += 9;
            }
        }
        
        return program;
    }
};
