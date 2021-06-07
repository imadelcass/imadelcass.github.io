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
    src: './img/project__moviestore.png',
    href: 'https://moviestore.vercel.app/',
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
let open = false;
const singleLang = document.querySelectorAll('.lang__single');
langPicker.addEventListener('click', () => {
  hideLangs.style.height = open ? '60px' : '0px';
  arrowRight.style.transform = open ? 'rotate(0deg)' : 'rotate(90deg)';
  console.log(open);
  open = !open;
});

const hello = document.querySelectorAll('.hello');
const name = document.querySelector('.name');
const field = document.querySelector('.field');
const contactTitle = document.querySelectorAll('.contact__title');
const exploreTitle = document.querySelector('.explore__title');
const projectsTitle = document.querySelector('.projects__title');
const para = document.querySelector('.para');

const flagIcon = document.querySelectorAll('.flag-icon');
// let classFlag = 'flag-icon-us';

singleLang.forEach(lang => {
  lang.addEventListener('click', e => {
    if (e.target.dataset.lang == 'fr') {
      flagIcon[0].classList.replace('flag-icon-us', 'flag-icon-fr');
      flagIcon[1].classList.replace('flag-icon-fr', 'flag-icon-us');
      e.target.dataset.lang = 'en';
      hello.forEach(name => (name.innerText = dataLanguage.fr.hello));
      name.innerText = dataLanguage.fr.name;
      field.innerText = dataLanguage.fr.field;
      contactTitle.forEach(
        name => (name.innerText = dataLanguage.fr.contactTitle)
      );
      exploreTitle.innerText = dataLanguage.fr.exploreTitle;
      projectsTitle.innerText = dataLanguage.fr.projectsTitle;
      para.innerText = dataLanguage.fr.para;
    } else if (e.target.dataset.lang == 'en') {
      flagIcon[0].classList.replace('flag-icon-fr', 'flag-icon-us');
      flagIcon[1].classList.replace('flag-icon-us', 'flag-icon-fr');
      e.target.dataset.lang = 'fr';

      hello.forEach(name => (name.innerText = dataLanguage.en.hello));
      name.innerText = dataLanguage.en.name;
      field.innerText = dataLanguage.en.field;
      contactTitle.forEach(
        name => (name.innerText = dataLanguage.en.contactTitle)
      );
      exploreTitle.innerText = dataLanguage.en.exploreTitle;
      projectsTitle.innerText = dataLanguage.en.projectsTitle;
      para.innerText = dataLanguage.en.para;
    }
  });
});
const dataLanguage = {
  fr: {
    hello: 'bonjour !',
    name: "Je m'appelle Imad Elcass",
    field: ' Développeur web',
    contactTitle: 'Contactez moi',
    exploreTitle: 'Explorer',
    projectsTitle: 'Projets',
    para: "je m'appelle imad elcass, je suis un développeur web. maintenent je suis étudient et je veux travailler dans ce domain. les technologie que j'utiliser est : ",
  },
  en: {
    hello: 'hello !',
    name: "I'm Imad Elcass",
    field: 'Web Developer',
    contactTitle: 'Contact me',
    exploreTitle: 'Explore',
    projectsTitle: 'projects',
    para: "I'm imad elcass web developer, currently i'm studing IT development.i want to work in this fields and especially web development.the technologie i use right now is : ",
  },
};
const langs = document.querySelector('.langs');
document.addEventListener('click', e => {
  if (open && !langs.contains(e.target) && !langPicker.contains(e.target)) {
    arrowRight.style.transform = 'rotate(0deg)';
    hideLangs.style.height = '60px';
    open = false;
  }
});
