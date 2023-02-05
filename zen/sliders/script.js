var slider = document.getElementById("sizeSlider");
var audio = new Audio("/audio/tick.mp3");

slider.addEventListener("input", function() {
  audio.currentTime = 0;
  audio.play();
});
