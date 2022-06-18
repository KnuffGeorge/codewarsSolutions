// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr)) 
  }

// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
// Example

// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

// The answer was obtained as 5 + 1 + 2 + 3 = 11.
// Input/Output

//     [input] integer array inputArray

//     Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

//     [output] an integer

function houseNumbersSum(inputArray) {
    return inputArray.reduce((ac,el,ind)=> ind < inputArray.indexOf(0) ? ac + el : ac)
      
      
    }

    // Given a non-negative integer, return an array / a list of the individual digits in order.

    // Examples:
    
    // 123 => [1,2,3]
    
    // 1 => [1]
    
    // 8675309 => [8,6,7,5,3,0,9]

    function digitize(n) {
        return n.toString().split('').map(x=> +x)
        }
    

        // The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

        // Example:
        
        // Split the below string into other strings of size #3
        
        // 'supercalifragilisticexpialidocious'
        
        // Will return a new string
        // 'sup erc ali fra gil ist ice xpi ali doc iou s'
        
        var splitInParts = function(s, partLength){
            let answer = ''
            for (let i = 0; i<s.length; i += partLength){
              answer += s.slice(i,i+partLength) + " "
            }
            return answer.slice(0,-1)
          }