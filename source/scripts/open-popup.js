const openPopupFunction = (popupBlock, openClass, openButton, textButtonOpened, textButtonClosed, menu) => {
  const pageMenu = document.querySelector('.page-menu');
  if(!popupBlock) {
    return;
  }
  if(!popupBlock.classList.contains(openClass)) {
    document.body.classList.add('body--stop-scrolling');
    popupBlock.style.display = 'flex';
    setTimeout(() => {
      popupBlock.classList.add(openClass);
      document.querySelector('.page').classList.add('page--stop-scrolling');
      openButton.textContent = textButtonOpened;
      if(!menu) {
        pageMenu.style.mixBlendMode = 'difference';
      } else {
        pageMenu.style.mixBlendMode = 'normal';
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
      pageMenu.style.mixBlendMode = null;
    } else {
      pageMenu.style.mixBlendMode = 'difference';
    }
  }
};

export {openPopupFunction};
