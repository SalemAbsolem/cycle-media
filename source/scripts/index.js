// убираем расширение страницы
history.pushState(null, null, window.location.pathname.replace('index.html', ''));

// swiper
import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const notDesktopBP = window.matchMedia('(max-width: 1059.98px)');
if(notDesktopBP.matches) {
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

// отображение время в СПб
const timeWrap = document.querySelector('.page-menu__time');
const timeSPB = timeWrap.querySelector('.page-menu__time-spb');

setInterval(() => {
  const today = new Date();
  const hours = today.getUTCHours() + 3;
  const minute = today.getMinutes();
  if (minute < 10) {
    timeSPB.textContent = `${hours}:0${minute}}`;
  } else {
    timeSPB.textContent = `${hours}:${minute}}`;
  }
}, 1000);

// процент прокрутки страницы
const scrollWrap = document.querySelector('.page-menu__scroll');
const scrollText = scrollWrap.querySelector('.page-menu__scroll-percent');

function getScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
    document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
  );

  return (Math.ceil((scrollTop / (documentHeight - windowHeight)) * 100));
}

window.addEventListener('scroll',() => {
  if(getScrollPercentage() > 100) {
    scrollText.textContent = '100%}';
  } else {
    scrollText.textContent = `${getScrollPercentage()}%}`;
  }
});

//текущая страница
const logoLink = [document.querySelector('.page-menu__link'), document.querySelector('.footer__link')];
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.site-navigation__link');

for(let i = 0; i < logoLink.length; i++) {
  if(currentPage === logoLink[i].href.replace(window.location.origin, '') || (window.location.href.lastIndexOf('html') < 0 && window.location.href.lastIndexOf('index') < 0)) {
    logoLink[i].removeAttribute('href');
    logoLink[i].ariaCurrent = 'page';
  }
}

for(let i = 0; i < navLinks.length; i++) {
  if(currentPage === navLinks[i].href.replace(window.location.origin, '') || (navLinks[i].href.lastIndexOf('index.html') >= 0 && (window.location.href.lastIndexOf('html') < 0 && window.location.href.lastIndexOf('index') < 0))) {
    navLinks[i].removeAttribute('href');
    navLinks[i].classList.add('site-navigation__link--current');
    navLinks[i].ariaCurrent = 'page';
  }
}

// поворт круга логотипа
const hoverMedia = window.matchMedia('(hover: hover)');

let circle, rotate;

if(!notDesktopBP.matches && hoverMedia.matches) {
  circle = document.querySelector('.hero-section__decorate--title');
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

// функция открытия всплывающего окна
const openPopupFunction = (popupBlock, openClass, openButton, textButtonOpened, textButtonClosed, menu) => {
  if(!popupBlock.classList.contains(openClass)) {
    document.body.classList.add('body--stop-scrolling');
    popupBlock.style.display = 'flex';
    setTimeout(() => {
      popupBlock.classList.add(openClass);
      document.querySelector('.page').classList.add('page--stop-scrolling');
      openButton.textContent = textButtonOpened;
      if(!menu) {
        document.querySelector('.page-menu').style.mixBlendMode = 'difference';
      } else {
        document.querySelector('.page-menu').style.mixBlendMode = 'normal';
      }
    }, 100);
  } else {
    document.body.classList.remove('body--stop-scrolling');
    setTimeout(() => {
      popupBlock.style.display = null;
    }, 1000);
    popupBlock.classList.remove(openClass);
    document.querySelector('.page').classList.remove('page--stop-scrolling');
    openButton.textContent = textButtonClosed;
    if(!menu) {
      document.querySelector('.page-menu').style.mixBlendMode = null;
    } else {
      document.querySelector('.page-menu').style.mixBlendMode = 'difference';
    }
  }
};

// открытие и закрытие меню
const menuButton = document.querySelector('.button--toogle-menu');
const menuSite = document.querySelector('.header__menu');
const menuButtonText = menuButton.querySelector('.button__text');

const popupForm = document.querySelector('.modal-form');
const openPopupFormButton = document.querySelector('.button--open-form');
const openPopupFormButtonText = openPopupFormButton.querySelector('.button__text');

menuButton.addEventListener('click', () => {
  if(popupForm.classList.contains('modal-form--is-open')) {
    openPopupFunction(menuSite,'header__menu--is-open', menuButtonText, 'закрыть', 'меню?', true);
    document.querySelector('.page').classList.add('page--stop-scrolling');
    document.body.classList.add('body--stop-scrolling');
  } else {
    openPopupFunction(menuSite,'header__menu--is-open', menuButtonText, 'закрыть', 'меню?', true);
  }
});

// открытие и закрытие попапа с лид-формой
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

// валидация форм

import {parsePhoneNumber, validatePhoneNumberLength, AsYouType} from 'libphonenumber-js';

const addPlusFunction = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i].addEventListener('focus', () => {
      if(array[i].value.replaceAll(' ', '') === '' || array[i].value.replaceAll(' ', '') === '+') {
        array[i].value = '+';
      }
    });
  }
};

