// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    let yearCount = 0  
    while (principal < desired){
      principal += (principal * interest) * (1 - tax)
      yearCount++
    }
  return yearCount
}

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    return !nums ? [] : nums.sort((a,b) => a - b)
  }

//   Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Have fun!

function oddOrEven(array) {
    return array.reduce((ac,el) => ac + el, 0) % 2 === 0 ? "even" : "odd" 
 }

//  Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// Examples:

// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.

function nbDig(n, d) {
    let k = []
    for(let i = 0; i <= n; i++){
      k[i] = i * i
    }
    return k.join('').split('').filter(x => x == d).length
}

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };
