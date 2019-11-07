<template>
  <div>
    <div class="modal" :class="{ 'hidden': !modalOpen }" :style="{background:color}">
      <div v-if="modalType == 'large'">
        <div class="container" v-if="modalOpen">
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
      </div>
      <div v-else></div>

      <div class="close-btn">
        <a class="btn-floating">
          <svg-icon name="icons/close" class="close-icon" @click="toggleModal" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import styles from "vue-pure-lightbox/dist/VuePureLightbox.css";

export default {
  name: "ModalCartoon",
  components: {
    VuePureLightbox
  },
  props: ["modalOpen", "color"],
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    }
  },
  computed: {
    modalType() {
      return "large";
    }
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  font-family: "Frankfurter";
}

.modal {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background: #f26522;
  color: white;
  transition: all 0.15s ease;
  z-index: 999;
  overflow-y: auto;
}

.hidden {
  opacity: 0;
  height: 0px;
  min-height: 0px;
}
button {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.close-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
}

.hidden .close-btn {
  display: none;
}

.close-icon {
  height: inherit;
  display: inline-block;
  text-align: center;
  width: 60%;
  margin-left: 20%;
}

.container {
  max-width: 1280px;
  width: 80%;
  margin: 10% 0%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.summary-col {
  width: 30%;
  max-height: 65vh;
  padding: 0px 10px;
  overflow-y: auto;
  position: fixed;
}

.summary-col h1 {
  font-size: 50px;
  line-height: 49px;
}

.summary-col h5 {
  font-size: 22px;
  margin-top: 8px;
  text-transform: uppercase;
}
.summary-col p {
  margin-bottom: 15px;
  width: 90%;
  margin: 5%;
}

.body-col {
  position: relative;
  /* width: 65%; */
  margin-left: 40%;
  max-height: 100%;
}

.body-col h2 {
  font-size: 35px;
  margin-bottom: 15px;
}

.body-col p {
  width: 85%;
  margin-bottom: 15px;
}

.bar {
  height: 4px;
  overflow: hidden;
  background-color: white;
  margin: 20px 10%;
  width: 80%;
  border-radius: 50px;
}
</style>

<style>
.modal img {
  border: 4px solid white;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: zoom-in;
}
.lightbox__image {
  text-align: center;
}

.modal .lightbox__image img {
  height: 90vh !important;
  width: auto;
  text-align: center;
  cursor: default;
}

.lightbox__close {
  font-size: 3.5rem;
  margin-right: 25px;
}
</style>