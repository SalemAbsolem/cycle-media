// убираем расширение страницы
history.pushState(null, null, window.location.pathname.replace('index.html', ''));

// swiper
/* eslint-disable */
const notDesktopBP = window.matchMedia('(max-width: 1059.98px)');
if(notDesktopBP.matches) {
  const swiper = new Swiper('.swiper', {
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
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
/* eslint-enable */

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

// поворт крога логотипа
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
}

// открытие и закрытие меню
const page = document.querySelector('.page');
const menuButton = document.querySelectorAll('.button--toogle-menu');
const menuSite = document.querySelector('.header__menu');

for(let i = 0; i < menuButton.length; i++) {
  const menuText = menuButton[i].querySelector('.button__text');
  menuButton[i].addEventListener('click', () => {
    document.body.classList.toggle('body--stop-scrolling');
    if(!menuSite.classList.contains('header__menu--is-open')) {
      menuSite.style.display = 'flex';
      setTimeout(() => {
        menuSite.classList.add('header__menu--is-open');
        page.classList.add('page--stop-scrolling');
        menuText.textContent = 'закрыть';
      }, 100);
    } else {
      setTimeout(() => {
        menuSite.style.display = null;
      }, 1000);
      menuSite.classList.remove('header__menu--is-open');
      page.classList.remove('page--stop-scrolling');
      menuText.textContent = 'меню?';
    }
  });
}
