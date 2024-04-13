let items = document.getElementsByClassName("ani")[0];
console.log("hello");
ScrollTrigger.create({
  trigger: "#ani",
  start: "top-300px top",
  endTrigger: "#ani2",
  end: "bottom bottom",
  onToggle: (self) =>
    self.isActive ? (items.style.scale = "1") : (items.style.scale = ".9"),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  },
});



// html script links

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script>
  let items = document.getElementsByClassName("ani")[0];
  console.log("hello");

  gsap.registerPlugin(ScrollTrigger);

  let viewport = document.querySelector(".viewport"),
    box = document.querySelector(".ani");

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: updateValues,
  });

  function updateValues() {
    if (ScrollTrigger.isInViewport(box)) {
      setTimeout(() => {
        ScrollTrigger.isInViewport(box)
          ? (items.style.scale = "1")
          : (items.style.scale = ".5");
      }, 500);
    } else {
      ScrollTrigger.isInViewport(box)
        ? (items.style.scale = "1")
        : (items.style.scale = ".5");
    }
  }
  updateValues();
</script>
