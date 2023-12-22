let eleArray = document.querySelectorAll(".div");
eleArray.forEach(function (element) {
  element.addEventListener("mouseover", function (e) {
    e.target.classList.add("opacity-value");
  });
});
eleArray.forEach(function (element) {
  element.addEventListener("mouseout", function (e) {
    e.target.classList.remove("opacity-value");
  });
});
