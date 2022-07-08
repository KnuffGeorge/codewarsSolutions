// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
// Examples:

// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function(date1, date2){
    return Math.abs(date1.split('/')[0] - date2.split('/')[0]);
  }

//   Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

// For example: 
// Given sum = 12 and gcd = 4...

// solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.

// solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.

// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].

function solve(s,g){
    for(let i = 1; i<s; i++){
      if (i % g == 0 & (s-i) % g == 0){
        return [i, s-i]
      }
    }return -1
}

// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated. 
function solution(string,limit){
    return string.length <= limit ? string : string.slice(0,limit) + '...';
}

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

// function getOrder(input) {
//     let order = []
//     let menu =[
//     'Burger',
//     'Fries',
//     'Chicken',
//     'Pizza',
//     'Sandwich',
//     'Onionrings',
//     'Milkshake',
//     'Coke', 
//     ]
//     menu.forEach(x=> order.push((x + " ").repeat(input.split(x.toLowerCase()).length - 1)))
//     return order.join('').trim();
//   }

