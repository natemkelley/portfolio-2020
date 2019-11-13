<template>
  <div>
    <div
      class="modal"
      :class="{ hidden: !modalOpen }"
      :style="{ background: color }"
    >
      <div v-show="!loading">
        <p>{{ component }}</p>
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
      loading: true
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    toggleLoading() {
      this.loading = false;
    }
  },
  computed: {
    componentFile() {
      console.log(this.component);
      return () => import(`./modalComponents/${this.component}.vue`);
    }
  },
  watch: {
    modalOpen(newVal) {
      if (newVal == true) {
        this.loading = true;
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
  background: #f26522;
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
</style>

<style>
.modal img {
  border: 4px solid white;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: zoom-in;
}
.lightbox__image {
  text-align: center;
}

.modal .lightbox__image img {
  height: 90vh !important;
  width: auto;
  text-align: center;
  cursor: default;
}

.lightbox__close {
  font-size: 3.5rem !important;
  margin-right: 25px;
}

.modal p {
  font-size: 18px;
}
</style>