const phoneValidText = (phoneInput) => {
  let errorCode;
  const phoneNumber = new AsYouType();
  phoneNumber.input(phoneInput.value);
  let phoneNumberCountry;
  try {
    phoneInput.value = parsePhoneNumber(phoneInput.value).format('INTERNATIONAL');
    try {
      phoneNumberCountry = phoneNumber.getNumber().country;
    } catch {
      phoneNumberCountry = '';
    }
    errorCode = validatePhoneNumberLength(phoneInput.value, phoneNumberCountry);
  } catch {
    // phoneInput.value = phoneInput.value;
    errorCode = validatePhoneNumberLength(phoneInput.value);
  }

  if(errorCode === undefined) {
    return true;
  } else {
    return errorCode;
  }
};

const isEmailValid = (value) => {
  const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return emailRegexp.test(value);
};

const forms = document.querySelectorAll('form');

const errorList = {
  'NOT_A_NUMBER': '!Номер должен состоять из цифр',
  'INVALID_COUNTRY': '!Укажите верный код страны',
  'TOO_SHORT': '!Номер слишком короткий',
  'TOO_LONG': '!Номер слишком длинный',
  'INVALID_LENGTH': '!Неверная длина номера'
};

const emptyErrorText = '!Это поле необходимо заполнить';

const emailErrorText = '!Укажите настоящий Email';

const privacyErrorText = '!Без этого мы не сможем с вами связаться';


for(let i = 0; i < forms.length; i++) {
  const inputsText = forms[i].querySelectorAll('input[type="text"][data-required="true"]');
  const inputsTextError = forms[i].querySelectorAll('input[type="text"][data-required="true"] + .lead-form__input-error');
  const inputsEmail = forms[i].querySelectorAll('input[type="email"][data-required="true"]');
  const inputsEmailError = forms[i].querySelectorAll('input[type="email"][data-required="true"] + .lead-form__input-error');
  const inputsPhone = forms[i].querySelectorAll('input[type="tel"][data-required="true"]');
  const inputsPhoneError = forms[i].querySelectorAll('input[type="tel"][data-required="true"] + .lead-form__input-error');
  const inputsCheckbox = forms[i].querySelectorAll('input[type="checkbox"][data-required="true"]');
  const inputsCheckboxError = forms[i].querySelectorAll('input[type="checkbox"][data-required="true"] + .lead-form__input-error');
  const inputs = [inputsText, inputsEmail, inputsPhone];
  const inputError = [inputsTextError, inputsEmailError, inputsPhoneError];

  const submitBtn = forms[i].querySelectorAll('button[type="submit"]');

  addPlusFunction(inputsPhone);
  let validPhoneText;
  for(let q = 0; q < inputsPhone.length; q++) {
    inputsPhone[q].addEventListener('change', () => {
      validPhoneText = phoneValidText(inputsPhone[q]);
    });
  }

  for(let j = 0; j < submitBtn.length; j++) {
    submitBtn[j].addEventListener('click', (e) => {
      for(let q = 0; q < inputs.length; q++) {
        for(let p = 0; p < inputs[q].length; p++) {
          inputs[q][p].classList.remove('lead-form__input--empty');
          if(inputs[q][p].value.replaceAll(' ', '') === '') {
            e.preventDefault();
            inputs[q][p].value = null;
            inputs[q][p].classList.add('lead-form__input--empty');
            inputError[q][p].textContent = emptyErrorText;
          } else {
            inputs[q][p].classList.remove('lead-form__input--empty');
            inputError[q][p].textContent = null;
          }
        }
      }
      for(let q = 0; q < inputsPhone.length; q++) {
        inputsPhone[q].classList.remove('lead-form__input--invalid');
        if(errorList[validPhoneText]) {
          e.preventDefault();
          inputsPhone[q].classList.add('lead-form__input--invalid');
          inputsPhoneError[q].textContent = errorList[validPhoneText];
        } else {
          if(inputsPhoneError[q].textContent === emptyErrorText) {
            inputsPhoneError[q].textContent = emptyErrorText;
          } else {
            inputsPhoneError[q].textContent = null;
          }
          inputsPhone[q].classList.remove('lead-form__input--invalid');
        }
      }
      for(let q = 0; q < inputsEmail.length; q++) {
        inputsEmail[q].classList.remove('lead-form__input--invalid');
        if(!isEmailValid(inputsEmail[q].value)) {
          e.preventDefault();
          inputsEmail[q].classList.add('lead-form__input--invalid');
          inputsEmailError[q].textContent = emailErrorText;
        } else {
          if(inputsEmailError[q].textContent === emptyErrorText) {
            inputsEmailError[q].textContent = emptyErrorText;
          } else {
            inputsEmailError[q].textContent = null;
          }
          inputsEmail[q].classList.remove('lead-form__input--invalid');
        }
      }
      for(let q = 0; q < inputsCheckbox.length; q++) {
        const parentCheckbox = inputsCheckbox[q].parentElement;
        const toggleIconCheckbox = parentCheckbox.querySelector('.lead-form__toggle-icon');
        const labelCheckbox = parentCheckbox.querySelector('.lead-form__label');
        const linkCheckbox = parentCheckbox.querySelector('.lead-form__checkbox-link');
        if(!inputsCheckbox[q].checked) {
          e.preventDefault();
          toggleIconCheckbox.style.color = '#ff0000';
          labelCheckbox.style.color = '#ff0000';
          linkCheckbox.style.color = '#ff0000';
          inputsCheckboxError[q].textContent = privacyErrorText;
        } else {
          inputsCheckboxError[q].textContent = null;
          toggleIconCheckbox.style.color = null;
          labelCheckbox.style.color = null;
          linkCheckbox.style.color = null;
        }
      }
    });
  }
}
