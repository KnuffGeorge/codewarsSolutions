// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"

// If arr contains elements 5 and 13, function should return:

// "It's a black array"

// If arr contains neither 5 nor 13, function should return:

// "It's a white array"

function blackAndWhite(arr){
    if (!Array.isArray(arr)){
      return "It's a fake array"
    }else{
      return (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) ? "It's a black array" : "It's a white array"
    }
    
  }

//   Preloaded for you is a class Dog:

// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }

// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }
// Shorten it so that it meets the strict character count requirements for this Kata.
// 

class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender)
      this.species = "Labrador";
      this.legs = 4;
      this.size = "Large";
      this.master = master;
      this.loyal = true;
    }
  }
//   Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

//   You may find the following Math methods useful:
  
//       Math.round(x) (of course)
//       Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
  

  Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
  }