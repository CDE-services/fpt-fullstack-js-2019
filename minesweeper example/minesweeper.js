// import {Clue, Mine, StateEnum} 
//     from 'minesweeper-core.js';

// ----- MODEL --------
const StateEnum = { OPEN: 1, CLOSED: 2, MARKED: 3 };
class Tile { constructor(state = StateEnum.CLOSED) { this.state = state; }}
class Mine extends Tile {}
class Clue extends Tile {
  constructor(value, state) {
    super(state);
    this.value = value;
  }
}
// ----- END MODEL ----------

let field = [];
let rowCount = 10, colCount = 10, mineCount = 10;

minesweeper();

function minesweeper() {
  initField();
  printField();
}

function printField() {
  let str = '  ';
  for(let index = 0; index < field[0].length; index++) {
    str += index + ' ';
  }
  str += '\n';

  // CLOSED: '-', MARKED: 'M', OPEN: '*' alebo cislo

  for(let row = 0; row < rowCount; row++) {
    str += String.fromCharCode(65 + row) + ' ';
    for(let col = 0; col < colCount; col++) {
      const tile = field[row][col];
      switch(tile.state) {
        case StateEnum.CLOSED: str += '-'; break;
        case StateEnum.MARKED: str += 'M'; break;
        default: str += (tile instanceof Mine 
                                ? '*' : 
                                tile.value);
      }
      str += ' ';
    }
    str += '\n';
  }
  console.log(str);
}

function initField() {
  field = [];
  field.length = rowCount;
  for(let row = 0; row < rowCount; row++) {
    field[row] = [];
    field[row].length = colCount;
  }

  let randomRow, randomCol;
  let pocetMin = 0;

  do {
    randomRow = Math.floor(Math.random() * rowCount);
    randomCol = Math.floor(Math.random() * colCount);
    
    if(!field[randomRow][randomCol]) {
      field[randomRow][randomCol] = new Mine();
      pocetMin++;
    }
  } while (pocetMin < mineCount);
  
  for(let row = 0; row < rowCount; row++) {
    for(let col = 0; col < colCount; col++) {
      if(!field[row][col]) {
        // todo: countAdjacentMines(row, col)
        // field[row][col] = new Clue(countAdjacentMines(row, col));
        field[row][col] = new Clue(0);
      }
    }
  }
}

function countAdjacentMines(row, col) {
  //return pocet min, ktore su okolo danej pozicie
  /*
  _ _ _
  * _ _
  _ * *
  ===> return 3
  */
}

//todo : implement openTile
//volajte to cez konzolu
function openTile(row, col) {
  // otvori dlazidu na pozicii row, col vo field - nastavi jej stav na OPEN
  // iba pokial jej stav bol predtym CLOSED
}

//todo: implement markTile
//volajte to cez konzolu
function markTile(row, col) {
  // markne dlazdicu ked je CLOSED
  // nastavi CLOSED, pokial bola predtym MARKED
}

// todo: openAdjacentTiles(row, col) -> 
// todo: later newGame, win hlaska, lose hlaska