<template>
  <div class="workout-community">
    <h2>Community Feed</h2>
    <div class="post-creator">
      <textarea v-model="newPost" placeholder="Share your workout progress..."></textarea>
      <button @click="createPost" class="btn-primary">Post</button>
    </div>
    <div class="feed">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <div class="post-header">
          <div class="user-info">
            <span class="avatar">{{ post.avatar }}</span>
            <div>
              <strong>{{ post.username }}</strong>
              <span class="timestamp">{{ post.timestamp }}</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <p>{{ post.content }}</p>
          <div v-if="post.workout" class="workout-summary">
            <span>🏋️ {{ post.workout.name }}</span>
            <span>💪 {{ post.workout.volume }}kg</span>
            <span>⏱️ {{ post.workout.duration }}min</span>
          </div>
        </div>
        <div class="post-actions">
          <button @click="likePost(post)" class="action-btn">
            👍 {{ post.likes }}
          </button>
          <button @click="commentPost(post)" class="action-btn">
            💬 {{ post.comments }}
          </button>
          <button @click="sharePost(post)" class="action-btn">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutCommunity',
  data() {
    return {
      newPost: '',
      posts: [
        {
          id: 1,
          username: 'FitWarrior',
          avatar: '💪',
          content: 'Just hit a new PR on deadlift! 180kg x 5 reps!',
          workout: { name: 'Deadlift', volume: 900, duration: 45 },
          likes: 24,
          comments: 5,
          timestamp: '2 hours ago'
        },
        {
          id: 2,
          username: 'GymRat',
          avatar: '🏋️',
          content: 'Completed my first full week of training. Feeling strong!',
          workout: null,
          likes: 18,
          comments: 3,
          timestamp: '5 hours ago'
        }
      ]
    }
  },
  methods: {
    createPost() {
      if (!this.newPost.trim()) return;
      
      this.posts.unshift({
        id: Date.now(),
        username: 'You',
        avatar: '😊',
        content: this.newPost,
        workout: null,
        likes: 0,
        comments: 0,
        timestamp: 'Just now'
      });
      
      this.newPost = '';
    },
    likePost(post) {
      post.likes++;
    },
    commentPost(post) {
      alert('Comment feature coming soon!');
    },
    sharePost(post) {
      alert('Post shared!');
    }
  }
}
</script>

<style scoped>
.workout-community {
  padding: 20px;
}
.post-creator {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
.post-creator textarea {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
}
.post-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin: 15px 0;
}
.post-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.avatar {
  font-size: 2em;
}
.timestamp {
  color: #999;
  font-size: 0.9em;
  margin-left: 10px;
}
.workout-summary {
  display: flex;
  gap: 15px;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.post-actions {
  display: flex;
  gap: 15px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}
.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.2s;
}
.action-btn:hover {
  background: #f5f5f5;
}
</style>
