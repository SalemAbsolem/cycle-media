import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';
const adventagesSliderFunction = (viewport) => {
  if(viewport.matches) {
    const sliderAdvanteges = document.querySelector('.swiper.hero-section__swiper');
    if(!sliderAdvanteges) {
      return;
    }
    new Swiper('.swiper', {
      modules: [Autoplay],
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      disableOnInteraction: false,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        480: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 60,
        },
      }
    });
  }
};

export {adventagesSliderFunction};
