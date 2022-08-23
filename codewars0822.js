// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
    let multiples = []
    for (let ingredient in recipe){
      available[ingredient] ? multiples.push(Math.floor(available[ingredient] / recipe[ingredient])) : multiples.push(0)
    }return Math.min(...multiples)
  }

//   Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

//     If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
//     If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.

// Examples

// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}



  function looseChange(cents){
    cents = Math.floor(cents)
    let coins = {
      'Nickels': 0,
      'Pennies': 0,
      'Dimes': 0,
      'Quarters': 0,
    }
    if (cents < 1) return coins
    coins.Quarters = Math.floor(cents / 25)
    cents -= coins.Quarters * 25
    coins.Dimes = Math.floor(cents / 10)
    cents -= coins.Dimes * 10
    coins.Nickels = Math.floor(cents / 5)
    cents -= coins.Nickels * 5
    coins.Pennies = Math.floor(cents)
    cents -= coins.Pennies
    console.log(coins)
    return coins
  }