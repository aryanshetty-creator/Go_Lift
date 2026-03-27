<template>
  <div class="workout-partner">
    <h3>Find Workout Partner</h3>
    <input v-model="location" placeholder="Your location" />
    <button @click="search">Search</button>
    <div class="partners">
      <div v-for="partner in partners" :key="partner.id">
        {{ partner.name }} - {{ partner.distance }}km away
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutPartner',
  data() {
    return {
      location: '',
      partners: []
    }
  },
  methods: {
    search() {
      this.partners = [
        { id: 1, name: 'John', distance: 2.5 },
        { id: 2, name: 'Sarah', distance: 5.0 }
      ];
    }
  }
}
</script>
