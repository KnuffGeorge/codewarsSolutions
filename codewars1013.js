// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore

function alphanumeric(string){
    if (string.trim().length < 1 || !string) return false
    if ([...string].filter(x=> x == " " || x == "_").length > 0) return false
    return [...string.toLowerCase()].every(x=> !isNaN(+x) || (x.charCodeAt() > 95 && x.charCodeAt() < 123)) 
  }