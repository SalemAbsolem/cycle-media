const menuButton = document.querySelectorAll('.button--toogle-menu');
const menuSite = document.querySelector('.header__menu');

for(let i = 0; i < menuButton.length; i++) {
  const menuText = menuButton[i].querySelector('.button__text');
  menuButton[i].addEventListener('click', () => {
    document.body.classList.toggle('body--stop-scrolling');
    menuSite.classList.toggle('header__menu--is-open');
    if(menuSite.classList.contains('header__menu--is-open')) {
      menuText.textContent = 'закрыть';
    } else {
      menuText.textContent = 'меню?';
    }
  });
}
