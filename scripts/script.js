var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");


function hamburger() {
  navbar.classList.toggle("open")
  ham.classList.toggle("dicht")
}


ham.addEventListener("click", hamburger);
