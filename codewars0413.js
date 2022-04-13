// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3 
// a includes [0,3] ,hence the function should return true

function isAllPossibilities(x){
    for (let i = 0; i < x.length; i++){
      if (!x.includes(i)){
        return false
      }
    }return x.length == 0 ? false : true
    }
    
// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7

// Do not modify the input list.

function longest(words) {
    return Math.max(...words.map(x => x.length))
  }

//   You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

//   Find max(abs(length(x) − length(y)))
  
//   If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//   Example:
  
//   a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
//   a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
//   mxdiflg(a1, a2) --> 13
  
//   Bash note:
  
//       input : 2 strings with substrings separated by ,
//       output: number as a string
  
function mxdiflg(a1, a2) {
    let a1Max = Math.max(...a1.map(x => x.length))
    let a1Min = Math.min(...a1.map(x => x.length))
    let a2Max = Math.max(...a2.map(x => x.length))
    let a2Min = Math.min(...a2.map(x => x.length))
    return a1.length == 0 || a2.length == 0 ? -1 : Math.max(a1Max - a2Min, a2Max - a1Min)
}