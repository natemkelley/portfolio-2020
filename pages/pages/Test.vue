<template>
  <div class="container-small test-component">
    <h1 class="text-center">Awesome Content</h1>
    <h3 class="text-center">DATE - LOCATION</h3>
    <div class="bar"></div>
    <div class="summary">
      <ul>
        <li>
          Coffee Coffee CoffeeCoffeeCoffeeCoffee Coffee Coffee Coffee Coffee
          Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee
          Coffee
        </li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
    <VuePureLightbox
      thumbnail="https://via.placeholder.com/350x150"
      :images="[
        'https://placekitten.com/1080/910',
        'https://placekitten.com/1000/910',
        'https://placekitten.com/580/510'
      ]"
    />
    <h2>This is a section</h2>

    <p>
      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects.
    </p>
    <p>
      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects. Works like magic! By
      clicking on the buttons you will get access to more in depth explanations
      about some of my projects. Works like magic! By clicking on the buttons
      you will get access to more in depth explanations about some of my
      projects.
    </p>
    <h2>This is a section</h2>
    <p>
      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects. Works like magic! By
      clicking on the buttons you will get access to more in depth explanations
      about some of my projects. Works like magic! By clicking on the buttons
      you will get access to more in depth explanations about some of my
      projects.
    </p>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <BarChart :chartData="chartData" />
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

<style scoped></style>
