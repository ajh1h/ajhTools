const checkbox = document.getElementById("checkbox");
const slider = document.getElementById("sizeSlider");

slider.addEventListener("input", function() {
  checkbox.style.width = this.value + "px";
  checkbox.style.height = this.value + "px";
});
