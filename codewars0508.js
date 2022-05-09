// Task

//     Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//     In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
//     Consider an Example :

// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

//     1 * (2 + 3) = 5
//     1 * 2 * 3 = 6
//     1 + 2 * 3 = 7
//     (1 + 2) * 3 = 9

// So the maximum value that you can obtain is 9.
// Notes

//     The numbers are always positive.
//     The numbers are in the range (1  ≤  a, b, c  ≤  10).
//     You can use the same operation more than once.
//     It's not necessary to place all the signs and brackets.
//     Repetition in numbers may occur .
//     You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    console.log(a,b,c)
    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
  }

//   Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    let arr = n.toString().split('')
    while (arr[arr.length-1] == 0){
    arr.pop()  
    }
      
    return +arr.join('')
    }

    // Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

    const getNumberFromString = (s) => +s.split('').filter(x => !isNaN(+x) && x != " ").join('')  

    // You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

//     If the age is 12 or lower, it return "You're a(n) kid"
//     If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
//     If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
//     If the age is 65 or above, it return "You're a(n) elderly"

// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

//     The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
//     Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
//     Write everything in one line, \n and other whitespaces counts.

// Whatever you do, do not change what the function does. Good luck :)

let describeAge = (a) => {return "You're a(n) " + ((a <= 12) ? "kid" : (a <= 17) ? "teenager" : (a <= 64) ? "adult" : "elderly")}

// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
// Mission

// Your mission is to implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

// Good luck :D

function htmlspecialchars(formData) {
    let safe = {
      '<': "&lt;",
      '>': "&gt;",
      '"': "&quot;",
      '&': "&amp;"
      }
    let arr = formData.split('')
     for (let i = 0; i < arr.length; i++){
       if (arr[i] in safe){
         arr[i] = safe[arr[i]]
       }
     }
     return arr.join('')
   
   }