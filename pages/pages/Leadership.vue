<template>
  <div class="container-small test-component">
    <h1 class="text-center">Leadership</h1>
    <div class="bar"></div>
    <div class="summary">
      <ul>
        <li>
          This page is currently under construction.
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

export default {
  name: "leadership",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>

</style>
