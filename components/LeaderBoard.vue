<template>
  <div class="leaderboard">
    <h3>Community Leaderboard</h3>
    <div class="leaderboard-filters">
      <button @click="filterBy = 'workouts'" :class="{ active: filterBy === 'workouts' }">
        Most Workouts
      </button>
      <button @click="filterBy = 'streak'" :class="{ active: filterBy === 'streak' }">
        Longest Streak
      </button>
      <button @click="filterBy = 'badges'" :class="{ active: filterBy === 'badges' }">
        Most Badges
      </button>
    </div>
    <ul class="leaderboard-list">
      <li v-for="(user, index) in sortedUsers" :key="user.id" class="leaderboard-item">
        <span class="rank">{{ index + 1 }}</span>
        <span class="username">{{ user.name }}</span>
        <span class="score">{{ getScore(user) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeaderBoard',
  data() {
    return {
      filterBy: 'workouts',
      users: [
        { id: 1, name: 'John Doe', workouts: 150, streak: 30, badges: 12 },
        { id: 2, name: 'Jane Smith', workouts: 200, streak: 45, badges: 15 },
        { id: 3, name: 'Mike Johnson', workouts: 120, streak: 20, badges: 8 }
      ]
    }
  },
  computed: {
    sortedUsers() {
      return [...this.users].sort((a, b) => {
        return b[this.filterBy] - a[this.filterBy];
      });
    }
  },
  methods: {
    getScore(user) {
      return user[this.filterBy];
    }
  }
}
</script>
