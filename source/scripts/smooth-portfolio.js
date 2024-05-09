const portfolioItemOnFocus = (windowHeight) => {
  const portfolioItems = document.querySelectorAll('.portfolio__link');
  if(!portfolioItems) {
    return;
  }
  for(let i = 0; i < portfolioItems.length; i++) {
    document.addEventListener('DOMContentLoaded', () => {
      if((windowHeight / 2) >= portfolioItems[i].getBoundingClientRect().top && (windowHeight / 2 * -1) <= portfolioItems[i].getBoundingClientRect().top) {
        portfolioItems[i].classList.add('portfolio__link--on-focus');
      } else {
        portfolioItems[i].classList.remove('portfolio__link--on-focus');
      }
    });
    window.addEventListener('scroll', () => {
      if((windowHeight / 2) >= portfolioItems[i].getBoundingClientRect().top && (windowHeight / 2 * -1) <= portfolioItems[i].getBoundingClientRect().top) {
        portfolioItems[i].classList.add('portfolio__link--on-focus');
      } else {
        portfolioItems[i].classList.remove('portfolio__link--on-focus');
      }
    });
  }
};

export {portfolioItemOnFocus};
