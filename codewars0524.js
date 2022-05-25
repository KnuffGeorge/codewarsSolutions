
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    return word.split('').map((x,i)=> x === x.toUpperCase() ? x = i : null).filter(x => x != null)
    };

//     Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return +n.toString(2).split('').reduce((ac,el) => ac + +el, 0)
  };

//   Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
let oddCount = 0
let oddsSorted = array.map(x=> Math.abs(x) % 2 === 1 ? x = x : x = null).filter(x=> x != null).sort((a,b) => a-b)
let evens = array.map(x=> Math.abs(x)% 2 === 0 ? x = x : x = null)
for(let i = 0; i < evens.length; i++){
  if(evens[i] == null){
    evens[i] = oddsSorted[oddCount]
    oddCount++
  }
}
return evens
}
