<template>
  <div class="workout-equipment">
    <h3>Equipment Needed</h3>
    <ul>
      <li v-for="item in equipment" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'WorkoutEquipment',
  data() {
    return {
      equipment: ['Dumbbells', 'Bench', 'Resistance Bands']
    }
  }
}
</script>
