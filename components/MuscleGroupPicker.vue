<template>
  <div class="muscle-picker">
    <h3>Select Muscle Groups</h3>
    <div class="muscles">
      <button v-for="m in muscles" :key="m" @click="toggle(m)" 
        :class="{ active: selected.includes(m) }">
        {{ m }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MuscleGroupPicker',
  data() {
    return {
      muscles: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms'],
      selected: []
    }
  },
  methods: {
    toggle(m) {
      const i = this.selected.indexOf(m);
      i > -1 ? this.selected.splice(i, 1) : this.selected.push(m);
    }
  }
}
</script>
