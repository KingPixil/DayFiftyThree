var sentence = document.querySelector(".sentence");

document.addEventListener("mousemove", function(e) {
  xpos = e.layerX || e.offsetX;
  ypos = e.layerY || e.offsetY;

  var ax = -(window.innerWidth / 2 - xpos) / 20;
  var ay = (window.innerHeight / 2 - ypos) / 10;

  sentence.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
});
