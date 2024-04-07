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
