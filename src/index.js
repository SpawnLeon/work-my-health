import Swiper from 'swiper';
import Vue from 'vue';

// SCSS
import './assets/scss/main.scss';

import subscribe from './components/Subscribe.vue';

// Vue init
const app = new Vue({
  el: '#app',
  components: {
    subscribe
  },
  //TODO: use vue component
  mounted() {
    const mainSlider = new Swiper('.main-slider__container', {
      loop: true,
      speed: 1000,
      effect: 'fade',
      pagination: {
        el: '.main-slider__pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    });
    console.log(mainSlider);

    document
      .querySelector('.main-slider__container')
      .addEventListener('mouseenter', () => {
        mainSlider.autoplay.stop();
      });

    document
      .querySelector('.main-slider__container')
      .addEventListener('mouseleave', () => {
        mainSlider.autoplay.start();
      });
  }
});
