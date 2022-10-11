let user = password = ''
let valid = false

do {
 user = prompt('Username: ')
 if (user === null) throw new Error('Operation Canecelled')

 // RegExp.test(String) checks if the username matches this regular expresión
 // The regex '/^[0-9a-z]*$/' matches text composed exclusively numbers and lowecase letters
 let valid_user = /^[0-9a-z]*$/.test(user)
 if (!valid_user) {
  alert('This username is not valid')
  continue
 }

 password = prompt('Password: ')
 if (password === null) throw new Error('Operation Canecelled')

 let valid_passwd = 
 // Matches strings that contain at least one uppercase letter
 /^.*[A-Z].*$/.test(password) &&
 // Matches strings that contain at least one lowercase letter
 /^.*[a-z].*$/.test(password) &&
 // Matches strings that contain at least one number
 /^.*[0-9].*$/.test(password) &&
 // Matches strings that contain at least one character that isn't alphanumeric
 /^.*[^a-zA-Z0-9].*$/.test(password)
 if (!valid_passwd) {
  alert('This password is not valid')
  continue
 }



 // Break out of the loop when both the username and password are valid
 valid = valid_passwd && valid_passwd
} while (!valid)
alert('Valid username and password!')