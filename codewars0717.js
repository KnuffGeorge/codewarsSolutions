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

//   Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

//   Don't round the numbers! Just cut them after two decimal places!

function twoDecimalPlaces(number) {
    let arr = number.toString().split('.')
    return Number(arr[0] + "." + arr[1].slice(0,2))
  }

//   Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

//   For example:
  
//   peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
//   peak([1,12,3,3,6,3,1]) = 2
//   peak([10,20,30,40]) = -1
  
function peak(arr){
    for (let i = 0; i < arr.length; i++){
      if (arr.reduce((ac,el,ind)=> ind < i ? ac + el : ac, 0) === arr.reduce((ac,el,ind)=> ind > i ? ac + el : ac, 0)){
      return i
    }
   }return -1
   }