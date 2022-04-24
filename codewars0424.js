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