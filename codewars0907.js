// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }

//     returns true  / True if every element in an array is an integer or a float with no decimals.
//     returns true  / True if array is empty.
//     returns false / False for every other input.

function isIntArray(arr) {
    if (!arr) return false
    if (arr.length == 0) return true
    return arr.every(x=>!isNaN(+x) && x === parseInt(x))
  }