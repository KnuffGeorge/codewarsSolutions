// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''

function vowel2index(str) {
    let vowels = "AEIOUaeiou"
    return [...str].map((x,i)=> vowels.includes(x) ? x = i + 1 : x).join('')
  }

//   This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

var removeVowels = function(str){
    let vowels = "aeiou"
    return [...str].filter(x=> !vowels.includes(x)).join('')
    }
    // Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

    // Note: only positive integers will be tested.
    
    function sumOfIntegersInString(s){
        return s.split('').map(x=> !isNaN(+x) ? x : "X").join('').split('X').reduce((ac,el)=> ac + +el, 0)
      }

    //   Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

    //   For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:
      
    //   * 'Hello world'   => true
    //   * ' Hello world'  => false
    //   * 'Hello world  ' => false
    //   * 'Hello  world'  => false
    //   * 'Hello'         => true
      
    //   Even though there are no spaces, it is still valid because none are needed:
    //   * 'Helloworld'    => true
    //   * 'Helloworld '   => false
    //   * ' '             => false
    //   * ''              => true
      
    function validSpacing(s) {
        if (s.startsWith(' ') || s.endsWith(' ')){
          return false
        }if (s === ""){
          return true
        }
        return !s.split(' ').includes('')
      }