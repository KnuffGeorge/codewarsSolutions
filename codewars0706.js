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
  
  
  