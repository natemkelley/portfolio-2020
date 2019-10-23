<template>
  <div>
    <ul class="collapsible expandable" @click="fadeOutIndicator">
      <li>
        <div class="topcell">
          <MenuLogo class="menuimg" ref="menuImg" />
        </div>
      </li>
      <li v-for="(n) in 5" :key="n">
        <div class="collapsible-header">First {{n}}</div>
        <div class="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
      <div class="mouse" ref="mouse">
        <div class="mouse-icon">
          <span class="mouse-wheel"></span>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import MenuLogo from "@/assets/nklogosvg.svg";
export default {
  name: "MenuList",
  components: {
    MenuLogo
  },
  mounted() {
    M.Collapsible.init(this.$el.querySelectorAll(".collapsible"), {
      accordion: false
    });
  },
  methods: {
    fadeOutIndicator() {
      this.$refs.mouse.classList.add("hidden");
    }
  }
};
</script>

<style scoped>
.menuimg {
  margin: 5% 35% -2% 35%;
  border: none !important;
}

.menu-item {
  color: gray;
  transition: all 500ms;
}

.collapsible {
  box-shadow: none !important;
  border: none !important;
  color: gray;
  margin-bottom: 0;
}

.mouse {
  margin: 50px auto;
  position: absolute;
  width: 100%;
  transition: all 1s ease;
}
.mouse-icon {
  width: 25px;
  height: 45px;
  border: 2px solid gray;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  margin: auto;
  padding: 10px;
}
.mouse-wheel {
  height: 6px;
  margin: 2px auto 0;
  display: block;
  width: 3px;
  background-color: gray;
  border-radius: 50%;
  -webkit-animation: 1.6s ease infinite wheel-up-down;
  -moz-animation: 1.6s ease infinite wheel-up-down;
  animation: 1.6s ease infinite wheel-up-down;
}

.hidden {
  display: none;
}
@-webkit-keyframes wheel-up-down {
  0% {
    margin-top: 2px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    margin-top: 20px;
    opacity: 0;
  }
}
@-moz-keyframes wheel-up-down {
  0% {
    margin-top: 2px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    margin-top: 20px;
    opacity: 0;
  }
}
@keyframes wheel-up-down {
  0% {
    margin-top: 2px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    margin-top: 20px;
    opacity: 0;
  }
}
</style>