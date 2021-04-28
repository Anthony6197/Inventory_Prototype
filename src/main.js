import { createApp, h } from 'vue'
import App from './App.vue'
import Vue from 'vue';

const app = createApp(App);

app.component('PlantRenderer', {
  render() {
    return h('hi', {}, "Still There?");
  }
});

app.mount('#app');
