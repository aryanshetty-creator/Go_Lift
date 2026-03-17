// Gym and fitness center finder

export const gymFinder = {
    searchNearby(latitude, longitude, radius = 5) {
        // Mock gym data
        return [
            {
                id: 1,
                name: 'FitLife Gym',
                address: '123 Main St',
                distance: 1.2,
                rating: 4.5,
                amenities: ['Free Weights', 'Cardio', 'Pool', 'Sauna'],
                hours: '5 AM - 11 PM'
            },
            {
                id: 2,
                name: 'PowerHouse Fitness',
                address: '456 Oak Ave',
                distance: 2.5,
                rating: 4.8,
                amenities: ['Free Weights', 'Classes', 'Personal Training'],
                hours: '24/7'
            },
            {
                id: 3,
                name: 'Yoga Studio Plus',
                address: '789 Pine Rd',
                distance: 3.1,
                rating: 4.6,
                amenities: ['Yoga', 'Pilates', 'Meditation'],
                hours: '6 AM - 9 PM'
            }
        ];
    },

    filterByAmenities(gyms, amenities) {
        return gyms.filter(gym => 
            amenities.every(amenity => 
                gym.amenities.includes(amenity)
            )
        );
    },

    sortByDistance(gyms) {
        return [...gyms].sort((a, b) => a.distance - b.distance);
    },

    sortByRating(gyms) {
        return [...gyms].sort((a, b) => b.rating - a.rating);
    },

    getGymDetails(gymId) {
        return {
            id: gymId,
            name: 'FitLife Gym',
            description: 'Full-service fitness center',
            pricing: '$50/month',
            photos: [],
            reviews: []
        };
    }
};
