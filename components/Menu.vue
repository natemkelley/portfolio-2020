<template>
  <div class="sit-on-top">
    <a class="dat-btn btn-floating btn-large z-depth-3" ref="button">
      <i class="material-icons" ref="icon" @click="click">menu</i>
      <div class="menu-item" ref="menuItems">
        <ul class="collapsible expandable">
          <li>
            <div class="topcell">
              <MenuLogo class="menuimg" ref="menuImg" />
            </div>
          </li>
          <li v-for="n in 5" :key="n">
            <div class="collapsible-header">First</div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    </a>
    <div class="underlay" ref="underlay" @click="click"></div>
  </div>
</template>

<script>
import anime from "animejs";
import colors from "material-colors";
import M from "materialize-css";
import MenuLogo from "@/assets/nklogosvg.svg";

export default {
  name: "Menu",
  components: {
    MenuLogo
  },
  data() {
    return {
      clicked: false,
      menuAnime: null,
      width: 310,
      height: "69vh",
      boxColor: colors.white,
      buttonColor: colors.green[600],
      duration: 365,
      durationOffset: 50
    };
  },
  mounted() {
    this.$refs.button.style.backgroundColor = this.buttonColor;
    this.menuAnime = anime.timeline({
      duration: this.duration,
      autoplay: false
    });
    //underlay
    this.menuAnime.add(
      {
        targets: this.$refs.underlay,
        opacity: 0.35,
        begin: anim => {
          if (anim.reversePlayback) {
            setTimeout(() => {
              this.$refs.underlay.style.display = "none";
            }, this.duration * 2.5);
          } else {
            this.$refs.underlay.style.display = "block";
          }
        }
      },
      this.durationOffset
    );
    //box
    this.menuAnime.add(
      {
        targets: this.$refs.button,
        width: {
          value: this.width
        },
        height: this.height,
        borderRadius: {
          value: "20px"
        },
        backgroundColor: { value: this.boxColor },
        translateX: 20,
        translateY: 20,
        easing: "easeOutExpo",
        begin: anim => {
          this.$refs.button.style.overflowY = anim.reversePlayback
            ? "hidden"
            : "scroll";
        }
      },
      this.durationOffset
    );
    //menu
    this.menuAnime.add(
      {
        targets: this.$refs.menuItems,
        translateY: -71,
        opacity: 1,
        easing: "linear"
      },
      this.durationOffset
    );
    //icon
    this.menuAnime.add(
      {
        targets: this.$refs.icon,
        opacity: 0,
        easing: "linear"
      },
      this.durationOffset
    );
    //menuimg
    this.menuAnime.add(
      {
        targets: this.$el.querySelectorAll("g"),
        fill: ["#fff", this.buttonColor],
        easing: "linear"
      },
      this.durationOffset
    );

    M.Collapsible.init(this.$el.querySelectorAll(".collapsible"), {
      accordion: false
    });
  },
  methods: {
    click() {
      this.clicked = !this.clicked;
      this.menuAnime.play();
      this.menuAnime.finished.then(() => {
        this.menuAnime.reverse();
      });
    }
  }
};
</script>

<style scoped>
.dat-btn {
  position: fixed;
  margin: 25px;
}

.menuimg {
  margin: 5% 35% -5% 35%;
  border: none !important;
}

.transition {
  transition: 100ms;
  -webkit-transition: 100ms;
}

.menu-item {
  color: gray;
}
.hidden {
  opacity: 0.05;
}

.collapsible {
  box-shadow: none !important;
  border: none !important;
}

.underlay {
  transition: 100ms;
  background-color: black;
  opacity: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: none;
}

.sit-on-top {
  z-index: 9999;
  position: absolute;
  top: 0;
}
</style>
