// Body fat percentage estimator
export const bodyFatEstimator = {
    navy(gender, waist, neck, height, hip = 0) {
        if (gender === 'male') {
            return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        }
        return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }
};
