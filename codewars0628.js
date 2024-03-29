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
//   ###Lucky number

//   Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
  
//   1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
  
//   Function will return true for lucky numbers and false for others.
function isLucky(n) {
    let sum = [...n.toString()].reduce((ac,el)=> ac + el, 0) 
    return sum === 0 || sum % 9 === 0
  } 

//   In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

//   For example:
  
//   solve([15,11,10,7,12]) = [15,7,12,10,11]
  
//   The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

function solve(arr){
    let answer = []
    let arr2 = []
    arr.forEach(x=> arr2.push(x))
    let min = arr.sort((a,b)=> a-b)
    let max = arr2.sort((a,b)=> b-a)
    for (let i = 0; i < arr.length/2; i++){
      answer.push(max[i])
      answer.push(min[i])
    }
    return answer.slice(0,arr.length)
};

// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

function spoonerize(words) {
    let arr = words.split(' ');
    return  arr[1].slice(0, 1) + arr[0].slice(1) + ' ' +  arr[0].slice(0, 1) + arr[1].slice(1);
}

// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

//     sum < 0
//     difference < 0
//     Either of the calculated ages come out to be negative

function getAges(sum,difference){
    let avg = sum/2
    let old = avg + difference/2
    let young = avg - difference/2
    if (sum < 0 || difference < 0 || old < 0 || young < 0){
      return null
    }
    return [old,young]
  };