<script>
import { Line } from "vue-chartjs";

export default {
  name: "LinearChart",
  extends: Line,
  props: ["chartData"],
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100
              }
            }
          ]
        },
        maintainAspectRatio: true,
                  layout: {
            padding: {
                left: 20,
                right: 22,
                top: 20,
                bottom: 20
            }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  methods: {}
};
</script>

<style scoped>
canvas {
   background-color: rgba(255, 255, 255, 0.89);
   border-radius: 12px;
}
</style>
