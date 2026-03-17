<template>
  <div class="workout-music">
    <h3>Workout Music</h3>
    <div class="playlist-selector">
      <div 
        v-for="(playlist, key) in playlists" 
        :key="key"
        class="playlist-card"
        @click="selectPlaylist(key)"
      >
        <h4>{{ playlist.name }}</h4>
        <p>BPM: {{ playlist.bpm }}</p>
        <p>{{ playlist.duration }} min</p>
      </div>
    </div>
    <div v-if="currentPlaylist" class="now-playing">
      <h4>Now Playing: {{ currentPlaylist.name }}</h4>
      <div class="music-controls">
        <button @click="play">▶ Play</button>
        <button @click="pause">⏸ Pause</button>
        <button @click="skip">⏭ Skip</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutMusic',
  data() {
    return {
      currentPlaylist: null,
      playlists: {
        hiit: { name: 'HIIT Workout', bpm: '140-180', duration: 30 },
        strength: { name: 'Strength Training', bpm: '120-140', duration: 60 },
        cardio: { name: 'Cardio Run', bpm: '160-180', duration: 45 },
        yoga: { name: 'Yoga Flow', bpm: '60-90', duration: 60 }
      }
    }
  },
  methods: {
    selectPlaylist(key) {
      this.currentPlaylist = this.playlists[key];
    },
    play() {
      console.log('Playing:', this.currentPlaylist.name);
    },
    pause() {
      console.log('Paused');
    },
    skip() {
      console.log('Skipped');
    }
  }
}
</script>
