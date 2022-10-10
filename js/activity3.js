// Create new array with a fixed size of 6 and fill it with a numeric value
let lottery = new Array(6)
lottery.fill(NaN)
// Iterate through array
for (i = 0; i < lottery.length; i++) {
  let exists, rand
  // Generate random number until it doesn't already exist in the array
  do {
    exists = true
    rand = parseInt(Math.random() * 49 + 1)
    for (j = 0; j < i; j++) {
      if (rand == lottery[j]) exists = false
    }
  } while (!exists)
  // Save valid random number
  lottery[i] = rand
}