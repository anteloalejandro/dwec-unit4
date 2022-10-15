let students_arr = [
  "Alejandro", "David", "Toni",
  "Edison", "Sandra", "Isabel",
  "Jaume", "Carlos", "Ricardo",
  "Vicent", "Joan", "Raúl",
  "Manel", "Juan"
]

let input = null
let data = []
let students = students_arr
{
  let i = 0
  do {
    // Add student only if its valid. If it isn't, tell the user why.
    // If the user types 'end', stop asking for users.
    input = prompt('Type a username')
    if(input === null) {
      break
    } else if (input === '') {
      alert('This username is not valid')
    } else if (input == 'end') {
      alert('Ok, grouping users...')
    } else if (students.includes(input)) {
      alert('This username exists already' )
    } else {
      students[i] = input
      i++
    }
  } while (input !== 'end');
}
{
  // Group counter.
  let grp_count = 0

  // The loop continues until there are less than 3 students left, and runs at least once.
  do {
    // Add students in threes (or less, if there are less than 3 students) to a temporary array.
    let grp_arr = []
    for (let i = 0; (i < 3) && (students.length >= 3); i++) {
      let rand = parseInt(Math.random() * students.length)
      // Splice removes values from the array that calls it, and returns the deleted data in array form.
      // Concat returns the concatenation of two arrays
      grp_arr = grp_arr.concat(students.splice(rand, 1))
    }
    // Copy said array as a row in 'data'. 'Data' will behave like a table.
    data[grp_count] = grp_arr.slice()
    // Increase the group counter.
    grp_count++
  } while (students.length >= 3)
}

// Loops until there are no more entries in 'students'.
while (students.length > 0) {
  let rand = NaN
  // Generate a random position in 'data' until said position points to a row with less than 4 cells.
  do {
    rand = parseInt(Math.random() * data.length)
  } while (data[rand].length >= 4)
  // Move an entry from 'students' to the aformentioned row in 'data'.
  data[rand] = data[rand].concat(students.splice(0, 1))
}

// Print groups
document.write('<table>')
for (let i = 0; i < data.length; i++) {
  let row = data[i]
    document.write(`<strong>Group ${i+1}</strong>`)
  for (const cell of row) {
    document.write(` | ${cell}`)
  }
  document.write('<hr>')
}
document.write('</table>')