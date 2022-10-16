// Create an Array with a size of 20 and fill it with random integers
let rand_arr = new Array(20)
for (let i = 0; i < rand_arr.length; i++) {
  rand_arr[i] = parseInt(Math.random()*50) + 1
}

// Iterate through the array and print the specified number of asterisks
for (rand of rand_arr) {
  for (let i = 0; i < rand; i++) {
    document.write('*')
  } 
  document.write('<br>')
}