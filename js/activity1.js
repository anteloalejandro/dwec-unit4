function caesar_encrypt(text_to_encrypt, key) {
  text_to_encrypt = String(text_to_encrypt).toLowerCase()
  key = parseInt(key)
  let encrypted_text = ''
  // Difference between 'z' and 'a'
  let a_to_z = ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) +1 

  for (let i = 0; i < text_to_encrypt.length; i++) {
    let char_num = text_to_encrypt.charCodeAt(i)
    // Add key value only if its in the range of characters from 'a' to 'z'
    if (char_num >= 'a'.charCodeAt(0) && char_num <= 'z'.charCodeAt(0))
      char_num += key
    while (char_num > 'z'.charCodeAt(0)) {
      // Substract the difference to loop back to 'a' when the letter is greater than z
      char_num = char_num - a_to_z
    }
    let char = String.fromCodePoint(char_num)
    encrypted_text += char
  }
  return encrypted_text
}