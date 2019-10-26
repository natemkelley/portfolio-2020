<template>
  <div>
    <i class="material-icons">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path :fill="computedColor" :d="svg" />
      </svg>
    </i>
  </div>
</template>

<script>
export default {
  name: "mdi",
  props: ["icon"],
  computed: {
    computedColor() {
      return "#fff";
    },
    svg() {
      if (!this.icon) return null;
      const firstLetterCap = this.icon.replace(/^\w/, c => c.toUpperCase());
      const hype = firstLetterCap.replace(/(^|[\s-])\S/g, function(
        match
      ) {
        return match.toUpperCase();
      });
      const iconSearch = hype.replace(/-/g, "");
      const swaggah = require("@mdi/js")["mdi" + iconSearch];
      return swaggah;
    }
  }
};
</script>

<style scoped>
i {
  transform: scale(1.13);
}
</style>