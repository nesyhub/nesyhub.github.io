<template>
  <div>
    <div v-if="loading" class="loading">Loading chart data...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ArxivChart v-else-if="data" :data="data" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ArxivChart from './ArxivChart.vue'

const data = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/research/arxiv-stats.json')
    if (!response.ok) {
      throw new Error('Failed to load chart data')
    }
    const jsonData = await response.json()
    data.value = jsonData.years
    loading.value = false
  } catch (e) {
    error.value = 'Unable to load chart data: ' + e.message
    loading.value = false
  }
})
</script>

<style scoped>
.loading, .error {
  padding: 2rem;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin: 2rem 0;
}

.error {
  color: var(--vp-c-danger-1);
}
</style>


