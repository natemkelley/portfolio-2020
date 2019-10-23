<template>
  <div class="sit-on-top">
    <a class="dat-btn btn-floating btn-large z-depth-1 green darken-1" ref="button">
      <i class="material-icons menu-icon" ref="icon" @click="toggleMenuOpen">menu</i>
      <div class="menu-item" ref="menuItems">
        <MenuList />
      </div>
    </a>
    <div class="underlay" ref="underlay" @click="toggleMenuOpen">
      <div class="blackbox"></div>
      <a class="btn-floating btn-large close-btn waves-effect waves-light">
        <i class="material-icons">close</i>
      </a>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import colors from "material-colors";
import M from "materialize-css";
import MenuList from "@/components/MenuList";

export default {
  name: "Menu",
  components: { MenuList },
  data() {
    return {
      clicked: false
    };
  },
  mounted() {},
  methods: {
    toggleMenuOpen() {
      if (!this.clicked) {
        this.$refs.button.classList.add("dat-box");
        this.$refs.underlay.classList.add("show");
        document.body.style.overflow = "hidden";
      } else {
        this.$refs.button.classList.remove("dat-box");
        this.$refs.underlay.classList.remove("show");
        document.body.style.overflow = "auto";
      }
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style>
:root {
  --transition-dur-x: all 300ms ease;
}
</style>

<style scoped>
.dat-btn {
  position: fixed;
  margin: 25px;
  transition: var(--transition-dur-x);
  overflow-y: hidden;
}

.dat-box {
  width: 310px;
  border-radius: 5px;
  height: 75vh;
  max-height: 525px;
  background: #fff !important;
  overflow-y: scroll;
  scrollbar-width: none;
}

.underlay {
  transition: var(--transition-dur-x);
  opacity: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  pointer-events: none;
}

.underlay.show {
  display: block !important;
  opacity: 1;
  pointer-events: all;
}

.underlay.show .blackbox {
  background-color: black;
  opacity: 0.4;
  height: 100%;
  width: 100%;
}

.close-btn {
  position: absolute;
  top: 0;
  left: 0;
  margin: 25px;
  margin-left: 25px;
  background: rgba(255, 255, 255, 0.274);
  box-shadow: none;
  border: 1px solid;
  margin-left: 350px;
  transition: all 200ms ease;
}

.close-btn:hover{
    background: rgba(255, 255, 255, 0.474);
}

.dat-box .menu-icon {
  display: none;
}

.dat-box .menu-item {
  margin-top: -0px;
}

.sit-on-top {
  z-index: 9999;
  position: absolute;
  top: 0;
}
</style>
