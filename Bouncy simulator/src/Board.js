import Ball from "./Ball";
import Position from "./Position";
import Vector from "./Vector";
import { drawHexagon, drawRectangle } from "./utils";

class Board {
  constructor(board, canvas, ballCanvas) {
    this.input = board;
    this.canvas = canvas;
    this.ballCanvas = ballCanvas;
    this.ctx = this.canvas.getContext('2d');
    this.ball = null;
    this.widht = 40;
    this.height = 40;

    this.canvas.width = this.input[0].length*this.widht;
    this.canvas.height = this.input.length*this.height;
    this.ballCanvas.width = this.input[0].length*this.height;
    this.ballCanvas.height = this.input.length*this.widht;
  }

  initView(){
    for(let i=0; i<this.input.length; i++){
      for(let j=0; j<this.input[i].length; j++){
        if(this.input[i][j]==="X"){
            this.ctx.fillStyle = '#e6e6e6';
            this.ctx.fillRect(j*this.widht, i*this.height, this.widht, this.height);
            drawRectangle(this.ctx, j*this.widht, i*this.height, this.widht-2, this.height-2);
        } else if(this.input[i][j]==="1"){
            this.input[i][j]="0";
            this.ball = new Ball(new Position(i, j), new Vector(1, 1), this);
        } else if(this.input[i][j]==="Y"){
            drawHexagon(this.ctx, j*this.widht+20, i*this.height+20, '#E6C243');
        }
      }
    }
  }

  startBall(){
    this.ball.Move();
  }
}

export default Board;
