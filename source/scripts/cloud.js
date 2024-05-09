// const antiGravityCloud = (hoverMedia) => {
//   const servicesBlock = document.querySelector('.services');
//   if(!servicesBlock) {
//     return;
//   }

//   let mouse = {'x': 0, 'y': 0};

//   // let homex = 0;
//   // let homey = 0;
//   let forcex = 0;
//   let forcey = 0;
//   const magnet = 1000;

//   let el, x0, x1, y0, y1, distancex, distancey, distance, powerx, powery, evt;

//   if(hoverMedia.matches) {
//     servicesBlock.addEventListener('mousemove', (e) => {
//       mouse = {'x': e.offsetX, 'y': e.offsetY};
//     });
//   } else {
//     // servicesBlock.addEventListener('touchstart', (e) => {
//     //   mouse = {'x': e.offsetX, 'y': e.offsetY};
//     // });
//     // servicesBlock.addEventListener('touched', (e) => {
//     //   mouse = {'x': e.offsetX, 'y': e.offsetY};
//     // });
//     servicesBlock.addEventListener('touchstart', (e) => {
//       evt = e;
//     });
//     servicesBlock.addEventListener('touchmove', (e) => {
//       if (evt) {
//         mouse = {'x': e.offsetX, 'y': e.offsetY};
//       }
//     });
//     servicesBlock.addEventListener('touched', () => {
//       evt = null;
//     });
//   }

//   const clouds = document.querySelectorAll('.types__item');
//   for(let i = 0; i < clouds.length; i++) {
//     clouds[i].dataset.homex = parseInt(clouds[i].offsetLeft + clouds[i].offsetWidth, 10);
//     clouds[i].dataset.homey = parseInt(clouds[i].offsetTop + clouds[i].offsetHeight, 10);
//   }

//   for(let i = 0; i < clouds.length; i++) {
//     clouds[i].style.position = 'absolute';
//   }

//   // setInterval(() => {
//   //   for(let i = 0; i < clouds.length; i++) {
//   //     el = clouds[i];
//   //     x0 = el.offsetLeft;
//   //     y0 = el.offsetTop;
//   //     x1 = parseInt(el.dataset.homex) + ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * 20);
//   //     y1 = parseInt(el.dataset.homey) + ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * 10);

//   //     if(x0 === x1) {
//   //       el.style.left = el.dataset.homex + 'px';
//   //     } else {
//   //       el.style.left = x1 + 'px';
//   //     // }

//   //     // if(y0 === y1) {
//   //     //   el.style.top = el.dataset.homey + 'px';
//   //     // } else {
//   //       el.style.top = y1 + 'px';
//   //     // }
//   //   }
//   // }, 3000)

//   setInterval(() => {
//     for(let i = 0; i < clouds.length; i++) {
//       el = clouds[i];
//       x0 = el.offsetLeft + (el.offsetWidth / 2);
//       y0 = el.offsetTop + (el.offsetHeight / 2);
//       x1 = mouse['x'];
//       y1 = mouse['y'];
//       distancex = x1 - x0;
//       distancey = y1 - y0;

//       distance = Math.sqrt((distancex * distancex) + (distancey * distancey));

//       // magnet = 2600 - distance * 20;
//       // if(distance > 130) {
//       //     magnet = 0;
//       // }

//       powerx = x0 - (el.offsetWidth / 2) - (distancex / distance) * magnet / distance;
//       powery = y0 - (el.offsetHeight / 2) - (distancey / distance) * magnet / distance;

//       forcex = (forcex + (el.dataset.homex - (el.offsetWidth / 2) - x0) / 2) / 2.1;
//       forcey = (forcey + (el.dataset.homey - (el.offsetHeight / 2) - y0) / 2) / 2.1;

//       el.style.left = `${powerx + forcex}px`;
//       el.style.top = `${powery + forcey}px`;
//     }
//   }, 15);
// };

// export {antiGravityCloud};
