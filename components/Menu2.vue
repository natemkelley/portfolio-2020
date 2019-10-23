<template>
  <div class="sit-on-top">
    <div class="menu-btn">
      <a class="dat-btn btn-floating btn-large z-depth-1 green darken-1" ref="button">
        <i class="material-icons menu-icon" ref="icon" @click="toggleMenuOpen">menu</i>
        <div class="menu-item" ref="menuItems">
          <MenuList />
        </div>
      </a>
      <div class="dat-bar">
        <ProgressBar />
      </div>
    </div>
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
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "Menu",
  components: { MenuList, ProgressBar },
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    toggleMenuOpen() {
      if (!this.clicked) {
        this.$refs.button.classList.add("dat-box");
        this.$refs.underlay.classList.add("show");
        this.$el.querySelector(".dat-bar").classList.add("hiddenthing");
        document.body.style.overflow = "hidden";
      } else {
        this.$refs.button.classList.remove("dat-box");
        this.$refs.underlay.classList.remove("show");
        this.$el.querySelector(".dat-bar").classList.remove("hiddenthing");
        document.body.style.overflow = "auto";
      }
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style>
:root {
  --transition-dur-x: 300ms ease all;
}
</style>

<style scoped>
.menu-btn {
  position: fixed;
  margin: 25px;
  z-index: 9999;
}

.dat-btn {
  transition: var(--transition-dur-x);
  overflow-y: hidden;
}

.dat-bar {
  transition: all 330ms ease;
  -webkit-transition: all 330ms linear; /* Safari and Chrome */
  opacity: 0.7;
  width: 70px;
  position: absolute;
  top: 0;
  margin-left: -6.44px;
  margin-top: -7px;
}
.hiddenthing {
  opacity: 0;
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
  opacity: 1;
  pointer-events: all;
}

.underlay .blackbox {
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

.close-btn:hover {
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
