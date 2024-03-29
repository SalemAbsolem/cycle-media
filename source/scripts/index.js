const page = document.querySelector('.page');
const menuButton = document.querySelectorAll('.button--toogle-menu');
const menuSite = document.querySelector('.header__menu');

for(let i = 0; i < menuButton.length; i++) {
  const menuText = menuButton[i].querySelector('.button__text');
  menuButton[i].addEventListener('click', () => {
    document.body.classList.toggle('body--stop-scrolling');
    menuSite.classList.toggle('header__menu--is-open');
    if(menuSite.classList.contains('header__menu--is-open')) {
      page.classList.add('page--stop-scrolling');
      menuText.textContent = 'закрыть';
    } else {
      page.classList.remove('page--stop-scrolling');
      menuText.textContent = 'меню?';
    }
  });
}
