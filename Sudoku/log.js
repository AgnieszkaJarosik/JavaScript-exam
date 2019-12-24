const chalk = require('chalk');

module.exports = {
  logSudokuGrid: grid => {
    grid.forEach( (row, i) => {
      let line = `    |`;
      row.forEach( (cell, j) => {
        line += ` ${cell.value===null ? '_' : cell.value} `;
        
        if ((j + 1) % 3 === 0) {
          line += ` | `;
        }
      });
      if (i % 3 === 0) {
        console.log(chalk.yellowBright`    ____________________________________`);
      }
      console.log(chalk`    {yellowBright |          |           |           |
${line}}`);
    });
    console.log(chalk.yellowBright`    ____________________________________`);
  }
}
