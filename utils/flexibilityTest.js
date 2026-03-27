// Flexibility assessment
export const flexibilityTest = {
    sitAndReach(distance) {
        if (distance < 0) return 'Poor';
        if (distance < 10) return 'Below Average';
        if (distance < 20) return 'Average';
        if (distance < 30) return 'Good';
        return 'Excellent';
    },
    shoulderMobility(canTouch) {
        return canTouch ? 'Good mobility' : 'Needs improvement';
    }
};
