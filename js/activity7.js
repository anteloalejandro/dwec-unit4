function palindromes(text_in) {
  /*  Palindromes don't take into consideration:
      - Upperase/lowercase characters
      - Punctuation
      - Combined graphemes:
          Letters with punctuation are considered the same as what they would be without it
  */


  // Convert argument into a lowercase string, to ignore uppercase characters.
  text_in = String(text_in).toLowerCase()
  // Decompose combined graphemes into simple ones: á -> a'
  text_in = text_in.normalize("NFD")
  // Remove all non-alphanumeric characters, including the ones generated in the previous step
  text_in = text_in.replace(/[^0-9a-zñ]/g, '')

  // Create a new variable with an empty string
  let text_out = ''
  {
    let j = 0
    // Concatenate caracters from the original string in reverse order
    for (let i = text_in.length - 1; i >= 0; i--)
      // Concatenate caracters from the original string in reverse order
      text_out += text_in[i]
  }

  return text_in == text_out
}