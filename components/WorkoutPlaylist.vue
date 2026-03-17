<template>
  <div class="workout-playlist">
    <h3>My Playlists</h3>
    <div class="playlists">
      <div v-for="playlist in playlists" :key="playlist.id" class="playlist-item">
        <h4>{{ playlist.name }}</h4>
        <p>{{ playlist.songs }} songs</p>
        <button @click="play(playlist.id)">Play</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutPlaylist',
  data() {
    return {
      playlists: [
        { id: 1, name: 'Beast Mode', songs: 25 },
        { id: 2, name: 'Cardio Pump', songs: 30 }
      ]
    }
  },
  methods: {
    play(id) {
      console.log('Playing playlist:', id);
    }
  }
}
</script>
