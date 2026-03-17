// Workout music playlist generator

export const workoutMusic = {
    playlists: {
        hiit: {
            name: 'HIIT Workout',
            bpm: '140-180',
            genres: ['EDM', 'Hip Hop', 'Rock'],
            duration: 30
        },
        strength: {
            name: 'Strength Training',
            bpm: '120-140',
            genres: ['Rock', 'Metal', 'Hip Hop'],
            duration: 60
        },
        cardio: {
            name: 'Cardio Run',
            bpm: '160-180',
            genres: ['Pop', 'EDM', 'Dance'],
            duration: 45
        },
        yoga: {
            name: 'Yoga Flow',
            bpm: '60-90',
            genres: ['Ambient', 'Chill', 'Acoustic'],
            duration: 60
        },
        warmup: {
            name: 'Warm Up',
            bpm: '100-120',
            genres: ['Pop', 'R&B'],
            duration: 10
        }
    },

    getPlaylistForWorkout(workoutType) {
        return this.playlists[workoutType] || this.playlists.strength;
    },

    calculateBPMForPace(pace) {
        // pace in min/km
        if (pace < 4) return '180+';
        if (pace < 5) return '170-180';
        if (pace < 6) return '160-170';
        return '140-160';
    },

    generatePlaylist(duration, intensity) {
        const bpmRanges = {
            low: '100-120',
            medium: '120-140',
            high: '140-160',
            max: '160-180'
        };
        
        return {
            duration,
            bpm: bpmRanges[intensity] || bpmRanges.medium,
            songCount: Math.ceil(duration / 3.5)
        };
    }
};
