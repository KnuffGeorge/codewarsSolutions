// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function bandNameGenerator(str) {
    return str.slice(0,1) === str.slice(-1) ? str.slice(0,1).toUpperCase() + str.slice(1,-1) + str.toLowerCase() : "The " + str.slice(0,1).toUpperCase() + str.slice(1)
   }

//    Create a function called one that accepts two params:

//    a sequence
//    a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

function one(arr, fun){
    return arr.filter(x => fun(x)).length === 1;
  }

//   Bob is a lazy man.

//   He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
  
//   Example:
  
//   "hel2!lo" --> 6
  
//   "wicked .. !" --> 6
  
//   "!?..A" --> 1

function countLettersAndDigits(input) {
    return [...input.toUpperCase()].filter(x=> x.charCodeAt() >= 65 && x.charCodeAt() <= 90 || x.charCodeAt() >= 48 && x.charCodeAt() <= 57).length;
  }

//   Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.split('').map((x => x===x.toUpperCase()? " "+x: x)).join('');
}

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data)
{let value = 0
let answer = []
data.split('').forEach(x=> x == "i" ? value++ : x == "d" ? value-- : x == "s" ? value *= value : x == "o" ? answer.push(value) : null)
return answer
}

// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
// The Challenge

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

function findScreenHeight(width, ratio) {
    let height = ratio.split(':')[1]/ratio.split(':')[0] * width
    return `${width}x${height}`
}

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.
// Example

// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// How many times do the elements in array2 appear in array1?

//     'abc' appears twice in the first array (2)
//     'cde' appears only once (1)
//     'uap' does not appear in the first array (0)

// Therefore, solve(array1, array2) = [2, 1, 0]

function solve(a,b){
    return b.map(x => a.filter(y => y == x).length);
  }

//   Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    if (numbers.length === 0) return 0
    return (numbers.reduce((ac,el,ind)=> ind % 2 == 0 ? ac + el : ac,0) * numbers[numbers.length-1])
  }

//   Your task, is to create NxN multiplication table, of size provided in parameter.

//   for example, when given size is 3:
  
//   1 2 3
//   2 4 6
//   3 6 9

multiplicationTable = function(size) {
    let answer = []
    let arr = []
    for (let i = 1; i<=size; i++){
        arr = []
      for(let j = 1; j<=size; j++){
        arr.push(j*i)
      }answer.push(arr)
    }return answer
  }

//   Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

//   Note: no empty arrays will be given.
//   Examples
  
//   [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//   [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//   [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
  
function highestRank(arr){
    let set = Array.from(new Set(arr))
    return set.sort((a,b)=> arr.filter(x=>x===b).length - arr.filter(x=>x===a).length)[0]
    }

    // Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

    // For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

    function covfefe(str){
        return str.includes('coverage') ? str.split('coverage').join('covfefe') :
        str + ' covfefe';
      }