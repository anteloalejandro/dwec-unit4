// Define and input variable to store input data.
let input = NaN
// This variable will be used to check if I need to print de average.
let show_avg = true
// 'sum' accumulates all the numbers .
let sum = 0
// Offset by 1 to account for the number 0. Counts how many numbers there are.
let count = -1

do {
  input = prompt('Type a number')
  // Triggers when the user presses cancel.
  if (input === null)  {
    show_avg = false
    continue
  }
  // Convert 'input' into a Number and check if its NaN.
  //  If it is, alert the user and go to the beginning of the loop.
  input = Number(input)
  if (isNaN(input)) {
    alert('Not a number. Try again!')
    continue
  }
  // Update 'sum' and 'count'.
  sum += input
  count++
  // Exit if the user types 0 or presses cancel.
} while (input !== 0 && show_avg);

// Show average if the user hasn't pressed cancel.
alert(show_avg? `Average: ${sum/count}` : 'Understandable, have a nice day' )