<template>
  <div class="container-small test-component">
    <h1 class="text-center">B.S. INFORMATION TECHNOLOGY</h1>
    <h2 class="text-center secondary">MINOR: BUSINESS MANAGEMENT</h2>
    <h3 class="text-center">Brigham Young University - 2015 - 2019</h3>
    <div class="bar"></div>
            <VuePureLightbox
      :thumbnail="byupic"
      :images="[byupic,
        'https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png',byuit
      ]"
    />
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
        <li>Two years experience performing user testing research (BYU Studio UX)</li>
        <li>
          Team Lead in Studio UX directing design, interview, and presentation
          efforts
        </li>
        <li>Three years experience in Node.js, Vue.js, and CSS frameworks</li>
      </ul>
    </div>

    <!--<h2>Classes</h2>
    <p>Here is a list of relevant undergraduate classes taken to take to date:</p>

  
  -->
  
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";
import byupic from '@/assets/projects/byu-grad.jpg';
import byuit from '@/assets/projects/byuit.png';

export default {
  name: "Test",
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
      },
      byupic:byupic,
      byuit:byuit
    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
</style>
