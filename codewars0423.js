
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


