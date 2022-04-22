// Terminal game bug squashing

// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

var health = 100
var position = 0
var coins = 0

function main(){
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
  
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number 	price (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

// You can use if..else or ternary operator to complete it.

function saleHotdogs(n){
    return n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95
  }