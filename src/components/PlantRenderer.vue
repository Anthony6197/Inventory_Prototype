<template>
  <div class="plantContainer" />
</template>

<script>
import p5 from 'p5';
export default{
    props: {
        plant: { }
    },
    mounted() {
      new p5(
          (graphics) => {
            graphics.setup = () => {
              graphics.createCanvas(150, 150);
              console.log("Here are our plant parameters:", this.plant);
              // Replace this with call to plant rendering code
              // Something like drawPlant(this.plant, graphics)
              graphics.circle(60, 30, this.plant.radius);
            }
          },
          this.$el
      );
    }
};
</script>

<style scoped>
</style>

