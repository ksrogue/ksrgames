const body = document.querySelector("body");
const navBar = document.querySelector(".nav-bar");
const menuIcon = document.querySelector(".menu-icon");
const themeButton = document.querySelector(".theme-button");
const navButton = document.querySelector(".nav-button");

localStorage.setItem("theme", "light");

/* Menu Hamburger */
menuIcon.addEventListener("click", function openMenu() {
  navBar.classList.toggle("open-menu");
  if (navBar.classList.contains("open-menu")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  } else {
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
});

/* Switch Theme */
navButton.addEventListener("click", function switchTheme() {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeButton.classList.remove("bi-moon-fill");
    themeButton.classList.add("bi-brightness-high-fill");
  } else {
    themeButton.classList.remove("bi-brightness-high-fill");
    themeButton.classList.add("bi-moon-fill");
  }
});
