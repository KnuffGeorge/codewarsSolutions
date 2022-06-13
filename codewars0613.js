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