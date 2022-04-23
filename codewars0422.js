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

//   In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
// attribute 	value
// name 	user argument or 'Hero'
// position 	'00'
// health 	100
// damage 	5
// experience 	0

function Hero(name = 'Hero'){
    this.name = name,
    this.position = '00',
    this.health = 100,
    this.damage = 5,
    this.experience = 0
  }

//   Return the type of the sum of the two arguments
function typeOfSum(a, b) {
    return typeof (a + b)
  }

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let vowels = "aeiou"
    return str.split('').filter(x => !vowels.includes(x.toLowerCase())).join('')
  }