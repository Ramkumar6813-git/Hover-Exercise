var colors = ["blue", "orange", "red", "yellow"];

let eleArray = document.querySelectorAll(".div");
for (let i = 0; i < 9; i++) {
  eleArray[i].style.backgroundColor = colors[0];
}

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

function onClickChangeBgColor(className) {
  let randomNum = Math.floor(Math.random() * 4);
  for (let i = 0; i < 9; i++) {
    eleArray[i].style.backgroundColor = colors[randomNum];
  }
}
