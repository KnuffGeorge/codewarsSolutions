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
  