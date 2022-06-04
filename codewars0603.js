// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let answer = []
    for(let i = 0; i<str.length; i+=2){
    if (str[i+1] == undefined){
      answer.push(str[i] + "_")
    }else{
      answer.push(str[i] + str[i+1])
    }
    }
    return answer
  }


//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let arr = str.split(' ')
    return arr.map(x => punctuationCheck(x) ? x.slice(1) + x.slice(0,1) + "ay" : x =x).join(' ')
    
  function punctuationCheck(word){
      if (word.charCodeAt(0) < 65 || word.charCodeAt(0) > 122){
        return false
      }else{
        return true
      }
    }
  }