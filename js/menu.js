const menu = document.querySelector(".menu");
const ul = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  ul.classList.toggle("active");
  menu.classList.toggle("close");
});
