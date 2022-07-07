// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testit(a,b){
    return Array.from(new Set(a)).concat(Array.from(new Set(b))).sort((a, b) => a - b);
  }

//   Given a positive integer N, return the largest integer k such that 3^k < N.

//   For example,
  
//   largest_power(3) == 0
//   largest_power(4) == 1
  
//   You may assume that the input to your function is always a positive integer.

function largestPower(n){
    let k = 0;
    while (3**k<n) {
      k++;
    }
    return k-1;
  }

//   I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//   Example
  
//   n = 3, so I expect a 3x3 square back just like below as a string:
  
//   +++
//   +++
//   +++
  
// Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

// sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);

// First, determine the average of each array. Then, return the sum of all the averages.

//     All numbers will be less than 100 and greater than -100.
//     arr will contain a maximum of 50 arrays.
//     After calculating all the averages, add them all together, then round down, as shown in the example below:

// The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

//     Calculate the average of each individual array:

//     [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
//     [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2

//     Add the average of each array together:

//     3 + 41.2 = 44.2

//     Round the final average down:

//     Math.floor(44.2) = 44

const sumAverage = (arr) => {  
    return Math.floor(arr.map(x=> x.reduce((ac,el)=> ac + el,0) / x.length).reduce((ac,el)=> ac + el, 0))
  }

//   In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

//   solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
//   solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
  
//   Input will be lowercase and uppercase letters only.
  
//   The first index a will always be lower that than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!
 
function solve(st,a,b){
    return st.slice(0, a) + st.slice(a , b + 1).split('').reverse().join('') + st.slice(b + 1);
}