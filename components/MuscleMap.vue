<template>
  <div class="muscle-map">
    <h3>Muscle Map</h3>
    <div class="body-diagram">
      <div v-for="muscle in muscles" :key="muscle.name" 
           :class="['muscle', { worked: muscle.worked }]">
        {{ muscle.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MuscleMap',
  data() {
    return {
      muscles: [
        { name: 'Chest', worked: true },
        { name: 'Back', worked: false },
        { name: 'Legs', worked: true }
      ]
    }
  }
}
</script>
