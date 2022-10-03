// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    let numLength = strng.split("").reverse().findIndex(x=> isNaN(+x))  // convert the string to an array, reverse to search from right and find first element that is not a number
    let num = (+strng.slice(-numLength) + 1).toString() // slice the length of the number fromthe string, convert to number, add 1, convert back to string
    if (numLength == 0) return strng + "1" // if no numbers, add a 1 to to the string
    if (numLength == -1) return (+strng + 1).toString().padStart(strng.length, "0") // if no letters, add 1 to the original string, pad with zeroes to maintain length
    return strng.slice(0, -numLength) + num.padStart(numLength, "0") // return the string part minus the old number and the new number with the start padded
  }