// JavaScript Document
// console.log("hello");
// var content = Array.from(document.querySelectorAll('.content'));
//
// var contentCount = myContent.length;
//
// var currentContent = 0;
//
// var previous = document.getElementById("previous");
// var next = document.getElementById("next");
//
// function removeAllActive(){
//   "use strict";
//   myContent.forEach(function (item) {
//     item.classList.remove('active-card', 'rotate-vert-center');
//   });
// }
//
// theChecker();
// //previous button checker
// function prevContent() {
//   "use strict";
//   if(previous.classList.contains('disabled')) {
//     // do nothing
//     return false;
//   } else {
//     currentContent--;
//     theChecker();
//   }
// }
//
// function nextContent() {
//   "use strict";
//   if(next.classList.contains('disabled')) {
//     // do nothing
//     return false;
//   } else {
//     currentContent++;
//     theChecker();
//   }
// }
//
// previous.onclick=prevContent;
// next.onclick=nextContent;
//
// function  theChecker(){
//   "use strict";
//   //remove all active
//      removeAllActive();
//   //set active class on current card
//   myContent[currentContent].classList.add('active-card', 'rotate-vert-center');}
var menu = document.getElementById("klik");

function klikken(){
  var lijst = document.getElementById("menu");
  lijst.classList.toggle("change");
}

klik.addEventListener("click", klikken);
