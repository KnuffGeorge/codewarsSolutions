// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let set = Array.from(new Set(arr))
    for (let num of set){
      if (arr.indexOf(num) === arr.lastIndexOf(num)){
        return num
      }
    }
  }

//   Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//   Task
  
//   You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
  
//   Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
    if (n%2==0 || n<1) return null
    let diamond = ""
    for (let i = 1; i<=n; i+=2){
      diamond += (i==n ? "" : " ".repeat ((n-i)/2)) + "*".repeat(i) + "\n"
    }for (let i = n-2; i>=1; i-=2){
      diamond += " ".repeat((n-i)/2) + "*".repeat(i) +"\n"
    }
    return diamond
  }

//   Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
    let x = s.trim().length > 0 ? (Math.abs(+s) + "") : "false"
    return   !isNaN(+x) 
  }