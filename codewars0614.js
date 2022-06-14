// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
    return x.length > 5 ? 'Escaped!' : 'Caught!';
  }


//   You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

//   Note:Returning the pattern is not the same as Printing the pattern.

// Rules/Note:

//   If n < 1 then it should return "" i.e. empty string.
//   There are no whitespaces in the pattern.

// Pattern:

// 1
// 22
// 333
// ....
// .....
// nnnnnn

function pattern(n){
    let output="";
    let value = 0
  for (let i = 1; i <= n; i++){
     value = i.toString()
     output += value.repeat(i)
     if (i < n){
       output += "\n"
     }
     }
     return output;
  }

//   Definition

// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Task

// Given a number determine if it Automorphic or not .

function automorphic(n){
    return (n * n).toString().endsWith(n) ? 'Automorphic' : 'Not!!'
  }


//   The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
    let vowels = "aeiou"
    let lengthArr = [...s].map(x=> vowels.includes(x) ? x : "X").join('').split('X').map(x=> x.length)
    return Math.max(...lengthArr)
   }

//    Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
// Examples

// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

function hydrate(s) {
    let num = [...s].filter(x=>!isNaN(+x)).reduce((ac,el)=> ac + +el, 0) 
     return num + (num === 1 ? " glass of water" : " glasses of water")
  }

//   Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

function explode(s) {
    let answer = ""
    s.split('').forEach(x=> answer += x.repeat(+x))
    return answer
  }
