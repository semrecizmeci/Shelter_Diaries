var X = document.querySelector(".X");
var openWindowInfo = document.querySelector(".openWindowInfo");
var dostlarInfo = document.querySelectorAll(".dostlarInfo");
var istanbul = document.querySelector(".istanbul");
var btn = document.querySelector(".btn");
var dropdownItem = document.querySelectorAll(".dropdown-item");
var barinak1 = document.querySelector(".barinak1");
var barinak2 = document.querySelector(".barinak2");
var barinak3 = document.querySelector(".barinak3");
var barinak4 = document.querySelector(".barinak4");
var data = document.querySelectorAll(".data");
var infosBaslik = document.querySelector(".infosBaslik");
var animalCat = document.querySelectorAll(".animalCat");
var openWindowPictureCat = document.querySelector(".openWindowPictureCat");
var info1 = document.querySelector(".info1");
var info2 = document.querySelector(".info2");
var info3 = document.querySelector(".info3");
var info4 = document.querySelector(".info4");
var info5 = document.querySelector(".info5");

X.addEventListener("click", function () {
  openWindowInfo.classList.add("active");
});

dostlarInfo.forEach((item) => {
  item.addEventListener("click", function () {
    openWindowInfo.classList.remove("active");
  });
});

dropdownItem.forEach(function (e) {
  e.addEventListener("click", function () {
    btn.textContent = e.textContent;
    if (btn.textContent == "İstanbul") {
      barinak1.textContent = "İSTANBUL BARINAKLARI:";
      barinak2.textContent = "- İstanbul Şile Hayvan Barınağı";
      barinak3.textContent =
        "- Güngören Belediyesi Hayvan Toplama ve Kısırlaştırma Merkezi";
      barinak4.textContent = "- Hayvanlar İçin Merhamet Derneği";
      animalCat.forEach(function (img) {
        img.src = "tekirKedi.jpg";
        img.style.display = "inline-block";
      });
      openWindowPictureCat.src = "tekirKedi.jpg";
      openWindowPictureCat.style.display = "inline-block";
      info1.textContent = "İsmi: Kısmet";
      info2.textContent = "Yaşı: 2.5";
      info3.textContent = "Sağlık Durumu: Sağlıklı";
      info4.textContent = "Ne Zamandır Burada: 1 Yıl";
      info5.textContent = "Huyu: Sakin";
    } else if (btn.textContent == "İzmir") {
      barinak1.textContent = "İZMİR BARINAKLARI:";
      barinak2.textContent = "- Islak Burunlar Hayvanları Koruma Derneği";
      barinak3.textContent = "- Çesme Hayvan Barinagi";
      barinak4.textContent = "- Örnekköy Hayvan Barınağı";
      animalCat.forEach(function (img) {
        img.src = "SiyahBeyazKopek.jpg";
        img.style.display = "inline-block";
      });
      openWindowPictureCat.src = "SiyahBeyazKopek.jpg";
      openWindowPictureCat.style.display = "inline-block";
      info1.textContent = "İsmi: Melek";
      info2.textContent = "Yaşı: 2";
      info3.textContent = "Sağlık Durumu: Sağlıklı";
      info4.textContent = "Ne Zamandır Burada: 1.5 Yıl";
      info5.textContent = "Huyu: Oyuncu";
    }
  });
});

data.forEach(function (e) {
  e.addEventListener("click", function () {
    infosBaslik.textContent = e.textContent;
  });
});
