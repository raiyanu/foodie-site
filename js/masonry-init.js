function masonry_init() {
  var grid = document.querySelector("main");
  var masonry = new Masonry(grid, {
    itemSelector: ".list",
    columnWidth: 10,
    gutter: 10,
    fitWidth: true,
  });
}
