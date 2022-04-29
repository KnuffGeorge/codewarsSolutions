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
    