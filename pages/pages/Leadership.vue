<template>
  <div class="container-small test-component">
    <h1 class="text-center">Leadership</h1>
    <div class="bar"></div>
    <div class="summary">
      <ul>
        <li>
          <strong>Emphasis in Human Computer Interaction</strong> with a 3.62
          GPA
        </li>
        <li>
          Designed and coded 30+ Web, Mobile, and UX/UI projects including team
          projects starting from wireframes to full-fledged prototypes
        </li>
        <li>
          Two years experience performing user testing research (BYU Studio UX)
        </li>
        <li>
          Team Lead in Studio UX directing design, interview, and presentation
          efforts
        </li>
        <li>Three years experience in Node.js, Vue.js, and CSS frameworks</li>
      </ul>
    </div>

    <h2>Classes</h2>
    <p>
      Here is a list of relevant undergraduate classes taken to take to date:
    </p>

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
