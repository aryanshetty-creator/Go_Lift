<template>
  <div class="achievement-center">
    <h2>Achievement Center</h2>
    <div class="level-display">
      <div class="level-badge">
        <span class="level-number">{{ userLevel.level }}</span>
        <span class="level-label">Level</span>
      </div>
      <div class="xp-bar">
        <div class="xp-progress" :style="{ width: userLevel.progressPercentage + '%' }"></div>
        <span class="xp-text">{{ userLevel.xpProgress }} / {{ userLevel.xpNeeded }} XP</span>
      </div>
    </div>
    <div class="achievements-grid">
      <div v-for="achievement in achievements" :key="achievement.id" 
           class="achievement-card" 
           :class="{ unlocked: achievement.unlocked }">
        <div class="achievement-icon">{{ achievement.icon }}</div>
        <h3>{{ achievement.name }}</h3>
        <p>{{ achievement.description }}</p>
        <div v-if="achievement.unlocked" class="unlock-date">
          Unlocked: {{ achievement.unlockedDate }}
        </div>
        <div v-else class="locked-overlay">
          <span>🔒</span>
        </div>
      </div>
    </div>
    <div class="daily-quest">
      <h3>Daily Quest</h3>
      <div class="quest-card">
        <h4>{{ dailyQuest.title }}</h4>
        <div class="quest-reward">
          <span>Reward: {{ dailyQuest.xp }} XP</span>
          <span class="difficulty" :class="dailyQuest.difficulty">
            {{ dailyQuest.difficulty }}
          </span>
        </div>
        <button @click="trackQuest" class="btn-primary">Track Progress</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementCenter',
  data() {
    return {
      userLevel: {
        level: 12,
        xpProgress: 850,
        xpNeeded: 1200,
        progressPercentage: 70.8
      },
      dailyQuest: {
        title: 'Complete a leg workout',
        xp: 100,
        difficulty: 'medium'
      },
      achievements: [
        { id: 1, name: 'First Steps', icon: '👟', description: 'Complete your first workout', unlocked: true, unlockedDate: '2024-01-15' },
        { id: 2, name: 'Week Warrior', icon: '🔥', description: 'Maintain a 7-day streak', unlocked: true, unlockedDate: '2024-02-01' },
        { id: 3, name: 'PR Hunter', icon: '🎯', description: 'Set 10 personal records', unlocked: true, unlockedDate: '2024-02-20' },
        { id: 4, name: 'Volume King', icon: '👑', description: 'Reach 100,000kg total volume', unlocked: false },
        { id: 5, name: 'Month Master', icon: '📅', description: 'Maintain a 30-day streak', unlocked: false },
        { id: 6, name: 'Iron Legend', icon: '⚡', description: 'Reach level 50', unlocked: false }
      ]
    }
  },
  methods: {
    trackQuest() {
      alert('Quest tracking started!');
    }
  }
}
</script>

<style scoped>
.achievement-center {
  padding: 20px;
}
.level-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin: 20px 0;
}
.level-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.level-number {
  font-size: 4em;
  font-weight: bold;
}
.xp-bar {
  position: relative;
  width: 100%;
  height: 30px;
  background: rgba(255,255,255,0.2);
  border-radius: 15px;
  overflow: hidden;
}
.xp-progress {
  height: 100%;
  background: rgba(255,255,255,0.8);
  transition: width 0.3s;
}
.xp-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.achievement-card {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}
.achievement-card.unlocked {
  border: 2px solid #4CAF50;
}
.achievement-icon {
  font-size: 3em;
  margin-bottom: 10px;
}
.locked-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 3em;
}
.quest-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
}
.quest-reward {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.difficulty {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
}
.difficulty.easy { background: #4CAF50; color: white; }
.difficulty.medium { background: #FFC107; color: black; }
.difficulty.hard { background: #F44336; color: white; }
</style>
