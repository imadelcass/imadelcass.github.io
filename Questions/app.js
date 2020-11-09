const msgs = document.querySelectorAll('.msg');

msgs.forEach( msg => {
    const btn = msg.querySelector('button');
    
    btn.addEventListener('click', () => {

        msgs.forEach((item) => {
            if(item == msg){
                console.log(msg);
            }
        })


        msg.classList.toggle('show-text');
    })
})

















// const btns = document.querySelectorAll('button');
// const para = document.querySelector('p');
// let count = 0;
// let x = 0;
// let y = 1;
// btns.forEach(btn => btn.addEventListener('click', (item) =>{
//     if(btn === item.currentTarget){
//         console.log(0);
//     }

// }))