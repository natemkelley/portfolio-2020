<template>
  <div>
    <span class="score">{{score}}</span>
  </div>
</template>

<script>
export default {
  name: "ScoreKeeper",
  props: ["previousScrollPos"],
  computed: {
    score() {
      return String(Math.round(this.previousScrollPos / 100) * 20).padStart(
        5,
        "0"
      );
    }
  }
};
</script>

<style scoped>
span {
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  font-family: "Press Start 2P", cursive;
  font-size: 26.5px;
  margin: 37px 25px;
}
</style>