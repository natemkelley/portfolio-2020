<template>
  <div>
    <ul class="collapsible expandable">
      <li>
        <div class="topcell">
          <MenuLogo class="menuimg" ref="menuImg" :opened="opened" />
        </div>
      </li>
      <li v-for="(n) in 5" :key="n">
        <div class="collapsible-header waves-effect waves-white">First {{n}}</div>

        <div class="collapsible-body">
          <div class="collapsible-body-overlay-video-blur">
            <video
              width="100%"
              autoplay
              muted
              loop
              preload="auto"
              :poster="require('~/assets/slc_skyline.jpg')"
            >
              <source src="~/assets/testvideo.mp4" type="video/mp4" />
              <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />Your browser does not support HTML5 video.
            </video>
            <div class="collapsible-body-overlay"></div>
          </div>
          <div class="collapsible-body-content">
            <div class="row">
                                      <p >This is a test</p>
                            <p >This is a test</p>
              <p >This is a test</p>
              <p >This is a test</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuLogo from "@/components/MenuLogo";
export default {
  name: "MenuList",
  props: ["opened"],
  components: {
    MenuLogo
  },
  mounted() {
    M.Collapsible.init(this.$el.querySelectorAll(".collapsible"), {
      accordion: true
    });
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

.collapsible-header {
  background-color: #fff0;
  color:#fff;
}

.collapsible-body {
  display: none;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  padding: 0rem;
  position: relative;
}

.collapsible-body-overlay-video-blur {
  filter: blur(10px);
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' ><filter id='svgMask'><feGaussianBlur stdDeviation='1.5' /></filter></svg>#svgMask");
  position: absolute;
  height: 100%;
  z-index: -1;
}
.collapsible-body-overlay-video-blur video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.collapsible-body-overlay {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.583);
  width: 100%;
  height: 100%;
}

.collapsible-body-content {
  color: white;
}

.topcell {
  margin-top: 21px;
}

.hidden {
  display: none;
}
</style>