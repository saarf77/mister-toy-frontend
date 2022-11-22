<template>
    <main class="dashboard">
      <awesome-chart :data="testData" />
    </main>
  </template>
  
  <script>
  import awesomeChart from '../components/awesome-chart.vue'
  export default {
    components: {
      awesomeChart,
    },
    data() {
      return {
        testData: {
          labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
          datasets: [
            {
              data: [30, 40, 60, 70, 5],
              backgroundColor: [
                'red',
                '#77CEFF',
                '#0079AF',
                '#123E6B',
                '#97B0C4',
                '#A5C8ED',
              ],
            },
          ],
        },
      }
    },
  }
  </script>
  