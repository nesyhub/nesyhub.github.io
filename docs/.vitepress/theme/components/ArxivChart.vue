<template>
  <div class="arxiv-chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)
let chartInstance = null

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  if (!chartCanvas.value) return

  const years = Object.keys(props.data).sort()
  const counts = years.map(year => props.data[year])
  const total = counts.reduce((sum, count) => sum + count, 0)

  const ctx = chartCanvas.value.getContext('2d')
  
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Papers Published',
        data: counts,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(59, 130, 246, 0.9)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      plugins: {
        title: {
          display: true,
          text: `Neurosymbolic AI Papers by Year (Total: ${total})`,
          font: {
            size: 18,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14
          },
          bodyFont: {
            size: 13
          },
          callbacks: {
            label: function(context) {
              const percentage = ((context.parsed.y / total) * 100).toFixed(1)
              return `Papers: ${context.parsed.y} (${percentage}%)`
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 20,
            font: {
              size: 12
            }
          },
          title: {
            display: true,
            text: 'Number of Papers',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 12
            }
          },
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
      }
    }
  })
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style scoped>
.arxiv-chart-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .arxiv-chart-container {
    padding: 1rem;
    margin: 1rem 0;
  }
}
</style>


