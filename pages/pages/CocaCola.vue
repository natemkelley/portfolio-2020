<template>
  <div class="container-small test-component">

    <h1 class="text-center">Coca-Cola Scholarship</h1>
    <h3 class="text-center">2013 - Atlanta, GA</h3>
    <div class="bar"></div>
    <div class="summary">
    <ul>
      <li>Honored as 1 of 200 students from a pool of 245,000+ applicants from across the United States.</li>
        <li>Selected based on community service and academic performance.</li>
        <li>More information regarding the Coca-Cola Scholars program can be found at <a href="https://www.coca-colascholarsfoundation.org/" target="_blank">https://www.coca-colascholarsfoundation.org/</a></li>
    </ul>
    </div>
    <VuePureLightbox
      :thumbnail="'https://res.cloudinary.com/real-times-media/image/upload/v1552241789/images_cocacola-scholar-foundation-which-focus-themselve-on-scholarship-for-students_aoxhtz.jpg'"
      :images="['https://res.cloudinary.com/real-times-media/image/upload/v1552241789/images_cocacola-scholar-foundation-which-focus-themselve-on-scholarship-for-students_aoxhtz.jpg']"
    />
    
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";

export default {
  name: "cocacola",
  layout: "indipage",
  components: {
    VuePureLightbox
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
a{
  color:white
}
</style>
