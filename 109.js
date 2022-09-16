// loop;

// get multiple elements using getElements by class name;






// const navItems = document.getElementsByClassName("nav-item");// HTML collection;
// console.log(typeof navItems[0]);


// get multiple elements items using querySelectorAll;
// const navItems= document.querySelectorAll(".nav-item");
// console.log(navItems[1]);
// array like object---> indexing, length property
const navItems = document.getElementsByTagName("a");
// console.log(navItems.length);
// we can't use foreach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach


// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem= navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold";
// }






