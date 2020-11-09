const boxes = document.querySelectorAll('.box');
const icons = document.querySelectorAll('i');
const result = document.querySelector('.result');
let player = 1;
let icon = 0;
let myArr = [1,2,3,4,5,6,7,8,9];
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        //console.log(1);
        if(player == 1){
            box.children[0].className = 'fas fa-times';
            player = 2;
        }
        else{
            box.children[0].className = 'far fa-circle';
            player = 1;
        }
        //box.appendChild(icon);
        
        for(let i = 0; i < boxes.length; i++){
            if(boxes[i].children[0].className == "fas fa-times"){
                myArr[i] = 'X';
            }
            else if(boxes[i].children[0].className == "far fa-circle"){
                myArr[i] = 'O';
            }
        }
        //console.log(boxes[0].children);
        for(let i = 0; i < myArr.length; i+=3){
            if(myArr[i]==myArr[i+1]&& myArr[i+1]==myArr[i+2]){
                result.innerHTML = 'You win!!!';
            }
            else if(myArr[i]==myArr[i+3]&& myArr[i+3]==myArr[i+6]){
                result.innerHTML = 'You win!!!';
            }
            else if(myArr[0]==myArr[4]&& myArr[4]==myArr[8]){
                result.innerHTML = 'You win!!!';
            }
            else if(myArr[2]==myArr[4]&& myArr[4]==myArr[6]){
                result.innerHTML = 'You win!!!';
            }
        }
        for(let i = 0; i < myArr.length; i++){
            if(myArr[i]==myArr[i+3]&& myArr[i+3]==myArr[i+6]){
                result.innerHTML = 'You win!!!';
            }
        }
        
    })

  


})























// const down = document.querySelector('.down');
// const snake = document.querySelector('.snake');

// down.addEventListener('click', (e)=>{
// left = e.offsetX;
// //snake.style.setProperty("--left", left.right + "px");
// //snake.style.animation = "snakeBotom 2s linear infinite";
// console.log(left);
// });

// // addEventListener('-')
// let num = 0;
// function main(){
//     console.log(num);
//     num++;
//     if(num < 300){
//         requestAnimationFrame(main);
//     }
// }
// //window.requestAnimationFrame(main);
// main();
