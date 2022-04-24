
// Define a class Person with the following properties:

//     A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
//     A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
//     A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"

// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    }
  
  
    static greetExtraTerrestrials(raceName) {
      return "Welcome to Planet Earth " + raceName  
    }
    sayFullName() { 
      return this.firstName + " " + this.lastName
    }
      
  }

//   After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.
// Example

// findSum(1,2,3,4); // returns 10 
// findSum(1,-2);    // returns -1 
// findSum();        // returns 0 

function findSum(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++)
      if (arguments[i] < 0){
        return -1
      }else  sum += +arguments[i]
    return sum
  }


//   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//   Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
  
//   Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let mults = []
    if (number < 0){
      return 0
    }
    for(let i = 0; i < number; i++){
     if (i % 3 == 0 || i % 5 == 0) {
       mults.push(i)
        }
      }return mults.reduce((acc, el) => acc + el, 0)
    }

    // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
    // Example
    
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
    
    // The returned format must be correct in order to complete this challenge.
    // Don't forget the space after the closing parentheses!
    
    function createPhoneNumber(n){
        return `\(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
      }
