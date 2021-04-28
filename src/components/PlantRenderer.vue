<template>
  <canvas width="200" height="200" />
</template>

<script>
import { h } from "vue";
export default{
    props: {
        plant: { }
    },
    mounted() {
      console.log("Here is our DOM element:", this.$el, this.plant);
    }
};
</script>
<style scoped>
</style>>

