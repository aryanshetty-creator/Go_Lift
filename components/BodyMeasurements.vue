<template>
  <div class="body-measurements">
    <h3>Body Measurements</h3>
    <div class="measurement-inputs">
      <input v-model.number="neck" placeholder="Neck (cm)" />
      <input v-model.number="shoulders" placeholder="Shoulders (cm)" />
      <input v-model.number="chest" placeholder="Chest (cm)" />
      <input v-model.number="biceps" placeholder="Biceps (cm)" />
      <input v-model.number="forearms" placeholder="Forearms (cm)" />
      <input v-model.number="waist" placeholder="Waist (cm)" />
      <input v-model.number="hips" placeholder="Hips (cm)" />
      <input v-model.number="thighs" placeholder="Thighs (cm)" />
      <input v-model.number="calves" placeholder="Calves (cm)" />
      <button @click="saveMeasurements">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyMeasurements',
  data() {
    return {
      neck: 0, shoulders: 0, chest: 0, biceps: 0,
      forearms: 0, waist: 0, hips: 0, thighs: 0, calves: 0
    }
  },
  methods: {
    saveMeasurements() {
      console.log('Measurements saved');
    }
  }
}
</script>
