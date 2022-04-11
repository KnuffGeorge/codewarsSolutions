// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first. 

function isPalindrome(line) {
    return line.toString().split('').reverse().join('') == line;
  }

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers

var cubeChecker = function(volume, side){
    return side > 0 ? (side ** 3) == volume : false
  };

//   Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

function any(arr, fun){
    return arr.filter(fun).length > 0 
  }

  // Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

  // You need to consider the following ratings:
  
  //     Terrible: tip 0%
  //     Poor: tip 5%
  //     Good: tip 10%
  //     Great: tip 15%
  //     Excellent: tip 20%
  
  // The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
  
  //     "Rating not recognised" in Javascript, Python and Ruby...

  function calculateTip(amount, rating) {
    let checkMe = rating.toLowerCase()
    switch (checkMe){
      case "terrible":
        return 0
      case "poor":
        return Math.ceil(amount * .05)
      case "good":
        return Math.ceil(amount * .1)
      case "great":
        return Math.ceil(amount * .15)
      case "excellent":
        return Math.ceil(amount * .2)
      default:
        return "Rating not recognised"
    }
    }

//     Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(x => vowels.includes(x)).length
}
