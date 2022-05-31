// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

function solve(arr){  
    return arr.map(x=> [...x].reduce((ac,el,ind)=> x.toLowerCase().charCodeAt(ind) - 96 === ind + 1 ? ac += 1 : ac += 0, 0))
    };

//     Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

//     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.
// Examples

// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

function isPowerOfTwo(n){
    for (let i = 0; i < 30; i++){
      if (2 ** i === n){
        return true
      }
    }return false
  }

//   Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// (Use the English alphabet with 26 letters!)

function findMissingLetter(array)
{
  for (let i = 1; i < array.length; i++){
    if (array[i].charCodeAt(0) - 2 === array[i-1].charCodeAt(0)){
      return String.fromCharCode(array[i].charCodeAt(0) - 1) 
    }
  }
}