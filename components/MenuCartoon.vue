<template>
  <div class="menu-btn">
    <a class="btn-floating" ref="button">
      <svg-icon name="icons/menu" class="icon menu-icon" @click="toggleMenu" />
      <div class="menu-list">
        <svg-icon class="logo" name="objects/NateKelley" ref="logo" />
        <ul>
          <li v-for="item in menulist" :key="item" @click="menuItemClicked(item)">{{item}}</li>
        </ul>
      </div>
      <div class="menu-icons-list">
        <div class="row">
          <a class="btn-floating">
            <svg-icon name="icons/close-circle" class="icon side-menu-icon" @click="toggleMenu" />
          </a>
        </div>
        <div class="row" v-for="(icon,n) in socialLinks" :key="icon.icon">
          <a class="btn-floating" :href="icon.src" target="_blank">
            <svg-icon :name="'icons/'+icon.icon" class="icon side-menu-icon" @click="toggleMenu" />
          </a>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "MenuCartoon",
  data() {
    return {
      clicked: false,
      menulist: [
        "Intro",
        "Education",
        "Exp",
        "Leadership",
        "Fun Facts",
        "Hire Me"
      ],
      socialLinks: [
        {
          src: "https://www.linkedin.com/in/nate-kelley/",
          icon: "linkedin",
          color: ""
        },
        {
          src: "https://github.com/natemkelley",
          icon: "github",
          color: ""
        },
        {
          src: "https://www.instagram.com/n8kel/",
          icon: "instagram",
          color: ""
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      console.log("toggling");
      this.$refs.button.classList.toggle("menu-opened");
    },
    menuItemClicked(item) {
      let newitem = item.replace(" ", "_").toLowerCase();
      console.log(newitem, "has been clicked");
    }
  }
};
</script>

<style scoped>
.menu-btn {
  position: fixed;
  margin: 45px;
  z-index: 998;
}

.btn-floating .icon {
  height: inherit;
  display: inline-block;
  text-align: center;
  width: 60%;
  margin-left: 20%;
}

.menu-opened {
  width: 310px;
  border-radius: 7px;
  height: 77vh;
  max-height: 525px;
  overflow-y: scroll;
  scrollbar-width: none;
  border: none;
}

.menu-icons-list {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0px;
  opacity: 0;
  height: 0%;
  transition: all 200ms ease-in-out;
}
.menu-icon {
  transition: all 50ms linear;
}

.menu-opened .menu-icon {
  opacity: 0;
  height: 0;
}
.menu-opened .menu-icons-list {
  opacity: 1;
  margin-right: -30%;
  height: 100%;
}

.menu-list {
  opacity: 0;
  margin-top: 100px;
  transition: all 150ms ease;
}

.menu-opened .menu-list {
  margin-top: 0px;
  opacity: 1;
}

.menu-icons-list .row {
  transition: all 250ms ease;
  margin-bottom: -30px;
  pointer-events: none;
}

.menu-opened .menu-icons-list .row {
  width: 100% !important;
  margin-bottom: 12px !important;
  pointer-events: all;
}

.menu-list li {
  font-family: "Frankfurter", "Frankfurter2", "frankfurter-plain",
    "Frankfurter Plain";
  font-size: 47px;
  list-style: none;
  text-align: left;
  line-height: 61px;
}
.menu-list li:hover {
  color: #92cc41;
}

.menu-list img {
  width: 100%;
}

ul {
  /* bottom: 0; */
  min-width: 300px;
  margin: 0;
  padding: 0px 20px;
}

.menu-list .logo {
  width: 100%;
  min-width: 300px;
  margin-left: 0;
  padding: 6%;
  max-height: 100px;
}
</style>