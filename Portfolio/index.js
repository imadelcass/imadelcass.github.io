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

// scroll to specifique area
// const linkHome = document.querySelector('.link__home');
// const linkProjects = document.querySelector('.link__projects');
// const linkContact = document.querySelector('.link__contact');
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
