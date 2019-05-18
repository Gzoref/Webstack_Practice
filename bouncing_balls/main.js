const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

let mouseX = 0;
let mouseY = 0;

addEventListener('mousemove', function () {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

let gravity = 0.99;
c.strokeWidth = 5;

function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}
