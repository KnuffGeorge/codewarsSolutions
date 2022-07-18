// Define a method/function that removes from a given array of integers all the values contained in a second array.
// Examples (input -> output):

// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(x=> !values_list.includes(x))
  
  }

//   One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

//   Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
  
//       instead of including i or I put the number 1 in the password;
//       instead of including o or O put the number 0 in the password;
//       instead of including s or S put the number 5 in the password.

function makePassword(phrase) {
    return phrase.split(' ').map(x=> x[0] == "i" || x[0] == "I" ? "1" : x[0] == "o" || x[0] == "O" ? "0" : x[0] == "s" || x[0] == "S" ? 5 : x[0]).join('')
  }