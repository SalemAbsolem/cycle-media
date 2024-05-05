const timeSPBFunc = () => {
  const timeWrap = document.querySelector('.page-menu__time');
  if(!timeWrap) {
    return;
  }
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
};

export {timeSPBFunc};
