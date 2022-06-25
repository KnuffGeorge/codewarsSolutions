// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    let sum = ""
    let str1 = num1.toString()
    let str2 = num2.toString()
    let maxLength = Math.max(str1.length,str2.length)
    let pad1 = str1.padStart(maxLength,"0")
    let pad2 = str2.padStart(maxLength,"0")
    for (let i = 0; i < maxLength; i++){
      sum += +pad1[i] + +pad2[i]
    }
   return +sum
 }

//  The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

//  For example:
 
//  countChar("fizzbuzz","z") => 4
//  countChar("Fancy fifth fly aloof","f") => 5
 
//  The character can be any alphanumeric character. 

function countChar(string, char) {
    return [...string.toLowerCase()].filter(x=> x == char.toLowerCase()).length
  }

//   Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let arr = s.split("")
    let answer = []
    arr.forEach((x,i)=> x == "#" ? answer.pop() : answer.push(x))
    return answer.join('')
   }

//    In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

decodeMorse = function(morseCode){
    return morseCode.trim().split('   ').map(x => x.split(' ').map(y => MORSE_CODE[y]).join('')).join(' ');
 }


