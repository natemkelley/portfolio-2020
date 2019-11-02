<template>
  <div>
    <svg-icon name="World_All" ref="background" />
  </div>
</template>

<script>
export default {
  name: "BackgroundAll",
  mounted() {
    this.$emit("informheight", 5000);
  }
};
</script>