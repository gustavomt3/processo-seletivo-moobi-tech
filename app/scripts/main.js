import menuMobile from './menu-mobile';
import glider from './glider.min';
import sliderAuto from './autoplay-glider';

menuMobile();
glider();

//Glider
const glider0 = new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dots',
  draggable: true,
  scrollLock: true,
});

//Autoplay Glider

sliderAuto(glider0, 5000);
