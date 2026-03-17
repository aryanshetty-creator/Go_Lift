<template>
  <div class="body-composition">
    <h3>Body Composition Tracker</h3>
    <div class="measurement-form">
      <input v-model.number="weight" type="number" placeholder="Weight (kg)" step="0.1" />
      <input v-model.number="bodyFat" type="number" placeholder="Body Fat %" step="0.1" />
      <input v-model.number="waist" type="number" placeholder="Waist (cm)" />
      <input v-model.number="chest" type="number" placeholder="Chest (cm)" />
      <input v-model.number="arms" type="number" placeholder="Arms (cm)" />
      <input v-model.number="thighs" type="number" placeholder="Thighs (cm)" />
      <button @click="logMeasurements">Log Measurements</button>
    </div>
    <div class="composition-stats">
      <div class="stat-card">
        <span>Lean Mass</span>
        <strong>{{ leanMass }} kg</strong>
      </div>
      <div class="stat-card">
        <span>Fat Mass</span>
        <strong>{{ fatMass }} kg</strong>
      </div>
      <div class="stat-card">
        <span>Body Fat %</span>
        <strong>{{ bodyFat }}%</strong>
      </div>
    </div>
    <div class="measurements-history">
      <h4>Measurement History</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Body Fat</th>
            <th>Waist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in history" :key="index">
            <td>{{ entry.date }}</td>
            <td>{{ entry.weight }}</td>
            <td>{{ entry.bodyFat }}%</td>
            <td>{{ entry.waist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyCompositionTracker',
  data() {
    return {
      weight: 0,
      bodyFat: 0,
      waist: 0,
      chest: 0,
      arms: 0,
      thighs: 0,
      history: []
    }
  },
  computed: {
    leanMass() {
      return (this.weight * (1 - this.bodyFat / 100)).toFixed(1);
    },
    fatMass() {
      return (this.weight * (this.bodyFat / 100)).toFixed(1);
    }
  },
  methods: {
    logMeasurements() {
      this.history.push({
        weight: this.weight,
        bodyFat: this.bodyFat,
        waist: this.waist,
        chest: this.chest,
        arms: this.arms,
        thighs: this.thighs,
        date: new Date().toLocaleDateString()
      });
    }
  }
}
</script>
