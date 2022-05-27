// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    let answer = ""
    n < 0 ? answer += '-' : null
     return Number(answer + Math.abs(n).toString().split('').reverse().join(''))
  }

//   Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes

//     Array size is at least 1.
//     All numbers will be positive.

function rowWeights(array){
    let teamOne = array.reduce((ac,el,ind) => ind % 2 === 0 ? ac + el : ac,0)
    let teamTwo = array.reduce((ac,el,ind) => ind % 2 === 1 ? ac + el : ac,0)
    return [teamOne, teamTwo]
  }

//   Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
// Example: (Input1, Input2 --> Output)

// "a", 5 --> "aaaaa"

function repeater(string, n){
    return string.repeat(n)
  }


//   Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

function flattenAndSort(array) {
    let answer = []
    array.forEach(x => x.forEach(x => answer.push(x)))
    return answer.sort((a,b)=> a-b);
  }