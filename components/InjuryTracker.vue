<template>
  <div class="injury-tracker">
    <h3>Injury & Recovery Tracker</h3>
    <div class="add-injury">
      <input v-model="injuryName" placeholder="Injury/Pain location" />
      <select v-model="severity">
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <input v-model="injuryDate" type="date" />
      <button @click="addInjury">Log Injury</button>
    </div>
    <ul class="injury-list">
      <li v-for="(injury, index) in injuries" :key="index" :class="['injury-item', injury.severity]">
        <div class="injury-info">
          <strong>{{ injury.name }}</strong>
          <span>{{ injury.date }}</span>
          <span class="severity-badge">{{ injury.severity }}</span>
        </div>
        <button @click="markRecovered(index)">Recovered</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InjuryTracker',
  data() {
    return {
      injuryName: '',
      severity: 'mild',
      injuryDate: new Date().toISOString().split('T')[0],
      injuries: []
    }
  },
  methods: {
    addInjury() {
      if (this.injuryName) {
        this.injuries.push({
          name: this.injuryName,
          severity: this.severity,
          date: this.injuryDate,
          recovered: false
        });
        this.injuryName = '';
      }
    },
    markRecovered(index) {
      this.injuries.splice(index, 1);
    }
  }
}
</script>
