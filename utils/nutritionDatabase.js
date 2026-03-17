// Nutrition database

export const nutritionDatabase = {
    foods: {
        chicken: { calories: 165, protein: 31, carbs: 0, fats: 3.6 },
        rice: { calories: 130, protein: 2.7, carbs: 28, fats: 0.3 },
        broccoli: { calories: 55, protein: 3.7, carbs: 11, fats: 0.6 },
        salmon: { calories: 208, protein: 20, carbs: 0, fats: 13 },
        eggs: { calories: 155, protein: 13, carbs: 1.1, fats: 11 },
        oats: { calories: 389, protein: 17, carbs: 66, fats: 7 },
        banana: { calories: 89, protein: 1.1, carbs: 23, fats: 0.3 },
        almonds: { calories: 579, protein: 21, carbs: 22, fats: 50 }
    },

    searchFood(query) {
        return Object.keys(this.foods)
            .filter(food => food.includes(query.toLowerCase()))
            .map(food => ({ name: food, ...this.foods[food] }));
    },

    getNutrition(foodName, servingSize = 100) {
        const food = this.foods[foodName.toLowerCase()];
        if (!food) return null;
        
        const multiplier = servingSize / 100;
        return {
            calories: Math.round(food.calories * multiplier),
            protein: Math.round(food.protein * multiplier),
            carbs: Math.round(food.carbs * multiplier),
            fats: Math.round(food.fats * multiplier)
        };
    }
};
