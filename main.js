function highlight(content) {
  let item = document.getElementById(content);
  item.classList.add("highlight");
  setTimeout(() => {
    item.classList.remove("highlight");
  }, 500);

  setTimeout(() => {
    var currentPosition = window.scrollY || document.documentElement.scrollTop;
    var newPosition = currentPosition + -100;
    window.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
  }, 100);
}
window.addEventListener("scroll", function () {
  var stickyElement = document.getElementById("section_nav");
  var threshold = 300; // Adjust the threshold as needed

  // Check if the scroll position is beyond the threshold
  if (window.scrollY > threshold) {
    stickyElement.classList.add("move");
  } else {
    stickyElement.classList.remove("move");
  }
});
