// константы
const notDesktopBP = window.matchMedia('(max-width: 1059.98px)');
const hoverMedia = window.matchMedia('(hover: hover)');
const windowHeight = window.innerHeight;

// убираем расширение страницы
// history.pushState(null, null, window.location.pathname.replace('index.html', ''));

// swiper adventages index.html
import {adventagesSliderFunction} from './adventages.js';
adventagesSliderFunction(notDesktopBP);

// swiper quiz
import {quizSlider} from './quiz-slider.js';
quizSlider();

// отображение время в СПб
import {timeSPBFunc} from './time-spb.js';
timeSPBFunc();

// процент прокрутки страницы
import {percentScrollFunc} from './percent-scroll-page.js';
percentScrollFunc();

//текущая страница
import {currentPageFunc} from './current-page.js';
currentPageFunc();

// поворт круга логотипа
import {rotateCircle} from './circle-rotate.js';
rotateCircle(hoverMedia, notDesktopBP);

// функция открытия всплывающего окна
import {openPopupFunction} from './open-popup.js';

// открытие и закрытие меню
const menuButton = document.querySelector('.button--toogle-menu');
let menuButtonText;
if(menuButton) {
  menuButtonText = menuButton.querySelector('.button__text');
}
const menuSite = document.querySelector('.header__menu');

const popupForm = document.querySelector('.modal-form');
const openPopupFormButton = document.querySelector('.button--open-form');
let openPopupFormButtonText;
if(openPopupFormButton) {
  openPopupFormButtonText = openPopupFormButton.querySelector('.button__text');
}

if(menuButton) {
  menuButton.addEventListener('click', () => {
    if(popupForm && popupForm.classList.contains('modal-form--is-open')) {
      openPopupFunction(menuSite,'header__menu--is-open', menuButtonText, 'закрыть', 'меню?', true);
      document.querySelector('.page').classList.add('page--stop-scrolling');
      document.body.classList.add('body--stop-scrolling');
    } else {
      openPopupFunction(menuSite,'header__menu--is-open', menuButtonText, 'закрыть', 'меню?', true);
    }
  });
}


// открытие и закрытие попапа с лид-формой
if(openPopupFormButton) {
  openPopupFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(menuSite.classList.contains('header__menu--is-open')) {
      openPopupFunction(popupForm,'modal-form--is-open', openPopupFormButtonText, 'вернуться на главную', 'хочу вас');
      setTimeout(() => {
        menuSite.style.display = null;
      }, 1000);
      menuSite.classList.remove('header__menu--is-open');
      menuButtonText.textContent = 'меню?';
    } else {
      openPopupFunction(popupForm,'modal-form--is-open', openPopupFormButtonText, 'вернуться на главную', 'хочу вас');
    }
  });
}

// валидация форм
import {formValidating} from './form-validation.js';
formValidating();

import {portfolioItemOnFocus} from './smooth-portfolio.js';
portfolioItemOnFocus(windowHeight);

// import {antiGravityCloud} from './cloud.js';
const antiGravityCloud = (hover) => {
  const servicesBlock = document.querySelector('.services');
  if(!servicesBlock) {
    return;
  }

  let mouse = {'x': 0, 'y': 0};

  let forcex = 0;
  let forcey = 0;
  const magnet = 1000;

  let el, x0, x1, y0, y1, distancex, distancey, distance, powerx, powery, evt;

  if(hover.matches) {
    servicesBlock.addEventListener('mousemove', (e) => {
      mouse = {'x': e.offsetX, 'y': e.offsetY};
    });
  } else {
    servicesBlock.addEventListener('touchstart', (e) => {
      evt = e;
      mouse = {'x': e.offsetX, 'y': e.offsetY};
    });
    servicesBlock.addEventListener('touchmove', (e) => {
      if (evt) {
        mouse = {'x': e.offsetX, 'y': e.offsetY};
      }
    });
    servicesBlock.addEventListener('touched', (e) => {
      evt = null;
      mouse = {'x': e.offsetX, 'y': e.offsetY};
    });
    servicesBlock.addEventListener('click', (e) => {
      mouse = {'x': e.offsetX, 'y': e.offsetY};
    });
  }

  const clouds = servicesBlock.querySelectorAll('.types__item');
  for(let i = 0; i < clouds.length; i++) {
    clouds[i].dataset.homex = parseInt(clouds[i].offsetLeft + clouds[i].offsetWidth, 10);
    clouds[i].dataset.homey = parseInt(clouds[i].offsetTop + clouds[i].offsetHeight, 10);
  }

  for(let i = 0; i < clouds.length; i++) {
    clouds[i].style.position = 'absolute';
  }

  setInterval(() => {
    for(let i = 0; i < clouds.length; i++) {
      el = clouds[i];
      x0 = el.offsetLeft + (el.offsetWidth / 2);
      y0 = el.offsetTop + (el.offsetHeight / 2);
      x1 = mouse['x'];
      y1 = mouse['y'];
      distancex = x1 - x0;
      distancey = y1 - y0;

      distance = Math.sqrt((distancex * distancex) + (distancey * distancey));

      powerx = x0 - (el.offsetWidth / 2) - (distancex / distance) * magnet / distance;
      powery = y0 - (el.offsetHeight / 2) - (distancey / distance) * magnet / distance;

      forcex = (forcex + (el.dataset.homex - (el.offsetWidth / 2) - x0) / 2) / 2.1;
      forcey = (forcey + (el.dataset.homey - (el.offsetHeight / 2) - y0) / 2) / 2.1;

      el.style.left = `${powerx + forcex}px`;
      el.style.top = `${powery + forcey}px`;
    }
  }, 15);
};
antiGravityCloud(hoverMedia);
