const rotateCircle = (hover, viewport) => {
  let circle, rotate;

  if(!viewport.matches && hover.matches) {
    circle = document.querySelector('.hero-section__decorate--title');
    if(!circle) {
      return;
    }
    window.addEventListener('mousemove', (event) => {
      const x = event.clientX - (circle.getBoundingClientRect().x + circle.getBoundingClientRect().width / 2);
      const y = event.clientY - (circle.getBoundingClientRect().y + circle.getBoundingClientRect().height / 2);
      const deg = 180 / Math.PI * Math.atan2(y, x);
      if (deg <= 0) {
        rotate = 360 + deg;
      } else {
        rotate = deg;
      }
      circle.style.transform = `rotate(${rotate}deg)`;
    });
  } else {
    circle = document.querySelector('.hero-section__decorate--section');
    if(!circle) {
      return;
    }
    const swiper = document.querySelector('.swiper').swiper;
    const slider = document.querySelector('.swiper-wrapper');
    const slides = slider.querySelectorAll('.swiper-slide');
    let event = null;
    const observer = new MutationObserver((mutationRecords) => {
      if(mutationRecords) {
        for(let i = 0; i < slides.length; i++) {
          if(slides[i].classList.contains('swiper-slide-active')) {
            circle.style.transform = `rotate(${i * 60}deg)`;
          }
        }
      }
    });

    observer.observe(slider, {
      attributes: true,
    });

    circle.addEventListener('touchstart', (e) => {
      event = e;
    });
    circle.addEventListener('touchmove', (e) => {
      if (event) {
        if((e.touches[0].pageX - event.touches[0].pageX) < 0) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    });
    circle.addEventListener('touched', () => {
      event = null;
    });
  }
};

export {rotateCircle};
