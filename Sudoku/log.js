const chalk = require('chalk');

module.exports = {
  logSudokuGrid: grid => {
    grid.forEach( (row, i) => {
      let line = `    |`;
      row.forEach( (cell, j) => {
        let number = '';
        if ( cell.isEmpty ) {
          cell.value === null ? number = chalk.bold('_') :  number = chalk.cyan.bold(cell.value);
        } else {
          number = chalk.yellowBright(cell.value);
        }
        line += ' ' + number + ' ';
        
        if ((j + 1) % 3 === 0) {
          line += ` | `;
        }
      });
      if (i % 3 === 0) {
        console.log(chalk.gray`    ____________________________________`);
      }
      console.log(chalk`    {gray |          |           |           |
${line}}`);
    });
    console.log(chalk.gray`    ____________________________________`);
  }
}
