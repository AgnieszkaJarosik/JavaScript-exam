class Square {
  constructor( value, posX, posY, isEmpty=true ) {
    this.value = value;
    this.posX = posX;
    this.posY = posY;
    this.isEmpty = isEmpty;
  }

  occurred = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  };

  readRow(grid) {
    grid[this.posY].forEach(cell => {
      const number = cell.value;
      if (number) {
        this.occurred[number] = true;
      }
    });
  }

  readColumn(grid) {
    grid.forEach(row => {
      const number = row[this.posX].value;
      if (number) {
        this.occurred[number] = true;
      }
    });
  }

  readSquare(grid) {
    const x = this.posX - (this.posX % 3);
    const y = this.posY - (this.posY % 3);

    grid.slice(y, y + 3).map(row => {
      row.slice(x, x + 3).map(cell => {
        const number = cell.value;
        if (number) {
          this.occurred[number] = true;
        }
      });
    });
  }

  checkValue(grid) {
    if (!this.value) {
      this.readRow(grid);
      this.readColumn(grid);
      this.readSquare(grid);

      const numbers = Object.keys(this.occurred).filter( number => !this.occurred[number] );

      if (numbers.length === 1) {
        this.value = Number(numbers[0]);
        return true;
      }
      return false;
    }
    return true;
  }
}

module.exports = {
  Square
};