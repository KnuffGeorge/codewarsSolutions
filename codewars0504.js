// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

// What kind of tests we made for your code:

//     Function have to count words and not spaces. You have to be sure that you doing it right
//     Empty string has no words.
//     String with spaces around should be trimmed.
//     Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
//     Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    return Math.max(str.trim().split(' ').filter(x => x != '').length, str.trim().split('﻿').filter(x => x != '').length )
  }

//   Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it

function fiveLine(s){
    let answer = ""
    for (let i = 1; i <= 5; i++){
      answer += s.trim().repeat(i) + "\n"
    }
    return answer.slice(0,-1)
  }

//   Coding in function padIt, function accept 2 parameters:

//   str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
//   n, it's a number, how many times to pad the string.


//   Behaviour

// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

function padIt(str,n){
    let arr = str.split('')
    let i = 0
     while(arr.length < str.length + n){
       i % 2 == 1 ? arr.push('*') : arr.unshift('*')
       i++
   }return arr.join('')
   }


//    Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

//    He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.
   
//    BAC calculator Formula:
   
//    BAC% = (A × 5.14 / W × r) - .015 × H 
   
//    A: Total alcohol consumed, in ounces (oz)
//    W: Body weight, in pounds (lbs)
//    r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
//    H: Time passed since drinking, in hours
   

   function bloodAlcoholContent(drinks, weight, sex, time){
    let A = drinks.ounces * drinks.abv
    return +(A * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66) - (.015 * time)).toFixed(4);
  }