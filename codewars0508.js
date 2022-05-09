// Task

//     Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//     In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
//     Consider an Example :

// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

//     1 * (2 + 3) = 5
//     1 * 2 * 3 = 6
//     1 + 2 * 3 = 7
//     (1 + 2) * 3 = 9

// So the maximum value that you can obtain is 9.
// Notes

//     The numbers are always positive.
//     The numbers are in the range (1  ≤  a, b, c  ≤  10).
//     You can use the same operation more than once.
//     It's not necessary to place all the signs and brackets.
//     Repetition in numbers may occur .
//     You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    console.log(a,b,c)
    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
  }

//   Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    let arr = n.toString().split('')
    while (arr[arr.length-1] == 0){
    arr.pop()  
    }
      
    return +arr.join('')
    }

    // Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

    const getNumberFromString = (s) => +s.split('').filter(x => !isNaN(+x) && x != " ").join('')  