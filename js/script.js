const Close = document.querySelector(".close");
const Header = document.querySelector("header");
const menu = document.querySelector(".menu");
const Btn = document.querySelector(".navbar__textBtn");
Close.addEventListener("click", () => {
  Header.style.display = "none";
});
menu.addEventListener("click", () => {
  Btn.classList.toggle("block");
});
