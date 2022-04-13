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