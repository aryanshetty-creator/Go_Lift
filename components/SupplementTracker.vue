<template>
  <div class="supplement-tracker">
    <h3>Supplement Tracker</h3>
    <div class="add-supplement">
      <input v-model="supplementName" placeholder="Supplement name" />
      <input v-model="dosage" placeholder="Dosage" />
      <select v-model="frequency">
        <option value="daily">Daily</option>
        <option value="twice">Twice Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button @click="addSupplement">Add</button>
    </div>
    <ul class="supplement-list">
      <li v-for="(supp, index) in supplements" :key="index">
        <div class="supp-info">
          <strong>{{ supp.name }}</strong>
          <span>{{ supp.dosage }} - {{ supp.frequency }}</span>
        </div>
        <input type="checkbox" v-model="supp.taken" @change="markTaken(index)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SupplementTracker',
  data() {
    return {
      supplementName: '',
      dosage: '',
      frequency: 'daily',
      supplements: []
    }
  },
  methods: {
    addSupplement() {
      if (this.supplementName && this.dosage) {
        this.supplements.push({
          name: this.supplementName,
          dosage: this.dosage,
          frequency: this.frequency,
          taken: false
        });
        this.supplementName = '';
        this.dosage = '';
      }
    },
    markTaken(index) {
      this.$emit('supplement-taken', this.supplements[index]);
    }
  }
}
</script>
