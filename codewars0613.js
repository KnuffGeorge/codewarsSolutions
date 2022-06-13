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