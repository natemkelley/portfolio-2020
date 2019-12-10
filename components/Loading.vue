<template>
  <div>
    <h1>{{this.displayText}}</h1>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props:['errorText'],
  computed:{
    displayText(){
      return this.errorText ? this.errorText : 'LOADING...'
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  margin-top: 30%;
  color: white;
  font-size: 1.38em;
}
</style>