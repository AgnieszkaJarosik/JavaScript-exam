export function drawBall(ctx, x, y, fill){
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.closePath();
}

export function drawRectangle(ctx, x, y, width, height) {
  ctx.shadowColor = '#f2f2f2';
  ctx.shadowBlur = 1;
  ctx.lineJoin = 'bevel';
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#b3b3b3';
  ctx.strokeRect(x, y, width, height);
}

export function drawHexagon(ctx, x, y, fill) {
  const numberOfSides = 6;
  const size = 18;

  ctx.beginPath();
  ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));

  for(let i=1; i<=numberOfSides; i++) {
    ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  ctx.strokeStyle = fill;
  ctx.lineWidth = 1.2;
  ctx.stroke();
}
