//return to the top
const goTop = document.querySelector('.return__top');
goTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
// make navbar skicky on the top:
const navbar = document.querySelector('.navbar');
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('fixed-top');
      goTop.style.display = 'inline';
    } else {
      navbar.classList.remove('fixed-top');
      goTop.style.display = 'none';
    }
  });
});
// contact button
const contactBtn = document.querySelector('.contact__btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 700;


  });
}
// Servise button
const serviseBtn = document.querySelector('.ground__btn');
if (serviseBtn) {
  serviseBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 500;
  });
}
// add current year to the footer:
const year = document.querySelector('.copyright__year');
const date = new Date();
year.innerHTML = date.getFullYear();
