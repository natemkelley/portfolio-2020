<template>
  <div class="menu-btn">
    <a class="btn-floating" ref="button">
      <svg-icon name="icons/menu" class="icon menu-icon" @click="toggleMenu" />
      <div class="menu-list">
        <svg-icon class="logo" name="objects/NateKelley" ref="logo" />
        <div class="rest">
          <ul>
            <li
              v-for="item in menulist"
              :key="item.name"
              @click="menuItemClicked(item)"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="appendage">
            <p>
              This portfolio has been built off the work of
              <a href="https://www.linkedin.com/in/rleonardi/">@rleonardi</a>.
              Here's a link to the
              <a href="https://dribbble.com/rleonardi">Dribbble</a>.
            </p>
          </div>
        </div>
      </div>
      <div class="menu-icons-list">
        <div class="row">
          <a class="btn-floating">
            <svg-icon
              name="icons/close-circle"
              class="icon side-menu-icon"
              @click="toggleMenu"
            />
          </a>
        </div>
        <div class="row" v-for="(icon, n) in socialLinks" :key="icon.icon">
          <a class="btn-floating " :href="icon.src" target="_blank">
            <svg-icon
              :name="'icons/' + icon.icon"
              class="icon side-menu-icon "
              @click="toggleMenu"
            />
            <div class="appended-text" v-if="icon.append">
              <div class="keep-it-left">
                <img src="@/assets/left-arrow.png" />
              </div>
              <div class="move-it-left">{{ icon.append }}</div>
            </div>
          </a>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import animateScrollTo from "animated-scroll-to";

export default {
  name: "MenuCartoon",
  props: ["offsetLeft"],
  data() {
    return {
      clicked: false,
      socialLinks: [
        {
          src: "/pages/github",
          icon: "github",
          color: "",
        },
        {
          src: "https://www.linkedin.com/in/nate-kelley/",
          icon: "linkedin",
          color: "",
        },
        {
          src: "/accessible",
          icon: "notime2",
          color: "",
          append: "Condensed version of this portfolio",
        },
        {
          src: "https://robertrita.github.io/",
          icon: "leonardi",
          color: "",
          append: "Forked from the work of @rleonardi",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.button.classList.toggle("menu-opened");
    },
    menuItemClicked(item) {
      let newitem = item.name.replace(" ", "_").toLowerCase();
      console.log(newitem, "has been clicked");
      console.log(item.pos);
      this.$emit("overrideactive", true);
      animateScrollTo(item.pos).then((hasScrolledToPosition) => {
        this.$emit("overrideactive", false);
      });
    },
  },
  computed: {
    menulist() {
      var xxx = [
        { name: "Intro", pos: 1240, sub: [{ name: "test", pos: 1500 }] },
        { name: "Education", pos: 6100 },
        { name: "Exp", pos: 13310 },
        { name: "Projects", pos: 17215 },
        { name: "Leadership", pos: 21475 },
        { name: "Thank You", pos: 27680 },
      ];
      var returnArr = [];
      xxx.forEach((element) => {
        element.pos = element.pos;
        returnArr.push(element);
      });
      return returnArr;
    },
  },
};
</script>

<style scoped>
.menu-btn {
  position: fixed;
  margin: 45px;
  z-index: 998;
}

.btn-floating {
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
.rest {
  overflow-y: auto;
  height: 400px;
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
  margin-bottom: 0px;
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
  width: 95%;
  padding-left: 2.5%;
  padding-bottom: 5px;
  min-width: 300px;
  margin-left: 0;
  max-height: 100px;
}

.rounded {
  border-radius: 100%;
}

.appendage {
  font-family: "Frankfurter";
  margin: 15px;
  margin-top: 20px;
  border: 4px solid rgb(148, 203, 75);
  padding: 10px;
  border-radius: 12.5px;
}
.appendage p {
  margin: 0;
}
.appended-text {
  position: absolute;
  background: white;
  color: black;
  font-family: "Frankfurter";
  margin-top: -77px;
  margin-left: 90px;
  width: 207px;
  height: 40px;
  border-radius: 10px;
  padding: 15px;
      box-shadow: -7px 7px rgba(0, 0, 0, 0.158);
}
.keep-it-left {
  width: 20px;
  float: left;
}
.move-it-left {
  margin-left: 30px;
}

.appended-text img {
  height: 20px;
  margin-top: 10px;
  margin-left: 2px;
}
</style>
