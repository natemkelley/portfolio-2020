<template>
  <div>
    <div class="modal" :class="{ 'hidden': !modalOpen }" :style="{background:color}">
      <h1>This is a modal</h1>
    </div>
    <button @click="toggleModal">test</button>
  </div>
</template>

<script>
export default {
  name: "ModalCartoon",
  props: ["modalOpen","color"],
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: #f26522;
  color:white;
  transition: all 0.15s ease;
  z-index: 999;
}

.hidden {
  opacity: 0.96;
  height: 0px;
}
button{
    position: fixed;
    top: 0;
    left: 0;
      z-index: 1000;

}
</style>