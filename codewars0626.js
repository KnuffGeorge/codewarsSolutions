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

  