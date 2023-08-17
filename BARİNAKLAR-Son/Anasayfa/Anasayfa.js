// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');

// navToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });

let icon = document.querySelector(".icon");
let navbardiv = document.querySelector(".navbardiv");
let active = document.querySelector(".active");
icon.addEventListener("click", () => {
  navbardiv.classList.toggle("active");
});
