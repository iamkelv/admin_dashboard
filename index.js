const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-button");
const close = document.querySelector("#close-btn");

menuButton.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

close.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
