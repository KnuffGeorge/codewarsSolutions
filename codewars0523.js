// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let set = new Set(numbers)
    for (let num of set){
      if (numbers.filter(x=> x === num).length === 1){
        return num
      }
    }
    }

    // The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

    // The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
    
    // If the score < 0, return 0.
    
    // For example:
    
    // checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
    // checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
    // checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
    // checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
    
    function checkExam(array1, array2) {
        let score = array2.map((x,i) => x === array1[i] ? 4 : !x ? 0 :-1).reduce((ac,el) => ac + el, 0)
        return Math.max(score, 0)
      }   

    //   In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    //   If anything in the text isn't a letter, ignore it and don't return it.
      
    //   "a" = 1, "b" = 2, etc.
    //   Example
      
    //   alphabetPosition("The sunset sets at twelve o' clock.")
      
    //   Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) 
    
    function alphabetPosition(text) {
        let testText = text.toLowerCase().split('').filter(x => x.charCodeAt() > 96 && x.charCodeAt() < 123).join('') 
        let answer = ""
        for (let i = 0; i < testText.length; i++){
          answer += testText.charCodeAt(i) - 96 + ' ' 
        }
        return answer.slice(0,-1)
        }

//         Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let numbArr = number.toString().split('')
    if (number < 0){
      return numbArr.slice(1).reduce((ac, el) => ac + +el, 0)
    }
    return numbArr.reduce((ac,el) => ac + +el,0)
  }