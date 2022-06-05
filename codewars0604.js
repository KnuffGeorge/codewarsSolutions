// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
// Your Task

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// Rules

//     you can put at most 8 eggs into the pot at once
//     it takes 5 minutes to boil an egg
//     we assume, that the water is boiling all the time (no time to heat up)
//     for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

// Example (Input --> Output)

// 0 --> 0
// 5 --> 5
// 10 --> 10

function cookingTime(eggs) {
    return Math.ceil(eggs/8) * 5;
  }

//   In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr){
    let answer = []
    arr.forEach((x,i) => arr.indexOf(x) === i && arr.lastIndexOf(x) === i ? answer.push(x) : null)
    return answer.reduce((ac,el)=> ac + el)  
    };