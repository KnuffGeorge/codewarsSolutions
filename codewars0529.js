// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    return url.split('#')[0]
  }

//   Return an array containing the numbers from 1 to N, where N is the parametered value.

//   Replace certain values however if any of the following conditions are met:
  
//       If the value is a multiple of 3: use the value "Fizz" instead
//       If the value is a multiple of 5: use the value "Buzz" instead
//       If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
  
//   N will never be less than 1.
  
//   Method calling example:
  
//   fizzbuzz(3) -->  [1, 2, "Fizz"]
  
function fizzbuzz(n)
{
  let answer = []
  for(let i = 1; i <=n; i++){
  answer.push(i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? "Buzz" : i)  
  }return answer
}

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
    return array.filter(x=> x % 2 === 0).slice(-number)
  }

//   Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()}!`
    };


    Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes

//     Array/list size is at least 2.

//     Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples

// adjacentElementsProduct([1, 2, 3]); ==> return 6

// Explanation:

//     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

//     adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

//     Explanation:

// Max product obtained from multiplying 5 * 10 = 50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

// Explanation:

//     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

    function adjacentElementsProduct(array) {
        let answerArr = array.map((x,i) => i < array.length - 1 ? array[i] * array[i+1] : x=0).slice(0,-1)
        return Math.max(...answerArr)
      }

