<template>
  <div>
    <div
      class="modal"
      :class="{ hidden: !modalOpen }"
    >
      <div v-show="!loading">
        <div class="container" v-if="component">
          <component :is="componentFile" @loaded="toggleLoading"></component>
        </div>
      </div>
      <div v-show="loading">
        <Loading />
      </div>

      <div class="close-btn">
        <a class="btn-floating">
          <svg-icon
            name="icons/close"
            class="close-icon"
            @click="toggleModal"
          />
        </a>
      </div>
      <div class="close-btn link-btn" v-show="!loading && !intros">
        <a class="btn-floating">
          <svg-icon
            name="icons/external"
            class="close-icon"
            @click="external"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  name: "ModalCartoon",
  components: { Loading },
  props: ["modalOpen", "color", "component"],
  data() {
    return {
      loading: true,
      error: false,
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    },
    toggleLoading() {
      this.loading = false;
    },
    external(){
      window.open('/pages/'+this.component.toLowerCase(), '_blank');
    }
  },
  computed: {
    componentFile() {
      console.log(this.component);
      //      return () => import(`./modalComponents/${this.component}.vue`);
      //return () => import(`../components/modalComponents/${this.component}.vue`);

      return () => import(`../pages/pages/${this.component.toLowerCase()}.vue`);
    },
    intros(){
      if(this.component =='Test' || this.component =='Intro'){
        return true
      }
      return false
    }
  },
  watch: {
    modalOpen(newVal) {
      if (newVal == true) {
        this.loading = true;
        this.error = false;
        //console.log(document.getElementsByTagName("body")[0].style);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background: #df5b1e;
  color: white;
  transition: all 0.15s ease;
  z-index: 999;
  overflow-y: auto;
}

.hidden {
  opacity: 0;
  height: 0px;
  min-height: 0px;
}
button {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.close-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
}

.hidden .close-btn {
  display: none;
}

.close-icon {
  height: inherit;
  display: inline-block;
  text-align: center;
  width: 60%;
  margin-left: 20%;
}
.link-btn {
  margin-top: 120px;
}
</style>

