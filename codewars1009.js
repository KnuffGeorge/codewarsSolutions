// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'

function tea42(input) {
    return [...input.toString()].map(x=> x == 2 ? "t" : x).join("")
  };

//   Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"
// Examples

// 1   -->  "mocha_missing!"
// 3   -->  "Java"
// 6   -->  "JavaScript"
// 12  -->  "CoffeeScript"

function caffeineBuzz(n){
    let str = ""
    if (n % 3 == 0){
      str = "Java"
    }if (n % 3 == 0 && n % 4 == 0){
      str = "Coffee"
    }if (str && n % 2 == 0){
      str += "Script"
    }if (!str) return "mocha_missing!"
    return str
    }