const { Square } = require("./Square");
const { sudoku } = require("./sudokuCard");
const { logSudokuGrid } = require("./log");

const initSudokuGrid = arr => {
  return arr.map((row, indexY) => {
    return row.map((cell, indexX) => {
      if( cell ) {
        return new Square(cell, indexX, indexY, false);
      } else {
        return new Square(cell, indexX, indexY);
      }
    });
  });
};

let sudokuGrid = initSudokuGrid(sudoku);

logSudokuGrid(sudokuGrid);

const solveSudoku = (grid => {
  let endCondition = false;

  while (!endCondition) {
    endCondition = true;
    grid.map(row => {
      row.map(cell => {
        let allValues = cell.checkValue(grid);
        if (allValues === false) {
          endCondition = false;
        }
      });
    });
  }

})(sudokuGrid);

console.log(`\n SOLVED SUDOKU`);
logSudokuGrid(sudokuGrid);