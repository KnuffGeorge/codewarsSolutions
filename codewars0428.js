// n Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let arr = string.split('')
    console.log(arr[arr.length-1])
    while (arr[arr.length-1] == '!'){
      if (arr[arr.length-1] == '!'){
        arr.pop()
    }
    }
    return arr.join('')
    }

// Your Job
    // Find the sum of all multiples of n below m
    // Keep in Mind
    
    //     n and m are natural numbers (positive integers)
    //     m is excluded from the multiples
    
    // Examples
    
    // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
    // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
    // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
    // sumMul(4, -7)  ==> "INVALID"

    function sumMul(n,m){
        let sum = 0
      if (n <= 0 || m <= 0 || n > m){
        return "INVALID"
      }else{
       for (let i = n; i < m; i+=n){
         sum += i
       }
      }return sum
      }
    

//Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

      function countPositivesSumNegatives(input) {
        if (!input || input == []) {
          return []
        }
        let posArray = input.filter(x => x > 0) 
        let negArray = input.filter(x => x < 0) 
        let answer = []
        answer.push(posArray.length) 
        answer.push(negArray.reduce((x,y) => x + y,0))
        return answer.reduce((acc, c) => acc + c) == 0 ? [] : answer 
      }

    //   Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
      function squareArea(A){
        let answer =  Number((((A * 4) / (2 * Math.PI)) ** 2).toFixed(2))
        return answer
        }

