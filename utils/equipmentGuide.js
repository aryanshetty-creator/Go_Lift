// Home gym equipment guide

export const equipmentGuide = {
    essential: [
        { name: 'Dumbbells', price: 100, priority: 'high' },
        { name: 'Resistance Bands', price: 30, priority: 'high' },
        { name: 'Yoga Mat', price: 25, priority: 'high' },
        { name: 'Pull-up Bar', price: 40, priority: 'medium' }
    ],

    advanced: [
        { name: 'Barbell Set', price: 300, priority: 'medium' },
        { name: 'Bench', price: 200, priority: 'medium' },
        { name: 'Squat Rack', price: 400, priority: 'low' }
    ],

    getByBudget(budget) {
        const all = [...this.essential, ...this.advanced];
        return all.filter(item => item.price <= budget);
    }
};
