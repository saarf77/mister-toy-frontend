<template>
    <h1>Prices Per Toy Label</h1>

  <BarChart :chartData="data" :options="options" />
  <hr>
  <h1>Inventory By Label</h1>
  <PieChart :chartData="data" :options1="options1" />
</template>

<script>
import { BarChart } from 'vue-chart-3'
import { PieChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'awesome-chart',
  props: {
    data: Object,
  },
  components: { BarChart , PieChart},
  data() {
    return {
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      options1: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    }
  },
}
</script>
