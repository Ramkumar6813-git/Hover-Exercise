document.addEventListener("scroll", function () {
  var content = document.getElementById("content");
  var contentPosition = content.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (contentPosition < screenPosition) {
    content.classList.add("revealed");
  } else {
    content.classList.remove("revealed");
  }
});
