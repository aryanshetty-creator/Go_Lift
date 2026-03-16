// Workout split generators

export const workoutSplits = {
    pushPullLegs: {
        name: 'Push/Pull/Legs',
        days: 6,
        schedule: {
            day1: { name: 'Push', focus: 'Chest, Shoulders, Triceps' },
            day2: { name: 'Pull', focus: 'Back, Biceps' },
            day3: { name: 'Legs', focus: 'Quads, Hamstrings, Calves' },
            day4: { name: 'Push', focus: 'Chest, Shoulders, Triceps' },
            day5: { name: 'Pull', focus: 'Back, Biceps' },
            day6: { name: 'Legs', focus: 'Quads, Hamstrings, Calves' },
            day7: { name: 'Rest', focus: 'Recovery' }
        }
    },

    upperLower: {
        name: 'Upper/Lower',
        days: 4,
        schedule: {
            day1: { name: 'Upper', focus: 'Chest, Back, Shoulders, Arms' },
            day2: { name: 'Lower', focus: 'Quads, Hamstrings, Glutes, Calves' },
            day3: { name: 'Rest', focus: 'Recovery' },
            day4: { name: 'Upper', focus: 'Chest, Back, Shoulders, Arms' },
            day5: { name: 'Lower', focus: 'Quads, Hamstrings, Glutes, Calves' },
            day6: { name: 'Rest', focus: 'Recovery' },
            day7: { name: 'Rest', focus: 'Recovery' }
        }
    },

    broBplit: {
        name: 'Bro Split',
        days: 5,
        schedule: {
            day1: { name: 'Chest', focus: 'Chest' },
            day2: { name: 'Back', focus: 'Back' },
            day3: { name: 'Shoulders', focus: 'Shoulders' },
            day4: { name: 'Arms', focus: 'Biceps, Triceps' },
            day5: { name: 'Legs', focus: 'Legs' },
            day6: { name: 'Rest', focus: 'Recovery' },
            day7: { name: 'Rest', focus: 'Recovery' }
        }
    },

    fullBody: {
        name: 'Full Body',
        days: 3,
        schedule: {
            day1: { name: 'Full Body A', focus: 'All muscle groups' },
            day2: { name: 'Rest', focus: 'Recovery' },
            day3: { name: 'Full Body B', focus: 'All muscle groups' },
            day4: { name: 'Rest', focus: 'Recovery' },
            day5: { name: 'Full Body C', focus: 'All muscle groups' },
            day6: { name: 'Rest', focus: 'Recovery' },
            day7: { name: 'Rest', focus: 'Recovery' }
        }
    }
};
