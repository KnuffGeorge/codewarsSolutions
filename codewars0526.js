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