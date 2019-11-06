<template>
  <div class="sit-on-top">
    <div class="menu-btn">
      <a
        class="dat-btn btn-floating btn-large z-depth-1 primary-btn squared-btn"
        ref="button"
      >
        <div @click="toggleMenuOpen">
          <mdi-icons class="menu-icon" icon="menu" ref="icon" />
        </div>
        <div class="menu-item" ref="menuItems">
          <MenuList :opened="opened" />
        </div>
      </a>
      <div class="dat-bar">
        <ProgressBar />
      </div>
    </div>
    <div class="underlay" ref="underlay" @click="toggleMenuOpen">
      <div class="blackbox"></div>
      <div class="socialLinks">
        <div class="row">
          <a class="btn-floating btn-large socialLinks-btn waves-effect waves-light squared-btn">
            <mdi-icons icon="close" />
          </a>
        </div>
        <div class="row" v-for="button in socialLinks" :key="button.icon">
          <a class="btn-floating btn-large socialLinks-btn waves-effect waves-light squared-btn" :href="button.src" target="_blank">
            <mdi-icons :icon="button.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
import ProgressBar from "@/components/ProgressBar";
import M from "materialize-css";
import MdiIcons from "@/components/mdi-icons";

export default {
  name: "Menu",
  components: { MenuList, ProgressBar, MdiIcons },
  data() {
    return {
      clicked: false,
      socialLinks: [
        {
          src: "https://www.linkedin.com/in/nate-kelley/",
          icon: "linkedin",
          color: ""
        },
        {
          src: "https://github.com/natemkelley",
          icon: "github-Circle",
          color: ""
        },
        {
          src: "https://www.instagram.com/n8kel/",
          icon: "instagram",
          color: ""
        }
      ],
      opened: false
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
      this.opened = true;
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
  z-index: 998;
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
  margin-left: -7.64px;
  margin-top: -7px;
}
.hiddenthing {
  opacity: 0;
}
.dat-box {
  width: 310px;
  border-radius: 7px;
  height: 78vh;
  max-height: 525px;
  background: #fff ;
  background: var(--dark-background);
  overflow-y: scroll;
  scrollbar-width: none;
  border: none;
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
  opacity: 0.54;
  height: 100%;
  width: 100%;
}

.socialLinks {
  position: absolute;
  top: 0;
  left: 0;
  margin: 25px;
  margin-left: 350px;
  height: 100%;
}

.socialLinks-btn {
  background: rgba(255, 255, 255, 0.274);
  box-shadow: none;
  border: 1px solid;
  transition: all 200ms ease;
  margin-bottom: -5px;
}

.socialLinks-btn:hover {
  background: rgba(255, 255, 255, 0.474);
}

.dat-box .menu-icon {
  display: none;
}

.dat-box .menu-item {
  margin-top: -0px;
}

.sit-on-top {
  z-index: 998;
  position: absolute;
  top: 0;
}

@media only screen and (max-width: 450px) {
  .dat-box {
    width: 73vw;
    height: 85vh;
    max-height: 750px;
  }
  .socialLinks {
    margin-left: 82.5vw;
  }
}
</style>
