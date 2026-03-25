<template>
  <div class="step-counter">
    <h3>Daily Steps</h3>
    <p>{{ steps }} / 10,000</p>
    <button @click="steps += 100">Add 100 Steps</button>
  </div>
</template>
<script>
export default {
  name: 'StepCounter',
  data() { return { steps: 0 } }
}
</script>
