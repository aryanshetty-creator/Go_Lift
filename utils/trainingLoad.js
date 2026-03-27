// Training load calculator
export const trainingLoad = {
    calculate(volume, intensity, frequency) {
        return (volume * intensity * frequency) / 1000;
    },
    isOvertraining(load) {
        return load > 100;
    },
    recommend(load) {
        if (load < 30) return 'Increase training volume';
        if (load > 100) return 'Reduce training load';
        return 'Training load is optimal';
    }
};
