const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_MODE = "dark";
const LIGHT_MODE = "light";

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleThemeMode(LIGHT_MODE) {
  nav.style.backgroundColor = LIGHT_MODE
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = LIGHT_MODE
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = LIGHT_MODE ? "Light Mode" : "Dark Mode";
  LIGHT_MODE
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  LIGHT_MODE ? imageMode("light") : imageMode("dark");
}

function switchTheme(e) {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggleThemeMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleThemeMode("light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);
document.addEventListener("DOMContentLoaded", function setTheme() {
  let theme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", theme || "light");
  if (theme === "dark") {
    toggleSwitch.checked = true;
    toggleThemeMode(false);
  }
});
