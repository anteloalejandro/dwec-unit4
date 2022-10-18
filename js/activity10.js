// Create an array that behaves like a table and fill it with the number 0.
/*Cells in the table will have one of three values:
  - 0: This space in not occupied.
  - 1: This space is occupied.
  - -1: There is an occupied space in an adyacent cell.
*/
let board = new Array(10)
for (let i = 0; i < board.length; i++) 
  board[i] = new Array(10).fill(0)

// Create a list of length of ships to be drawn and iterate through it.
let ships = [4, 3, 3, 3, 2, 2, 2, 1, 1]
for (const s of ships) {
  let ships_inbetween, is_horizontal, y, x = null
  do {
    ships_inbetween = false
    // Randomly chose a horizontal or vertical orientation for the ship
    is_horizontal = !!parseInt(Math.random()*2)
    /*Generate a random X and Y coordinate taking this into acount: 
      - If the orientation is not horizontal, the length of the ship should be substracted from
        the maximum value on the X axis so the ship doesn't overflow,
        but the maximum value of Y should correspond to the last row.
      - Likewise, if the orientation is not vertical, the length of the ship should be substracted
        from the maximun value on the X axis, but not from the maximum value on the other axis.
    */
    y = parseInt(Math.random()*(board.length-(s-1)*!is_horizontal))
    x = parseInt(Math.random()*(board[0].length-(s-1)*is_horizontal))
    console.log(x, y, s, board, is_horizontal)
    
    // Check if there are any ships within the range of tiles this ship would be placed on.
    for (let i = 0; i < s && !ships_inbetween; i++) {
      // By multiplying by a boolean value and its negative, the check only moves in one axis.
      let coord_y = y+i*!is_horizontal
      let coord_x = x+i*is_horizontal
      // If the value of this cell is not zero, we cannot place a ship through here.
      ships_inbetween = board[coord_y][coord_x] != 0
      console.log(`Colored tiles on the way?: ${ships_inbetween}`)
    }
    // Break out of the loop only if there are no ships in the way of this one.
  } while (ships_inbetween)

  // Run through the tiles adyacent to the ones of the previous check and set them to -1.
  for (let i = 0; i < s; i++) {
    let coord_y = y+i*!is_horizontal
    let coord_x = x+i*is_horizontal
    let before_y = coord_y>0 ? coord_y-1 : coord_y
    let before_x = coord_x>0 ? coord_x-1 : coord_x
    let after_y = coord_y<9 ? coord_y+1 : coord_y
    let after_x = coord_x<9 ? coord_x+1 : coord_x

    for (let row = before_y; row <= after_y; row++) {
      for (let cell = before_x; cell <= after_x; cell++) {
        board[row][cell] = -1
      }
    }
  }
  // Run through the tiles in the previous check and set them to 1.
  for (let i = 0; i < s; i++) {
    let coord_y = y+i*!is_horizontal
    let coord_x = x+i*is_horizontal

    board[coord_y][coord_x] = 1
  }
  console.log(s)
}


// Color in black the cells in the HTML corresponding to the cells with a value of 1.
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    let td = document.querySelectorAll(`#row-${i+1}>#col-${j+1}`) 
    for (const cell of td) {
      if (board[i][j] == 1)
        cell.style.backgroundColor = '#000'
      else if (board[i][j] == -1)
        cell.style.backgroundColor = '#ccc'
    }
  }
}