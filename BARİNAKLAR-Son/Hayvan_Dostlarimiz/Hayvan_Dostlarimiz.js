var resim = document.querySelectorAll(".resim");
var active = document.querySelector(".active");
var acilirPencere = document.querySelector(".acilirPencere");
var X = document.querySelector(".X");

resim.forEach((element) => {
  element.addEventListener("click", function () {
    acilirPencere.classList.remove("active");
  });
});

X.addEventListener("click", function () {
  acilirPencere.classList.add("active");
});
