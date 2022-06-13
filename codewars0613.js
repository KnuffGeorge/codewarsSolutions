// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not .

function jumpingNumber(n){
    let numString = n.toString()
    for (let i = 0; i < numString.length - 1; i++){
      if (numString[i+1] - numString[i] != 1 && numString[i+1] - numString[i] != -1){
        return "Not!!"
      }
    }return "Jumping!!"
  }

//   Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)

// should return

// [5.0, 10.0, 15.0]

function multiples(m, n){
    let answer = []
    for(let i = 1; i <= m; i++){
      answer.push(i * n)
    }return answer
  }

//   Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//   Task
  
//   Your task is to return a number from a string.  

var FilterString = function(value) {
    return +[...value].filter(x=> !isNaN(+x)).join('')
  }

//   Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

//   'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
  
//   Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
  
//   total1 = 656667
//                 ^
//   total2 = 656661
//                 ^
  
//   Then return the difference between the sum of the digits in total1 and total2:
  
//     (6 + 5 + 6 + 6 + 6 + 7)
//   - (6 + 5 + 6 + 6 + 6 + 1)
//   -------------------------
//                          6

function calc(x){
    return [...x].map((el,ind) => x.charCodeAt(ind)).join('').split('').filter(x=>x == 7).length * 6
    }
  