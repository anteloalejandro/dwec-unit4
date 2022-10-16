function polyalphabetic_encrypt(text_to_encrypt, key) {
  text_to_encrypt = String(text_to_encrypt).toLowerCase()
  key = String(key)
  let encrypted_text = ''

  // Index of the key value
  let key_i = 0;
  for (let i = 0; i < text_to_encrypt.length; i++) {
    // If the key index is greater than its length, reset it to 0
    if (key_i >= key.length)
      key_i = 0
    
    // Add value of the number in the 'key_i' position of 'key'
    let char_num = text_to_encrypt.charCodeAt(i) + parseInt(key.charAt(key_i))

    // Generate and append the generated character
    encrypted_text += String.fromCodePoint(char_num)

    key_i++
  }
  return encrypted_text
}