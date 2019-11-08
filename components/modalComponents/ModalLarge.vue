<template>
  <div class>
    <div class="summary-col">
      <h1 class="text-center">This is a modal</h1>
      <h5 class="text-center">Date | Location</h5>
      <div class="bar"></div>
      <p
        v-for="n in 3"
        :key="n"
      >The 5c marked the first time that Apple would present phone users with two options – one targeting affordability, another pursuing performance. The 5c was the former: a colourful, heavier variant of iPhone 5 with a polycarbonate shell in five bright shades, all ready to be customised further with an additional six microfibre-lined cases.</p>
    </div>
    <div class="body-col">
      <h2>Intro</h2>

      <p
        v-for="n in 3"
        :key="n"
      >he 5c marked the first time that Apple would present phone users with two options – one targeting affordability, another pursuing performance. The 5c was the former: a colourful, heavier variant of iPhone 5 with a polycarbonate shell in five bright shades, all ready to be customised further with an additional six microfibre-lined cases</p>
      <h2>Intro</h2>

      <VuePureLightbox
        thumbnail="https://via.placeholder.com/350x150"
        :images="['https://placekitten.com/1080/910']"
      />

      <p
        v-for="n in 13"
        :key="n+'x'"
      >he 5c marked the first time that Apple would present phone users with two options – one targeting affordability, another pursuing performance. The 5c was the former: a colourful, heavier variant of iPhone 5 with a polycarbonate shell in five bright shades, all ready to be customised further with an additional six microfibre-lined cases</p>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import styles from "vue-pure-lightbox/dist/VuePureLightbox.css";

export default {
  name: "ModalLarge",
  components: {
    VuePureLightbox
  },
  mounted(){
    this.$emit('loaded')
  }
};
</script>