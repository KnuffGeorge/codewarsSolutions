// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
    let sorted = nums.sort((a, b) => a - b)
    for ( let i = 0; i <= sorted.length; i++){
      if (i != sorted[i]){
        return i;
    }
   }
  }

//   Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

//   Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
  
//   // simple examples
//   elevatorDistance([5,2,8]) = 9
//   elevatorDistance([1,2,3]) = 2
//   elevatorDistance([7,1,7,1]) = 18
  
//   // if two consecutive floors are the same,
//   //distance travelled between them is 0
//   elevatorDistance([3,3]) = 0
  
//   Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
function elevatorDistance(array) {
    return array.reduce((ac,el,ind)=> ind < array.length-1 ? ac + Math.abs(el - array[ind+1]) : ac, 0)
  }

//   Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

//   If n is not in the given array, return an empty array [].
  
//   Assume that n and all values in the given array will always be integers.
  
//   Example:
  
//   findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
    return array.map((x,i)=> x==n ? i : null).filter(x=> x!=null)
  }

//   In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

//   The result should be a string of numbers, separated by comma and space.

function arithmeticSequenceElements(a,r,n) {
    let value = a
    let answer = ""
    for(let i = 1; i<=n; i++){
      answer += value + ", "
      value += r 
    }return answer.slice(0,-2)
  }