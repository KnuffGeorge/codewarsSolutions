// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|


function matrixAddition(a, b){
    let sub = []
    let answer = []
    for (let i = 0; i < a.length; i++){
      sub = []
      for(let j = 0; j < b.length; j++){
        sub.push(a[i][j] + b[i][j])
      }
    answer.push(sub)
    }
    return answer
  }

//   You get an array of arrays.
//   If you sort the arrays by their length, you will see, that their length-values are consecutive.
//   But one array is missing!
  
  
//   You have to write a method, that return the length of the missing array.
  
//   Example:
//   [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
  
  
//   If the array of arrays is null/nil or empty, the method should return 0.
  
//   When an array in the array is null or empty, the method should return 0 too!
//   There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays) return 0
    let lengths = arrayOfArrays.map(x=> x ? x.length : 0).sort((a,b)=> a-b);
    if (lengths.includes(0)) return 0
    for (let i = 0; i< lengths.length; i++){
      if (lengths[i]+1 != lengths[i+1]){
        return lengths[i]+1
      }
    }return 0
  }

//   Story

// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!
// Kata Task

// How many deaf rats are there?
// Legend

//     P = The Pied Piper
//     O~ = Rat going left
//     ~O = Rat going right

// Example

//     ex1 ~O~O~O~O P has 0 deaf rats

//     ex2 P O~ O~ ~O O~ has 1 deaf rat

//     ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function(town) {
    town = [...town].filter(x=> x!=" ")
    let deafRats = 0
    for (let i = 0; i < town.length; i++){
      if(i % 2 == 1 && town[i] == "~") deafRats++
    }
  return deafRats
  
  }


//   In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

// More examples in the test cases. 

function pairs(ar){
    let count = 0
    for (let i = 0; i < ar.length; i+=2){
      if (ar[i+1] == ar[i]+1 || ar[i+1] == ar[i]-1) count++
    }
    return count
  };

//   You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

//     There are preloaded dictionary you can use, named NATO
//     The set of used punctuation is ,.!?.
//     Punctuation should be kept in your return string, but spaces should not.
//     Xray should not have a dash within.
//     Every word and punctuation mark should be seperated by a space ' '.
//     There should be no trailing whitespace

function to_nato(words) {
    let answer = ""
    let punc = ",.!?"
    for (let i = 0; i<words.length; i++){
      if(punc.includes(words[i])) answer += words[i] + " "
      else if (words[i] == " ") answer += ""
      else answer += NATO[words.toLowerCase()[i]] + " " 
    }
    return answer.trim()
  }


