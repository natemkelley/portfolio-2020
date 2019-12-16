<template>
  <div class="container-small test-component">
    <h1 class="text-center">B.S. INFORMATION TECHNOLOGY</h1>
    <h2 class="text-center secondary">MINOR: BUSINESS MANAGEMENT</h2>
    <h3 class="text-center">Brigham Young University - 2015 - 2019</h3>
    <div class="bar"></div>
    <div class="summary">
      <ul>
        <li>
          <strong>Emphasis in Web Development</strong> with a 3.63
          GPA
        </li>
        <li>
          Designed and coded 40+ Web, Mobile, and UX/UI projects including team
          projects starting from wireframes to full-fledged websites.
        </li>
        <li>Three years experience in Node.js, Vue.js, React, WebPack, and CSS frameworks.</li>
        <li>Strong exposure to Python, SQL, NoSQL, PHP, and C++.</li>
        <li>Two years experience performing user testing research (BYU Studio UX)</li>
        <li>Pursued passion of UX through extracurricular courses on Graphic Design and involvement with BYU's UXD club.</li>
      </ul>
    </div>

            <VuePureLightbox
      :thumbnail="'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/768px-Brigham_Young_University_medallion.svg.png'"
      :images="['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/768px-Brigham_Young_University_medallion.svg.png',byupic,
        'https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png',byuit
      ]"
    />
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
