const body = document.querySelector("body");
const navBar = document.querySelector(".nav-bar");
const menuIcon = document.querySelector(".menu-icon");
const themeButton = document.querySelector(".theme-button");
const navButton = document.querySelector(".nav-button");

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

  const isDark = body.classList.contains("dark-theme");

  themeButton.classList.toggle("bi-moon-fill", !isDark);
  themeButton.classList.toggle("bi-brightness-high-fill", isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


/* Save Theme State*/
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  console.log(savedTheme);
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeButton.classList.remove("bi-moon-fill");
    themeButton.classList.add("bi-brightness-high-fill");
    console.log("ta escuro");
  }
});
