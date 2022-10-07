let num_arr = []
for (i = 0; i < 10000; i++) {
  let rand = parseInt(Math.random()*10) + 1
  arr_rand = num_arr[rand-1]
  num_arr[rand-1] = (isNaN(arr_rand) ? 0 : arr_rand) + 1
}

for (let i = 0; i < num_arr.length; i++) {
  document.write('Nº'+(1+i)+': '+num_arr[i]+'<br>')
}