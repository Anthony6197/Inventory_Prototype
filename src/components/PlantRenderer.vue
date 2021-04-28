<template>
  <div class="plantContainer" />
</template>

<script>
import p5 from 'p5';
export default{
    props: {
      plant: {},
      //     sunflower: '/Users/tenzinnyima/Documents/GitHub/Inventory_Prototype/src/components/image/sunflower.png'
      // },
    },
    mounted() {
      new p5(
          (graphics) => {
            graphics.setup = () => {
              graphics.createCanvas(300, 300);
              graphics.background(174, 217, 165)
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

