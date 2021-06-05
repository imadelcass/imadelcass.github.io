const toggle = document.querySelector('.burger');
const explore = document.querySelector('.explore');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('navlist');
});
explore.addEventListener('click', () => {
  window.scroll({ top: 1000, left: 0, behavior: 'smooth' });
});

//projects start
const images = [
  {
    src: './img/project__menu.png',
    href: 'http://127.0.0.1:5500/Sidebar/',
  },
  {
    src: './img/project__trans.png',
    href: 'http://127.0.0.1:5500/Transport/',
  },
  {
    src: './img/project__portfolio.png',
    href: 'http://127.0.0.1:5500/Portfolio/',
  },
  {
    src: './img/project__menu.png',
    href: 'http://127.0.0.1:5500/Menu/',
  },
  {
    src: './img/project__menu.png',
    href: 'http://127.0.0.1:5500/Menu/',
  },
  {
    src: './img/project__menu.png',
    href: 'http://127.0.0.1:5500/Menu/',
  },
];
const display = document.querySelector('.display');
const wrapper = document.querySelector('.wrapper');
const project = document.querySelectorAll('.projects__single');
const gotoProject = document.querySelector('.gotoProject');

let currentProjectSelected = '';
let img = document.createElement('img');
project.forEach(item =>
  item.addEventListener('click', () => {
    currentProjectSelected = images[Number(item.id)].href;
    img.src = images[Number(item.id)].src;
    display.appendChild(img);
    wrapper.style.display = 'initial';
  })
);

document.addEventListener('click', e => {
  if (wrapper.contains(e.target)) {
    display.removeChild(img);
    wrapper.style.display = 'none';
  }
});
gotoProject.addEventListener('click', e => {
  gotoProject.href = currentProjectSelected;
});
//projects End

const links = document.querySelectorAll('li');

links.forEach(link => {
  link.addEventListener('click', e => {
    if (e.target.dataset.scroll == '1') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else if (e.target.dataset.scroll == '2') {
      window.scroll({ top: 900, left: 0, behavior: 'smooth' });
    } else if (e.target.dataset.scroll == '3') {
      window.scroll({ top: 1600, left: 0, behavior: 'smooth' });
    }
  });
});
// return to top
const returnTop = document.querySelector('.return__top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    returnTop.style.display = 'inline';
  } else {
    returnTop.style.display = 'none';
  }
});

returnTop.addEventListener('click', () => {
  window.scroll({ top: 0, behavior: 'smooth' });
});

const langPicker = document.querySelector('.lang__picker');
const hideLangs = document.querySelector('.hide__langs');
const arrowRight = document.querySelector('.fa-caret-right');
const title = document.querySelector('.title');
const singleLang = document.querySelectorAll('.lang__single');
let open = false;
langPicker.addEventListener('click', () => {
  hideLangs.style.height = open ? '60px' : '0px';
  arrowRight.style.transform = open ? 'rotate(0deg)' : 'rotate(90deg)';
  console.log(open);
  open = !open;
});

singleLang.forEach(lang => {
  lang.addEventListener('click', e => {
    // console.log();
    if (e.target.dataset.lang == 'fr') {
      title.innerText = dataLanguage.fr.title;
    } else if (e.target.dataset.lang == 'ar') {
      title.innerText = dataLanguage.ar.title;
    }
  });
});

const dataLanguage = {
  fr: {
    title: 'bonjour !',
  },
  en: {
    title: 'hello hh !',
  },
  ar: {
    title: 'wach !',
  },
};
