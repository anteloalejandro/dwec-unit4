// Create an array that behaves like a table and fill it with the boolean 'false'.
let board = new Array(10)
for (let i = 0; i < board.length; i++) 
  board[i] = new Array(10).fill(false)

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
      ships_inbetween = board[y+i*!is_horizontal][x+i*is_horizontal]
      console.log(`Colored tiles on the way?: ${ships_inbetween}`)
    }
    // Break out of the loop only if there are no ships in the way of this one.
  } while (ships_inbetween)
  for (let i = 0; i < s; i++) {
    // Run through the same tiles as in the previous check and set them to true.
    board[y+i*!is_horizontal][x+i*is_horizontal] = true
  }
}


// Color in black the cells in the HTML corresponding to the cells marked as 'true' in 'board'.
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    let td = document.querySelectorAll(`#row-${i+1}>#col-${j+1}`) 
    for (const cell of td) {
      if (board[i][j])
        cell.style.backgroundColor = '#000'
    }
  }
}