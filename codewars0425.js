// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

function calculator(a,b,sign){
    let validSigns = "+-*/"
  if (typeof a != "number" || typeof b != "number" || !validSigns.includes(sign)){
    return "unknown value"
  }else{
    return eval(a + sign + b)
  }
  }

//   Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹


  function multiply(number){
    return number > 0 ? number * (5 ** number.toString().length) : number * (5 ** (number.toString().length - 1))
  }

//   What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    return str.split(' ').map(el => el + " " + el.length)
    }
  
    
    // An AI has infected a text with a character!!

    // This text is now fully mutated to this character.
    
    // If the text or the character are empty, return an empty string.
    // There will never be a case when both are empty as nothing is going on!!
    
    // Note: The character is a string of length 1 or an empty string.
    // Example
    
    // text before = "abc"
    // character   = "z"
    // text after  = "zzz"
    
    
    function contamination(text, char){
        if (!text || !char){
          return ""
        }else return text.split('').map(el => el = char).join('')
      }

//       It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }
