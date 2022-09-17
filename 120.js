// intro to events;
// click;
// event add karne ke 3 tarike hai;
// 1.)

const btn = document.querySelector(".btn-headline");
// method ----------addEventListner
// function clickme(){
//   console.log("you clicked me!!!!!!!!!!!!!!!!!!!");
// }
//  btn.addEventListener("click", function(){
//     console.log("you clicked me!!!!!!!!!!!!!!");
// });

btn.addEventListener("click",()=>{
    console.log("arrow function!!!!!!!!!!!!!!")
});