const body = document.querySelector("body");
const themeButton = document.querySelector(".theme-button");
const themeIcon = document.querySelector(".theme-icon");

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
    navBar.style.visibility = "visible";
    navBar.style.opacity = 1;
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  } else {
    navBar.style.visibility = "hidden";
    navBar.style.opacity = 0;
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
}
