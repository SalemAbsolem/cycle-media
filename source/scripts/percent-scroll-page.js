const getScrollPercentage = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
    document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
  );

  return (Math.ceil((scrollTop / (documentHeight - windowHeight)) * 100));
};

const percentScrollFunc = () => {
  const scrollWrap = document.querySelector('.page-menu__scroll');
  if(!scrollWrap) {
    return;
  }
  const scrollText = scrollWrap.querySelector('.page-menu__scroll-percent');

  window.addEventListener('scroll',() => {
    if(getScrollPercentage() > 100) {
      scrollText.textContent = '100%}';
    } else {
      scrollText.textContent = `${getScrollPercentage()}%}`;
    }
  });
};

export {percentScrollFunc};
