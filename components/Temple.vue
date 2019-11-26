<template>
  <div>
      <div class="temple">
            <TempleX />
    </div>
  </div>
</template>

<script>
import TempleX from '~/assets/inlinesvg/World_Beach_Temple.svg?inline'
export default {
  name: "Temple",
  props:['introTemple'],
  components: { TempleX },
};
</script>

<style scoped>
.temple{
    transform: scale(0.69)
}

.palm1{
    position: absolute;
}
</style>
