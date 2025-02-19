const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.menu-btn-open');
const mobileBtnClose = document.querySelector('.menu-btn-close');
const mobileMenuLogo = document.querySelector('.mobile-menu__logo');
const mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', toggleMenu);
mobileBtnClose.addEventListener('click', toggleMenu);
mobileMenuLogo.addEventListener('click', toggleMenu);
mobileMenuItems.forEach(item => {
  item.addEventListener('click', toggleMenu);
});
