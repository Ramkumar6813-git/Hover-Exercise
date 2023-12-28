let menuBar = document.getElementsByClassName("toggle-button")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];

menuBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
