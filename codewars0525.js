// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    return this.toString().split(' ').map(x => x.split('').map((x,i) => i == 0 ? x = x.toUpperCase() : x = x).join('')).join(' ')
    } 

    
    
    // As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

    //     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
        
    //     [1, 1 ,1, 3, 5, 9, 17, 31, ...]
        
    //     But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
        
    //     [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
        
    //     Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
        
    //     Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
        
    //     If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
    
function tribonacci(signature,n){
            let answer = []
        signature.forEach(x => answer.push(x))
        for(let i = 3; i<n; i++){
          answer.push(answer[i-1] + answer[i-2] + answer[i-3])
        }
        return answer.slice(0,n)
      }

    //   Task

    //   Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
    //   Notes
      
    //       Array/list will contain positives only .
    //       Array/list will always has even size
      
    //   Input >> Output Examples
      
    //   minSum({5,4,2,3}) ==> return (22) 
      
    //   Explanation:
      
    //       The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
      
    //   minSum({12,6,10,26,3,24}) ==> return (342)
      
    //   Explanation:
      
    //       The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
      
    //   minSum({9,2,8,7,5,4,0,6}) ==> return (74)
      
    //   Explanation:
      
    //       The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

    function minSum(arr) {
        let min = 0
        let max = 0
        let answer = []
        arr.sort((a,b)=> a - b)
        while (arr.length > 0){
          min = arr.pop()
          max = arr.shift()
          answer.push(min * max)
        }
        return answer.reduce((ac,el) => ac + el, 0)
      }

    //   Task

    //   Given a Divisor and a Bound , Find the largest integer N , Such That ,
    //   Conditions :
      
    //       N is divisible by divisor
      
    //       N is less than or equal to bound
      
    //       N is greater than 0.
      
    //   Notes
      
    //       The parameters (divisor, bound) passed to the function are only positive values .
    //       It's guaranteed that a divisor is Found .

    function maxMultiple(divisor, bound){
        return (bound - (bound % divisor))
      }
      

//       In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//       make as few changes as possible.
//       if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
  
//   For example:
  
//   solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//   solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//   solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){ 
    return s.split('').filter(x => x === x.toUpperCase()).length > s.split('').filter(x => x === x.toLowerCase()).length ? s.toUpperCase() : s.toLowerCase()
  }


  