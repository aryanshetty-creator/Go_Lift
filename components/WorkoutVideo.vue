<template>
  <div class="workout-video">
    <h3>Exercise Video Library</h3>
    <div class="video-grid">
      <div v-for="video in videos" :key="video.id" class="video-card">
        <div class="video-thumbnail">
          <span class="play-icon">▶</span>
        </div>
        <h4>{{ video.title }}</h4>
        <p>{{ video.duration }} | {{ video.difficulty }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutVideo',
  data() {
    return {
      videos: [
        { id: 1, title: 'Perfect Push-up Form', duration: '5:30', difficulty: 'Beginner' },
        { id: 2, title: 'Squat Technique', duration: '8:15', difficulty: 'Intermediate' },
        { id: 3, title: 'Deadlift Mastery', duration: '12:00', difficulty: 'Advanced' },
        { id: 4, title: 'Core Workout', duration: '10:00', difficulty: 'All Levels' }
      ]
    }
  }
}
</script>
