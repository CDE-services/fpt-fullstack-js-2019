const OPEN = "open";
const MARKED = "marked";
const CLOSED = "closed";

let field = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
minesweeper();

function minesweeper() {
  printField();
}

function printField() {
  let str = '  ';
  for(let index = 0; index < field[0].length; index++) {
    str += index;
  }
  str += '\n';

  for(let row = 0; row < field.length; row++) {
    str += String.fromCharCode(65 + row) + ' ';
    for(let col = 0; col < field[row].length; col++) {
      str += field[row][col];
    }
    str += '\n';
  }
  console.log(str);
}

function initField() {
  // najprv rozhadzete nahodne miny
  //nahodny riadok a stlpec:
     //Math.random(9);
  // do zvysku dajte Clue s hodnotou 0
  // vypiste pole v tomto tvare
  //field[x][y] = new Clue(0);
  //field[y][z] = new Mine();
  /*
    0 1 2 3 4 5 6 7 8 9
  A 0 0 0 * 0 0 0 0 0 0
  B 0 0 0 0 0 0 * 0 0 0
  C 0 * 0 0 0 0 0 0 0 0
  D 0 0 0 * 0 0 0 0 0 0
  E 0 0 0 * 0 0 0 0 0 0
  F 0 0 0 0 0 0 0 * 0 0
  G 0 0 0 * 0 0 0 0 0 0
  H 0 0 0 0 0 0 0 0 0 0
  I 0 0 0 * 0 0 0 * 0 0
  J 0 0 0 0 0 0 0 0 0 0
  */
}