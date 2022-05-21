// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ')
            .map(x => x = x.split('').reverse().join(''))
            .join(' ') 
  }


//   You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
    return arr.map((x, i) => (x == a || x == b) && (arr[i-1] == a || arr[i-1] == b)).includes(true)
    
  }
