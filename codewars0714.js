// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
  }

//   Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = []
    let bricks = "*" 
    for (let i = 1; i <= nFloors; i++){
      let spaces = (nFloors - i)
      tower.push(" ".repeat(spaces) + bricks + " ".repeat(spaces))
      bricks += "**"
    }return tower
  }

//   Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//   Rules for a smiling face:
  
//       Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//       A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//       Every smiling face must have a smiling mouth that should be marked with either ) or D
  
//   No additional characters are allowed except for those mentioned.
  
//   Valid smiley face examples: :) :D ;-D :~)
//   Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let validChars = {
      0: ":;",
      1: "~-)D",
      2: ")D"
    } 
    return arr.filter(x=>{
      for (let i=0; i<x.length;i++){
        if (!validChars[i].includes(x[i])){
          return false
        }
      }return true
    }).length
    
    }

    // Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

    // For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
    
    // The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
    
    // Based on: http://oj.leetcode.com/problems/two-sum/
    
    // twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

    function twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target && i != j) {
                    return [i, j];
                }
            }
        }
    }
    
