<template>
  <div class="container-small test-component">
    <h1 class="text-center">Awesome Content</h1>
    <h3 class="text-center">DATE - LOCATION</h3>
    <div class="bar"></div>
    <div class="summary">
    <ul>
      <li>Coffee Coffee CoffeeCoffeeCoffeeCoffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    </div>
            <VuePureLightbox
      thumbnail="https://via.placeholder.com/350x150"
      :images="['https://placekitten.com/1080/910','https://placekitten.com/1000/910','https://placekitten.com/580/510']"
    />
    <h2>This is a section</h2>

    <p>
      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects.
    </p>
        <p>
      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects.       Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects.      Works like magic! By clicking on the buttons you will get access to more
      in depth explanations about some of my projects.
    </p>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import styles from "vue-pure-lightbox/dist/VuePureLightbox.css";
export default {
  name: "ModalLarge",
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
.me-cheering {
  margin-top: 45px;
}
.bouncing {
  text-align: center;
  animation: bounce 0.45s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
}

@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 17px, 0);
  }
}
</style>
