<template>
  <div class="split-selector">
    <h3>Choose Your Workout Split</h3>
    <div class="splits-grid">
      <div 
        v-for="(split, key) in splits" 
        :key="key"
        :class="['split-card', { selected: selectedSplit === key }]"
        @click="selectSplit(key)"
      >
        <h4>{{ split.name }}</h4>
        <p>{{ split.days }} days per week</p>
        <button>View Schedule</button>
      </div>
    </div>
    <div v-if="selectedSplit" class="split-schedule">
      <h4>{{ splits[selectedSplit].name }} Schedule</h4>
      <ul>
        <li v-for="(day, key) in splits[selectedSplit].schedule" :key="key">
          <strong>{{ day.name }}</strong>: {{ day.focus }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutSplitSelector',
  data() {
    return {
      selectedSplit: null,
      splits: {
        ppl: { name: 'Push/Pull/Legs', days: 6, schedule: {} },
        ul: { name: 'Upper/Lower', days: 4, schedule: {} },
        bro: { name: 'Bro Split', days: 5, schedule: {} },
        fb: { name: 'Full Body', days: 3, schedule: {} }
      }
    }
  },
  methods: {
    selectSplit(key) {
      this.selectedSplit = key;
      this.$emit('split-selected', key);
    }
  }
}
</script>
