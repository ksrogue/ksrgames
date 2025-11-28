const body = document.querySelector("body");
const themeButton = document.querySelector(".theme-button");
const themeIcon = document.querySelector(".theme-icon");
const seeMoreBtn = document.querySelector(".game-details");
const descTexts = document.querySelectorAll(".game-desc");
const listItem = document.querySelectorAll(".list-item");


function changeTheme() {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-sun-fill");
  } else {
    themeIcon.classList.remove("bi-sun-fill");
    themeIcon.classList.add("bi-moon-fill");
  }
}

function openMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navBar = document.querySelector(".nav-bar");

  menuIcon.classList.toggle("open");

  if (menuIcon.classList.contains("open")) {
    navBar.style.display = "flex";
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  } else {
    navBar.style.display = "none";
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
}

function seeMore() {
  for (let i = 1; i < descTexts.length; i++) {
    descTexts[i].classList.toggle("hidden");
  }
  descTexts[1].classList.contains("hidden")
    ? (seeMoreBtn.innerHTML = "Ver Mais")
    : (seeMoreBtn.innerHTML = "Ver Menos");
}

function selectItem(item) {
  let gameName = document.querySelector(".game-name");
  let gameImage = document.querySelector(".game-img");

  listItem[item].classList.add("item-selected");
  for (let i = 0; i < listItem.length; i++) {
    if (i !== item) {
      listItem[i].classList.remove("item-selected");
    }
  }
  switch (item) {
    case 0:
      gameName.innerHTML = "Chrono Blades";
      gameImage.src = "assets/chrono-blades-img.png";
      break;
    case 1:
      gameName.innerHTML = "Starfall Racers";
      gameImage.src = "assets/starfall-racers-img.jpg";
      break;
    case 2:
      gameName.innerHTML = "Forest Spirits";
      gameImage.src = "assets/mystic-valley-img.jpg";
      break;
  }
}
