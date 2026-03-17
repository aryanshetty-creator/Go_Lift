<template>
  <div class="workout-buddy">
    <h3>Find Workout Buddies</h3>
    <div class="buddy-search">
      <input v-model="searchQuery" placeholder="Search by location or interests..." />
      <button @click="search">Search</button>
    </div>
    <div class="buddies-list">
      <div v-for="buddy in buddies" :key="buddy.id" class="buddy-card">
        <div class="buddy-avatar">{{ buddy.initials }}</div>
        <div class="buddy-info">
          <h4>{{ buddy.name }}</h4>
          <p>{{ buddy.location }}</p>
          <p>{{ buddy.interests }}</p>
        </div>
        <button @click="connect(buddy.id)">Connect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutBuddy',
  data() {
    return {
      searchQuery: '',
      buddies: [
        { id: 1, name: 'Alex Johnson', initials: 'AJ', location: 'New York', interests: 'Weightlifting, Running' },
        { id: 2, name: 'Sarah Lee', initials: 'SL', location: 'Los Angeles', interests: 'Yoga, Pilates' },
        { id: 3, name: 'Mike Chen', initials: 'MC', location: 'Chicago', interests: 'CrossFit, Boxing' }
      ]
    }
  },
  methods: {
    search() {
      console.log('Searching for:', this.searchQuery);
    },
    connect(id) {
      this.$emit('buddy-connected', id);
    }
  }
}
</script>
