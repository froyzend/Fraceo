import "./js/scroll.js";
import "./js/menu.js";
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
});
