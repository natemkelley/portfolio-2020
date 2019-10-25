<template>
  <div>
    <Menu />
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
    <h1>This is an exmaple page</h1>
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";
import Waves from '@/node_modules/materialize-css/js/waves';
export default {
  components: {
    Menu
  },
  mounted(){
    console.log(Waves)
  }
};
</script>

<style>
</style>
