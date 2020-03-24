<template>
  <div class="container-small test-component">
    <h1 class="text-center">Leadership</h1>
    <div class="bar"></div>
    <h2>Eagle Scout</h2>
    <p>As a youth I was actively involved with the Boy Scouts of America and achieved the rank of Eagle Scout. As a scout I learned skills of thrift, hard work, and service.</p>
    <img src="https://i0.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2019/05/Trail-to-Eagle.jpg?resize=678%2C381&ssl=1" />
    <h2>Student Body Officer of Service</h2>
    <p>As the SBO of service I personally directed city’s Sub for Santa fundraiser raising over $88,000 for
local and national charities.</p>
    <img src="http://spanishoaks.nebo.edu/sites/spanishoaks.nebo.edu/files/styles/large/public/santa.PNG?itok=4v5N_cnY" />
        <h2>Volunteer Representative</h2>
    <p>As a volunteer for the Church of Jesus Christ of Latter-day saints, I worked all day every day with church members, community members, and other clergy. I executed bi-monthly ecclesiastical trainings with other volunteers in professional working Italian. I also performed community services and taught bi-weekly English courses.</p>

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
img{
  width: 100%;
}
</style>
