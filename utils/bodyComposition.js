// Body composition calculations

export const bodyComposition = {
    calculateBMI(weight, height) {
        // weight in kg, height in cm
        const heightM = height / 100;
        return (weight / (heightM * heightM)).toFixed(1);
    },

    getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    },

    calculateBodyFat(gender, age, bmi) {
        // Deurenberg formula
        let bodyFat;
        if (gender === 'male') {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
        } else {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
        }
        return Math.max(0, bodyFat.toFixed(1));
    },

    calculateLeanBodyMass(weight, bodyFatPercentage) {
        return (weight * (1 - bodyFatPercentage / 100)).toFixed(1);
    },

    calculateIdealWeight(height, gender) {
        // Robinson formula
        const heightInches = height / 2.54;
        let idealWeight;
        
        if (gender === 'male') {
            idealWeight = 52 + 1.9 * (heightInches - 60);
        } else {
            idealWeight = 49 + 1.7 * (heightInches - 60);
        }
        
        return Math.round(idealWeight);
    },

    calculateWaistToHipRatio(waist, hip) {
        return (waist / hip).toFixed(2);
    },

    getWHRCategory(whr, gender) {
        if (gender === 'male') {
            return whr < 0.9 ? 'Low Risk' : whr < 1.0 ? 'Moderate Risk' : 'High Risk';
        } else {
            return whr < 0.8 ? 'Low Risk' : whr < 0.85 ? 'Moderate Risk' : 'High Risk';
        }
    }
};
