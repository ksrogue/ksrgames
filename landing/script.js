const body = document.querySelector("body");
const themeButton = document.querySelector(".theme-button");
const themeStyle = document.querySelector(".theme-style");

function changeTheme() {
    body.classList.toggle("dark-theme");
    themeStyle.innerHTML = "Light";
}