import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'lunar-expense-chart',

  extends: Line,

  mixins: [reactiveProp],

  props: ['options'],

  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
