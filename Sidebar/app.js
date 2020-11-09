const burger = document.querySelector('.burger');
const aside = document.querySelector('.side-bar');
const h1 = document.querySelector('h1');
burger.addEventListener('click', ()=>{
    aside.style.display = 'list-item';
})
h1.addEventListener('click', () =>{
    aside.style.display = 'none';
})