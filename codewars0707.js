// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
// Examples:

// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function(date1, date2){
    return Math.abs(date1.split('/')[0] - date2.split('/')[0]);
  }

//   Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

// For example: 
// Given sum = 12 and gcd = 4...

// solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.

// solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.

// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].

function solve(s,g){
    for(let i = 1; i<s; i++){
      if (i % g == 0 & (s-i) % g == 0){
        return [i, s-i]
      }
    }return -1
}