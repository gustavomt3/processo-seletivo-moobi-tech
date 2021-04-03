export default function menuMobile() {
  const divSpansHamburguer = document.querySelector('.spans-hamburguer');
  const spansHamburguer = divSpansHamburguer.querySelectorAll('span');
  const ulMenu = document.querySelector('.ul-menu');
  const aMenu = ulMenu.querySelectorAll('a');
  const body = document.querySelector('body');
  const imgMenu = document
    .querySelector('.container__logo-afiliado')
    .querySelector('img');
  const containerMenu = document.querySelector('.container-menu');
  const containerLogoAfiliado = document.querySelector(
    '.container__logo-afiliado'
  );
  const menu = document.querySelector('.menu');
  const html = document.querySelector('html');

  function openMenu() {
    ulMenu.classList.toggle('active');
    divSpansHamburguer.classList.toggle('active');
    spansHamburguer.forEach((span) => {
      span.classList.toggle('active');
    });
    if (ulMenu.className.includes('active')) {
      body.style.overflow = 'hidden';
      ulMenu.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
      ulMenu.style.overflow = 'auto';
      html.style.overflow = 'auto';
    }
  }
  divSpansHamburguer.addEventListener('click', openMenu);

  function clickLink() {
    ulMenu.classList.remove('active');
    body.style.overflow = 'auto';
    ulMenu.style.overflow = 'auto';
    html.style.overflow = 'auto';
    spansHamburguer.forEach((span) => {
      span.classList.remove('active');
    });
  }
  aMenu.forEach((a) => {
    a.addEventListener('click', clickLink);
  });

  function changeImageLogo() {
    if (window.innerWidth < 768) {
      imgMenu.setAttribute('src', '../img/icon-sinmedal.svg');
    } else {
      imgMenu.setAttribute('src', '../img/logo-sinmedal.svg');
    }
  }
  changeImageLogo();
  window.addEventListener('resize', changeImageLogo);

  function container() {
    if (window.innerWidth <= 768) {
      containerMenu.classList.add('container');
      containerLogoAfiliado.classList.remove('container');
      menu.classList.remove('container');
    } else {
      containerMenu.classList.remove('container');
      containerLogoAfiliado.classList.add('container');
      menu.classList.add('container');
    }
  }
  container();
  window.addEventListener('resize', container);
}
