// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.
// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes
//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.
//     Returned Array/list should store the leading numbers in the same order in the original array/list .
// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
//     4 is greater than the sum all the elements to its right side
//     Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
//     17 is greater than the sum all the elements to its right side
//     5 is greater than the sum all the elements to its right side
//     Note : The last element 2 is greater than the sum of its right elements (abstract zero). 

function arrayLeaders(numbers){
    let answer = []
    for (let i=0; i < numbers.length; i++){
      if (numbers[i] > numbers.slice(i+1).reduce((ac,el)=> ac + el, 0))
      answer.push(numbers[i])
 }return answer
 }


//  John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

//     makes this string uppercase
//     gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
    return s.split(';').map(x=>'\('+ x.toUpperCase().split(':').reverse().join(', ')+'\)').sort().join('')
}