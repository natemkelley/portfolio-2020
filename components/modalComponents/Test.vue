<template>
  <div class="container-small test-component">
    <h1 class="text-center">Awesome Content</h1>
    <div class="bar"></div>
    <p>Works like magic! By clicking on the buttons you will get access to more in depth explanations about some of my projects.</p>
    <div class="me-cheering bouncing">
      <svg-icon :name="nateCheering" width="200px" height="200px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalLarge",
  data() {
    return {
      nateCheering: "nate/cheering_right"
    };
  },
  mounted() {
    this.toggleCheer("left");
    this.$emit("loaded");
  },
  methods: {
    toggleCheer(direction) {
      setTimeout(() => {
        this.nateCheering = "nate/cheering_" + direction;
        if(direction === "right"){
        this.toggleCheer("left");

        } else{
        this.toggleCheer("right");
        }
      }, 450*2);
    }
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