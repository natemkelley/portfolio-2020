<template>
  <div class="indi-background">
    <nuxt />
  </div>
</template>

<script>
export default {
    data(){
        return{
            backgrounds:['#F7941E','#39B449','#0072BB','#9E0039','#8C6239','#535353','#C73529','#7827AA']
        }
    },
    created(){
                document.body.style.color = 'white';
        document.body.style.backgroundColor = this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)];
    }
}
</script>

<style>


</style>
