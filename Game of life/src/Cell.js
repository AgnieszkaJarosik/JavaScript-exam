import Position from "./Position";

class Cell {
  constructor(position, game) {
    this.position = position;
    this.game = game;
    this.neighbours = this.setNeighbours();
    this.width = 15;
    this.height = 15;
  }

  setNeighbours(){
    const neighbours = [];
    const { x, y } = this.position;

    for(let i=Math.max(x-1, 0); i<=Math.min(x+1, this.game.input.length-1); i++){
      for(let j=Math.max(y-1, 0); j<=Math.min(y+1, this.game.input[i].length-1); j++){
        if(x===i && y===j){ continue };
        neighbours.push(new Position(i, j));
      }
    }
    return neighbours;
  }

  setState(inputCopy){
    const liveNeighbours = this.checkNeighbours(inputCopy);
    if( this.game.input[this.position.x][this.position.y]==='0' && liveNeighbours===3) {
      this.game.input[this.position.x][this.position.y]='x';
    } else if (liveNeighbours<2 || liveNeighbours>3) {
      this.game.input[this.position.x][this.position.y]='0';
    }
  }

  checkNeighbours(board){
    let liveNeighbours = 0;
    this.neighbours.forEach( neighbour => board[neighbour.x][neighbour.y]==='x' && liveNeighbours++ );
    return liveNeighbours;
  }
}

export default Cell;