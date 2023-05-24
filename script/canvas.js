const canvas = document.getElementById('grafikaJS');
const ctx = canvas.getContext('2d');

const p = {
  x: 25,
  y: 25
};
let velo = 3;
let rad = 20;

const ball = {
  x: p.x,
  y: p.y
};

let moveX = Math.cos(Math.PI / 180 * 50) * velo;
let moveY = Math.sin(Math.PI / 180 * 50) * velo;

const DrawMe = () => {
  ctx.clearRect(0, 0, 400, 300);

  if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
  if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;

  ball.x += moveX;
  ball.y += moveY;

  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}

setInterval(DrawMe, 10);

// Slider event listeners
const veloSlider = document.getElementById('veloSlider');
const radSlider = document.getElementById('radSlider');

veloSlider.addEventListener('input', () => {
  velo = parseInt(veloSlider.value);
  moveX = Math.cos(Math.PI / 180 * 50) * velo;
  moveY = Math.sin(Math.PI / 180 * 50) * velo;
});

radSlider.addEventListener('input', () => {
  rad = parseInt(radSlider.value);
});
