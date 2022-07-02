// In your class, you have started lessons about "arithmetic progression". Because you are also a programmer, you have decided to write a function.

// This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element's position within the sequence.

// For example:

// arithmetic_sequence_sum(2, 3, 5) should return 40:

function ArithmeticSequenceSum(a, r, n) {
    let sum = a
    for(let i = 1; i < n; i++){
      sum += (r * i) + a
    }return sum
  }

//   Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

//   freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
//   freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
//   freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

function freqSeq(str, sep) {  
    return (str.split('').map((x,i,arr) => arr.filter(el => el == x).length).join(sep))
  }

//   Given a varying number of integer arguments, return the digits that are not present in any of them.

//   Example:
  
//   [12, 34, 56, 78]  =>  "09"
//   [2015, 8, 26]     =>  "3479"
  
//   Note: the digits in the resulting string should be sorted.

function unusedDigits(nums) {
    let str = Array.from(arguments).join('')
    let answer = ""
    for (let i = 0; i < 10; i++){
      !str.includes(i) ? answer += i : null
    }return answer
  }

//   Your job is to implement a function which returns the last D digits of an integer N as a list.
//   Special cases:
  
//       If D > (the number of digits of N), return all the digits.
//       If D <= 0, return an empty list.

function lastDigit(n, d) {
    let arr = n.toString().split('').map(x=>+x)
    return arr.length > d ? arr.slice(arr.length - d) : arr
  }
  
  