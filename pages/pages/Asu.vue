<template>
  <div class="container-small test-component">
    <h1 class="text-center">B.S. INFORMATION TECHNOLOGY</h1>
    <h2 class="text-center secondary">MINOR: BUSINESS MANAGEMENT</h2>
    <h3 class="text-center">Brigham Young University - 2015 - 2019</h3>
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
    <VuePureLightbox
      thumbnail="https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png"
      :images="[
        'https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png'
      ]"
    />
    <h2>Classes</h2>
    <p>
      Here is a list of relevant undergraduate classes taken to take to date:
    </p>

    <table class="">
      <colgroup>
        <col style="width: 25%" />
        <col style="width: 75%" />
      </colgroup>
      <tbody>
        <tr>
          <th >Class</th>
          <th >Description</th>
        </tr>
        <tr>
          <td >CS 142</td>
          <td >Intro to programming</td>
        </tr>
        <tr>
          <td >CS 235</td>
          <td >Data Structures</td>
        </tr>
        <tr>
          <td >CS 236</td>
          <td >Discrete Mathmatical Structures</td>
        </tr>
        <tr>
          <td >CS 260</td>
          <td >Web Programming and Frameworks</td>
        </tr>
        <tr>
          <td >IT 124</td>
          <td >Intro to Computer Systems</td>
        </tr>
        <tr>
          <td >IT 210AB</td>
          <td >Web Programming</td>
        </tr>
        <tr>
          <td >IT 344</td>
          <td >Operatings Systems</td>
        </tr>
        <tr>
          <td >IT 347</td>
          <td >Networking and Server Administration</td>
        </tr>
        <tr>
          <td >IT 350</td>
          <td >User Experience Desgin</td>
        </tr>
        <tr>
          <td >IT 515</td>
          <td >Studio UX</td>
        </tr>
        <tr>
          <td >IT 555</td>
          <td >Advanced Human Computer Interaction</td>
        </tr>
        <tr>
          <td >TECH 312</td>
          <td >Innovation Design</td>
        </tr>
        <tr>
          <td >Eng 316</td>
          <td >Technical Communication</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

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
