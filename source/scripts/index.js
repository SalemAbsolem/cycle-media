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

import {antiGravityCloud} from './cloud.js';
antiGravityCloud(hoverMedia);
