import { drawBall } from "./utils";

class Ball {
  constructor(position, vector, board) {
    this.ctx = board.ballCanvas.getContext('2d');
    this.position = position;
    this.vector = vector;
    this.radius = 20;
    this.board = board;

    this.DrawBall();
  }

  DrawBall(){
    drawBall(this.ctx, this.position.y*this.board.widht+this.radius, this.position.x*this.board.height+this.radius, '#E62C2C');
  }

  Move() {
    let counter = 0;
    const { input } = this.board;
    let { x, y } = this.position;

    const game = setInterval(() => {
        if( input[x][y] === "Y" ) {
          this.HandleY(x, y);
        } else if( input[x+1][y] === "Y" ){
          this.HandleY(x+1, y);
        } else if( input[x-1][y] === "Y" ){
          this.HandleY(x-1, y);
        }

        if( input[x + this.vector.x][y + this.vector.y] === "X" ){
          if( input[x + this.vector.x][y] === "X" && input[x][y + this.vector.y] === "X" ){
            this.vector.x *= -1;
            this.vector.y *= -1;
          } else if( input[x + this.vector.x][y] === "X" ){
            this.vector.x *= -1;
          } else if( input[x][y + this.vector.y] === "X" ){
            this.vector.y *= -1;
          } else {
            const direction = Math.random();
            if(direction < 0.33){
              this.vector.x *= -1;
            } else if(direction > 0.33 && direction < 0.66){
              this.vector.y *= -1;
            } else {
              this.vector.x *= -1;
              this.vector.y *= -1;
            }
          }
        } else if( input[x + this.vector.x][y] === "X" ){
          this.vector.x *= -1;
        } else if( input[x][y + this.vector.y] === "X" ){
          this.vector.y *= -1;
        }

        this.drawMove(y*this.board.widht+this.radius, x*this.board.height+this.radius, this.vector.y*2, this.vector.x*2);

        x += this.vector.x;
        y += this.vector.y;

        counter++;
        if (counter >= 300) {
          clearInterval(game);
        }
    }, 200);
  }

  HandleY(x, y){
    this.vector.x = this.vector.x * (Math.random() > 0.5 ? 1 : -1);
    this.vector.y = this.vector.y * (Math.random() > 0.5 ? 1 : -1);
    this.board.input[x][y] = "0";
    this.board.ctx.clearRect(y*this.board.widht, x*this.board.height, this.board.widht-1, this.board.height-1);
  }

  drawMove(x, y, offsetX, offsetY){
    let counter = 0;
    const move = setInterval(() => {
      counter++;

      this.ctx.clearRect(0,0, this.board.ballCanvas.width, this.board.ballCanvas.height);
      drawBall(this.ctx, x, y, '#E62C2C');

      x += offsetX;
      y += offsetY;

      if(counter>=20) clearInterval(move);
    },10)
  }
}

export default Ball;
