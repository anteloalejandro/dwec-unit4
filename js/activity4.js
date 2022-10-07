// Create an array and initialize the values to 0
let max_num = 10
let num_arr = []
for (let i = 0; i < max_num; i++) {
  num_arr[i] = 0
}

// Store the counts in the array
for (i = 0; i < 10000; i++) {
  let rand = parseInt(Math.random()*max_num) + 1
  num_arr[rand-1]++
}

// Print out the counts
for (let i = 0; i < num_arr.length; i++) {
  document.write('Nº'+(1+i)+': '+num_arr[i]+'<br>')
}