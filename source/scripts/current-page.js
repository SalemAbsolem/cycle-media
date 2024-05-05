const currentPageFunc = () => {
  const logoLink = [document.querySelector('.page-menu__link'), document.querySelector('.footer__link')];
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.site-navigation__link');

  for(let i = 0; i < logoLink.length; i++) {
    if(!logoLink[i]) {
      return;
    }
    if(currentPage === logoLink[i].href.replace(window.location.origin, '') || (window.location.href.lastIndexOf('html') < 0 && window.location.href.lastIndexOf('index') < 0)) {
      logoLink[i].removeAttribute('href');
      logoLink[i].ariaCurrent = 'page';
    }
  }

  for(let i = 0; i < navLinks.length; i++) {
    if(!navLinks) {
      return;
    }
    if(currentPage === navLinks[i].href.replace(window.location.origin, '') || (navLinks[i].href.lastIndexOf('index.html') >= 0 && (window.location.href.lastIndexOf('html') < 0 && window.location.href.lastIndexOf('index') < 0))) {
      navLinks[i].removeAttribute('href');
      navLinks[i].classList.add('site-navigation__link--current');
      navLinks[i].ariaCurrent = 'page';
    }
  }
};

export {currentPageFunc};
