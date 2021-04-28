import { createApp, h } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import VueP5 from 'vue-p5';

const app = createApp(App);

app.component('PlantRenderer', {
  render() {
    return h('hi', {}, "Still There?");
  }
});

// app.component('PlantImages',{
//   render() {

//   }
// });

app.mount('#app');
