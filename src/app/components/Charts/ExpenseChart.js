import { Line, mixins } from 'vue-chartjs'

export default {
  name: 'lunar-expense-chart',

  extends: Line,

  mixins: [mixins.reactiveProp],

  props: ['options'],

  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: true
    })
  }
}
