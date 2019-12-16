<template>
  <div class="container-small test-component">
    <h1 class="text-center">M.S. USER EXPERIENCE</h1>
    <h3 class="text-center">Arizona State University - 2019 - 2020</h3>
    <div class="bar"></div>
    <div class="summary">
      <ul>
      <li>4.17 GPA as of December 17, 2019</li>
      <li><strong>Developed expertise in Vue.js</strong></li>
      <li>Currently (until May 2020) working with the United States Air Force on research focused on human-robot teaming.</li>
      <li>Developed expertise in product design and development techniques.</li>
      <li>Team UX research projects including heuristic evaluations, market research, individual and group user tests, and task analysis diagramming.</li>
      <li>Practiced user centered design thinking strategies including UX-Agile best practices.</li>
      <li>Created 12+ projects related to graphic and experience design</li>
      </ul>
    </div>
    <VuePureLightbox
      thumbnail="https://www.entertainmentsolutionsinc.com/wp-content/uploads/2017/11/logo-asu-white-bg.jpg"
      :images="['https://www.entertainmentsolutionsinc.com/wp-content/uploads/2017/11/logo-asu-white-bg.jpg','https://asunow.asu.edu/sites/default/files/styles/panopoly_image_full/public/nancy-cooke-lab.jpg?itok=2F1fmza3',
        'https://www.aiatopten.org/sites/default/files/styles/popup/public/ASU%20COTE%20Top%2010%20images_Page_18.jpg?itok=floVFYo-'
      ]"
    />
    
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

export default {
  name: "asu",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>

</style>
