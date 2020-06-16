import Cell from "./Cell";
import Position from "./Position";

class Game {
  constructor(input, canvas) {
    this.input = input;
    this.board = this.initCells();
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.interval = null;

    this.canvas.width = this.input[0].length*this.board[0].width;
    this.canvas.height = this.input.length*this.board[0].height;

    this.playGame = this.playGame.bind(this);
  }

  initCells(){
    const table = [];
    for(let i=0; i<this.input.length; i++){
      for(let j=0; j<this.input[0].length; j++){
        table.push(new Cell(new Position(i, j), this));
      }
    }
    return table;
  }

  playGame(){
    this.interval = setInterval(() => {
      const inputCopy = this.input.map( row => row.slice() );
      this.board.forEach( cell => cell.setState(inputCopy) );
      this.draw();
    }, 200);
  }

  stopGame(){
    clearInterval(this.interval);
  }

  draw(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    this.board.forEach( cell => {
      if(this.input[cell.position.x][cell.position.y]==='x'){
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(cell.position.y*cell.width, cell.position.x*cell.height, cell.width, cell.height);
        this.ctx.strokeStyle = 'rgb(204, 204, 255)';
        this.ctx.strokeRect(cell.position.y*cell.width, cell.position.x*cell.height, cell.width, cell.height);
       }
       else {
         this.ctx.strokeStyle = 'rgb(204, 204, 255)';
         this.ctx.strokeRect(cell.position.y*cell.width, cell.position.x*cell.height, cell.width, cell.height);
      }
    })
  }
}

export default Game;
