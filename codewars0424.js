// You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

// You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

function isDivisible(wallLength, pixelSize){
    return wallLength % pixelSize == 0
  }
  // Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
  // Task
  
  // Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

 
  class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
};
    

    get info(){
        return `${this.name}s age is ${this.ageage}`;
    }
  }

//   Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

//   minimum age <= your age <= maximum age #Task
  
//   Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
  
//   This equation doesn't work when the age <= 14, so use this equation instead:
  
//   min = age - 0.10 * age
//   max = age + 0.10 * age
  
//   You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

function datingRange(age){
    let min = Math.floor(age / 2 + 7)
    let max = Math.floor((age - 7) * 2)
    if (age <= 14){
      min = Math.floor(age - 0.1 * age)
      max = Math.floor(age + 0.1 * age)
    }
    
    return min+'-'+max
  }

//   The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3

function power(x,y){
    return x ** y
  }


//   Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let multiplier = 0
    let place = bin.length
    let sum = 0
    for (let i = bin.length; i >= 0; i--){
     sum += bin.charAt(place) * multiplier
     multiplier == 0 ? multiplier += 1 : multiplier *= 2
     place--
    }
    return sum
  }
  

//   Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
    return Number(n.toString(2))
    
  }

//   Given an array of integers, find the one that appears an odd number of times.

//   There will always be only one integer that appears an odd number of times.
//   Examples
  
//   [7] should return 7, because it occurs 1 time (which is odd).
//   [0] should return 0, because it occurs 1 time (which is odd).
//   [1,1,2] should return 2, because it occurs 1 time (which is odd).
//   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let answer = []
    A.forEach(x => {
      let count = 0
      for (let i = 0; i <= A.length; i++){
        if (A[i] == x){
          count++
        }
        }if (count % 2 != 0) {
          answer.push(x)
       }
  })
    return answer[0]
  }

//   Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
// Explanation

// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input. 

function charFreq(message) {
  let answer = { }
  
  for (let i = 0; i < message.length; i++){
    if(message[i] in answer){
      answer[message[i]] += 1
  } else {
      answer[message[i]] = 1
  }
  }return answer
  }