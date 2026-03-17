<template>
  <div class="gym-finder">
    <h3>Find Gyms Near You</h3>
    <div class="search-filters">
      <input v-model="location" placeholder="Enter location" />
      <select v-model="radius">
        <option value="5">5 km</option>
        <option value="10">10 km</option>
        <option value="20">20 km</option>
      </select>
      <button @click="searchGyms">Search</button>
    </div>
    <div class="gyms-list">
      <div v-for="gym in gyms" :key="gym.id" class="gym-card">
        <h4>{{ gym.name }}</h4>
        <p>{{ gym.address }}</p>
        <p>Distance: {{ gym.distance }} km</p>
        <p>Rating: ⭐ {{ gym.rating }}</p>
        <div class="amenities">
          <span v-for="(amenity, index) in gym.amenities" :key="index" class="tag">
            {{ amenity }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GymFinder',
  data() {
    return {
      location: '',
      radius: 5,
      gyms: []
    }
  },
  methods: {
    searchGyms() {
      this.gyms = [
        { id: 1, name: 'FitLife Gym', address: '123 Main St', distance: 1.2, rating: 4.5, amenities: ['Weights', 'Pool'] },
        { id: 2, name: 'PowerHouse', address: '456 Oak Ave', distance: 2.5, rating: 4.8, amenities: ['24/7', 'Classes'] }
      ];
    }
  }
}
</script>
